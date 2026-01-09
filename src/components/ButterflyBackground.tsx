
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Helper to find visible valid landing spots
const getLandingSpots = () => {
    if (typeof document === 'undefined') return [];

    // Select containers, images, and structural elements. explicitly avoid text tags.
    const elements = Array.from(document.querySelectorAll('button, img, section, .card, .border, [class*="rounded-"], [class*="bg-"]'));

    const visibleElements = elements.filter(el => {
        // Double check to ensure we didn't accidentally pick up a text element with a class
        const tagName = el.tagName.toLowerCase();
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'i', 'b', 'strong'].includes(tagName)) return false;

        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 90 &&
            rect.left >= 20 &&
            rect.bottom <= (window.innerHeight - 50) &&
            rect.right <= (window.innerWidth - 20) &&
            rect.width > 20 && rect.height > 20
        );
    });

    return visibleElements;
};

const isOverlappingText = (x: number, y: number) => {
    if (typeof document === 'undefined') return false;
    // Check collision with text elements. Adding a buffer for the butterfly size.
    // limiting to block-level-ish text to avoid checking every single span in intricate layouts if possible, 
    // but including span for safety as many styled texts use it.
    const textEls = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, a, label, strong, em');

    for (const el of textEls) {
        const rect = el.getBoundingClientRect();
        // Simple point-in-rect check with buffer
        if (
            x >= rect.left - 20 && x <= rect.right + 20 &&
            y >= rect.top - 20 && y <= rect.bottom + 20
        ) {
            return true;
        }
    }
    return false;
};

const Butterfly = ({ isFlying, delay, mousePos, index, isSpecial, onClick, attractionTarget }: { isFlying: boolean, delay: number, mousePos: { x: number, y: number }, index: number, isSpecial?: boolean, onClick?: () => void, attractionTarget?: HTMLElement | null }) => {
    const controls = useAnimation();
    const rotateControls = useAnimation(); // New controller for rotation only
    const wingControls = useAnimation();

    // Physics-based movement for mouse interaction
    const initialX = isSpecial && typeof window !== 'undefined' ? window.innerWidth / 2 + (Math.random() * 200 - 100) : Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
    const initialY = isSpecial && typeof window !== 'undefined' ? window.innerHeight / 2 + (Math.random() * 200 - 100) : 90 + Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 90 : 900);

    const x = useMotionValue(initialX);
    const y = useMotionValue(initialY);

    // Smooth spring animation for mouse following/avoiding
    const springConfig = { damping: 20, stiffness: 100 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Continuous wing flapping
        wingControls.start({
            scaleX: [1, 0.2, 1], // Flapping effect
            transition: {
                duration: isFlying ? 0.8 : 4, // Fast when flying, slow breathing when resting
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [isFlying, wingControls]);

    // Initial fade in
    useEffect(() => {
        controls.start({ opacity: 0.9, scale: 1, transition: { duration: 1 } });
    }, [controls]);

    useEffect(() => {
        if (isHovered) return;

        // Check Attraction Target Visibility FIRST (Override Flight Mode)
        let isAttracted = false;
        let destX = 0, destY = 0;

        if (attractionTarget) {
            const rect = attractionTarget.getBoundingClientRect();
            // Check if target is actually in viewport/visible with slight buffer
            const isVisible = (
                rect.top >= -50 &&
                rect.left >= -50 &&
                rect.bottom <= (window.innerHeight + 50) &&
                rect.right <= (window.innerWidth + 50)
            );

            if (isVisible) {
                isAttracted = true;
                // Swarm the center with some randomness
                destX = rect.left + (rect.width / 2) + ((Math.random() - 0.5) * rect.width * 1.2);
                destY = rect.top + (rect.height / 2) + ((Math.random() - 0.5) * rect.height * 1.2);
            }
        }

        if (isAttracted) {
            // ATTRACTION MODE - Fly to target ASAP
            controls.start({
                x: destX,
                y: destY,
                opacity: 1,
                scale: 1, // Full size
                transition: {
                    duration: 1.5 + Math.random() * 1.0, // Fast swarm (1.5-2.5s)
                    type: "spring",
                    stiffness: 50,
                    damping: 15
                }
            });

            // Gentle rotation when swarming
            rotateControls.start({
                rotate: (Math.random() - 0.5) * 30,
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }
            });
        }
        else if (isFlying) {
            // CHAOTIC FLIGHT MODE - Position
            controls.start({
                x: [
                    null,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth
                ],
                y: [
                    null,
                    90 + Math.random() * (window.innerHeight - 90),
                    90 + Math.random() * (window.innerHeight - 90),
                    90 + Math.random() * (window.innerHeight - 90)
                ],
                opacity: 0.9,
                scale: isSpecial ? 1 : 1.1,
                transition: {
                    duration: 15 + Math.random() * 15, // Reduced min duration for faster dispersal
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear" // Linear ease prevents 'hanging' at endpoints, making it look more continuous
                }
            });

            // CHAOTIC FLIGHT MODE - Rotation (Separate)
            rotateControls.start({
                rotate: [0, 15, -15, 10, -10, 0],
                transition: {
                    duration: 25 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }
            });

        } else {
            // LANDING MODE
            const spots = getLandingSpots();

            // NORMAL LANDING LOGIC
            if (spots.length > 0 && Math.random() > 0.1) { // 90% chance to land on element
                // Smart Distribution: Use index to round-robin through available spots
                // For Special Butterfly, pick RANDOM spot to avoid getting stuck on a hidden first element
                const spotIndex = isSpecial ? Math.floor(Math.random() * spots.length) : (index % spots.length);
                const el = spots[spotIndex];

                if (el) {
                    const rect = el.getBoundingClientRect();

                    // LAND ON PERIMETER/BORDER LOGIC
                    const side = Math.floor(Math.random() * 4); // 0: Top, 1: Right, 2: Bottom, 3: Left

                    switch (side) {
                        case 0: // Top Edge
                            destX = rect.left + Math.random() * rect.width;
                            destY = rect.top;
                            break;
                        case 1: // Right Edge
                            destX = rect.right;
                            destY = rect.top + Math.random() * rect.height;
                            break;
                        case 2: // Bottom Edge
                            destX = rect.left + Math.random() * rect.width;
                            destY = rect.bottom;
                            break;
                        case 3: // Left Edge
                            destX = rect.left;
                            destY = rect.top + Math.random() * rect.height;
                            break;
                        default:
                            destX = rect.left;
                            destY = rect.top;
                    }

                } else {
                    destX = Math.random() * window.innerWidth;
                    destY = 90 + Math.random() * (window.innerHeight - 90);
                }
            } else {
                // Land anywhere
                destX = Math.random() * window.innerWidth;
                destY = 90 + Math.random() * (window.innerHeight - 90);
            }

            // SAFETY CHECK: If landing spot is on text or in restricted top zone, force it to screen edges
            if (destY < 90 || isOverlappingText(destX, destY)) {
                const side = Math.floor(Math.random() * 4);
                const buffer = isSpecial ? 70 : 30; // Increased buffer for Mascot
                switch (side) {
                    case 0: // Top
                        destX = Math.random() * window.innerWidth;
                        destY = 90 + buffer;
                        break;
                    case 1: // Right
                        destX = window.innerWidth - buffer;
                        destY = 90 + Math.random() * (window.innerHeight - 90);
                        break;
                    case 2: // Bottom
                        destX = Math.random() * window.innerWidth;
                        destY = window.innerHeight - buffer;
                        break;
                    case 3: // Left
                        destX = buffer;
                        destY = 90 + Math.random() * (window.innerHeight - 90);
                        break;
                }
            }

            // animate position
            controls.start({
                x: destX,
                y: destY,
                opacity: 0.9,
                scale: isSpecial ? 1 : 1.1,
                transition: {
                    duration: 5 + Math.random() * 2,
                    type: "spring",
                    stiffness: 40
                }
            });

            // animate rotation
            rotateControls.start({
                rotate: Math.random() * 360,
                transition: {
                    duration: 5 + Math.random() * 2,
                    type: "spring",
                    stiffness: 40
                }
            });
        }
    }, [isFlying, controls, rotateControls, index, isHovered, attractionTarget]);

    // Mouse Interaction: Fly away slightly if mouse gets too close
    // Mouse Interaction: Fly away slightly if mouse gets too close
    // DISABLE SCATTER for Special Mascot to make it easier to click
    useEffect(() => {
        if (!isFlying && !isSpecial) {
            const dx = x.get() - mousePos.x;
            const dy = y.get() - mousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                // Scatter effect
                controls.start({
                    x: x.get() + (dx / distance) * 150, // Move away by 150px
                    y: y.get() + (dy / distance) * 150,
                    transition: { duration: 1.0, ease: "backOut" }
                });
            }
        }
    }, [mousePos, isFlying, controls, x, y, isSpecial]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            onHoverStart={() => { setIsHovered(true); controls.stop(); rotateControls.stop(); }} // Stop movement on hover to make clicking easier
            onHoverEnd={() => { setIsHovered(false); }}
            whileHover={{ scale: isSpecial ? 1.5 : 1.2, zIndex: 100 }}
            onClick={onClick}
            style={{ x: springX, y: springY }}
            className={`absolute pointer-events-auto z-40 transition-colors duration-300 cursor-pointer ${isHovered ? 'brightness-125' : ''}`}
        // Made pointer-events-auto so user can interact with them specifically
        >
            {/* Invisible Hit Area Expansion for easier clicking */}
            <div className="absolute -inset-10 bg-transparent z-50 rounded-full" />

            {/* Bubble moved OUTSIDE rotating container to stay upright */}
            {isSpecial && !isFlying && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1, 1, 0.9],
                        y: [15, 0, 0, 10]
                    }}
                    transition={{
                        duration: 5, // Visible for 5s
                        times: [0, 0.15, 0.85, 1], // Smooth entry/exit
                        repeat: Infinity,
                        repeatDelay: 8, // Longer pause (8s) to be less annoying
                        delay: 3,
                        ease: "easeInOut"
                    }}
                    onClick={(e) => { e.stopPropagation(); onClick?.(); }} // Allow clicking the bubble too
                    className="absolute -top-8 -right-8 z-[60] cursor-pointer group pointer-events-none" // Adjusted position closer
                >
                    <div className="relative px-2 py-1 bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.3)] flex items-center gap-1.5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]" />
                        <span className="w-1 h-1 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_4px_#FFD700]" />
                        <span className="text-[9px] tracking-wider font-semibold text-[#FFE4B5] uppercase">Click</span>
                    </div>
                </motion.div>
            )}

            {/* Rotating Container for Butterfly Body/Wings */}
            <motion.div animate={rotateControls}>
                <motion.div animate={wingControls} className="origin-center relative">
                    {/* Special Glow & Sparkle Effect */}
                    {isSpecial && (
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-[#FFD700] blur-xl rounded-full -z-10"
                        />
                    )}

                    {/* Double Wing Layer for 3D Feel */}
                    <svg width={isSpecial ? "50" : "25"} height={isSpecial ? "50" : "25"} viewBox="0 0 50 50" fill="none" className="drop-shadow-lg">
                        {/* Lower Wing (Gold / Pink for Special) */}
                        <path d="M25 25 C 15 15, 5 15, 10 30 C 5 45, 20 45, 25 25" fill={isSpecial ? "#FF1493" : "#D4AF37"} opacity={isSpecial ? "0.9" : "0.6"} />
                        <path d="M25 25 C 35 15, 45 15, 40 30 C 45 45, 30 45, 25 25" fill={isSpecial ? "#FF1493" : "#D4AF37"} opacity={isSpecial ? "0.9" : "0.6"} />

                        {/* Upper Wing (Creamy White / Pinkish White for Special) */}
                        <path d="M25 25 C 20 5, 5 5, 10 25 C 5 35, 20 35, 25 25" fill={isSpecial ? "#FFF0F5" : "#FFF8DC"} stroke={isSpecial ? "#C71585" : "#D4AF37"} strokeWidth={isSpecial ? "1" : "0.5"} opacity="0.95" />
                        <path d="M25 25 C 30 5, 45 5, 40 25 C 45 35, 30 35, 25 25" fill={isSpecial ? "#FFF0F5" : "#FFF8DC"} stroke={isSpecial ? "#C71585" : "#D4AF37"} strokeWidth={isSpecial ? "1" : "0.5"} opacity="0.95" />

                        {/* Body */}
                        <path d="M25 15 L25 35" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />

                        {/* Interactive Click Effect Ripple (Hidden by default) */}
                        {isHovered && (
                            <circle cx="25" cy="25" r="20" stroke="#FFF" strokeWidth="1" opacity="0.5" className="animate-ping" />
                        )}
                    </svg>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export function ButterflyBackground({ attractionTarget }: { attractionTarget?: HTMLElement | null }) {
    const [mounted, setMounted] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [butterflyCount, setButterflyCount] = useState(8);
    const [showMascotPopup, setShowMascotPopup] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Initial check for screen size
        const updateCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setButterflyCount(3); // Mobile: 3
            } else if (width < 1024) {
                setButterflyCount(6); // Tablet: 6
            } else {
                setButterflyCount(9); // Desktop: 9
            }
        };

        updateCount();

        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => setIsScrolling(false), 200);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            updateCount();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            clearTimeout(scrollTimeout);
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[90]">
                {[...Array(butterflyCount)].map((_, i) => (
                    <Butterfly
                        key={i}
                        index={i}
                        isFlying={isScrolling}
                        delay={i * 0.3}
                        mousePos={mousePos}
                        isSpecial={i === 0}
                        onClick={i === 0 ? () => setShowMascotPopup(true) : undefined}
                        attractionTarget={attractionTarget}
                    />
                ))}
            </div>

            {/* Mascot Info Popup */}
            {showMascotPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto"
                    onClick={() => setShowMascotPopup(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 10, opacity: 0 }}
                        className="bg-gradient-to-b from-[#FFFDF5] to-[#FFF8DC] rounded-[2rem] p-8 md:p-10 max-w-md w-full relative shadow-[0_10px_40px_-10px_rgba(128,0,32,0.2)] border-2 border-[#D4AF37]/30 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#800020]/5 rounded-tr-full pointer-events-none" />

                        <button
                            type="button"
                            onClick={() => setShowMascotPopup(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#800020] hover:bg-[#800020]/5 rounded-full transition-colors z-20"
                            title="Close popup"
                            aria-label="Close popup"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                            {/* Animated Butterfly Container */}
                            <motion.div
                                className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-[#D4AF37]/20 shadow-[0_8px_16px_rgba(212,175,55,0.15)] relative mb-2"
                                animate={{
                                    y: [0, -5, 0],
                                    boxShadow: [
                                        "0 8px 16px rgba(212,175,55,0.15)",
                                        "0 15px 25px rgba(212,175,55,0.25)",
                                        "0 8px 16px rgba(212,175,55,0.15)"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-[#FFD700] blur-xl opacity-20 rounded-full"
                                    animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [-2, 2, -2]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <path d="M25 25 C 15 15, 5 15, 10 30 C 5 45, 20 45, 25 25" fill="#FF69B4" opacity="0.6" />
                                    <path d="M25 25 C 35 15, 45 15, 40 30 C 45 45, 30 45, 25 25" fill="#FF69B4" opacity="0.6" />
                                    <path d="M25 25 C 20 5, 5 5, 10 25 C 5 35, 20 35, 25 25" fill="#FFF0F5" stroke="#FF1493" strokeWidth="0.5" />
                                    <path d="M25 25 C 30 5, 45 5, 40 25 C 45 35, 30 35, 25 25" fill="#FFF0F5" stroke="#FF1493" strokeWidth="0.5" />
                                    <path d="M25 15 L25 35" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
                                </motion.svg>
                            </motion.div>

                            <div>
                                <h3 className="text-3xl font-serif font-bold text-[#800020] mb-2 tracking-wide">Meet Our Mascot</h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mx-auto opacity-60"></div>
                            </div>

                            <div className="text-[#5D4037] leading-relaxed text-base font-light font-sans space-y-4">
                                <p>
                                    The <span className="font-medium text-[#c4155a]">Butterfly</span> represents <span className="font-semibold text-[#800020]">transformation</span>, quiet resilience, and the beauty of evolution.
                                </p>
                                <p className="text-sm opacity-90">
                                    Just as it emerges from a cocoon, we believe every individual has the power to rise, heal, and find their wings. At Dhriti, we celebrate this beautiful journey of growth.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowMascotPopup(false)}
                                className="mt-4 px-8 py-2.5 bg-[#800020] text-white rounded-full font-medium tracking-wide hover:bg-[#A0153E] transition-all shadow-[0_4px_14px_rgba(128,0,32,0.3)] hover:shadow-[0_6px_20px_rgba(128,0,32,0.4)] active:scale-95 text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
