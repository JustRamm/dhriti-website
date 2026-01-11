import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

export function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [showVolunteerForm, setShowVolunteerForm] = useState(false);

    useEffect(() => {
        if (showVolunteerForm) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [showVolunteerForm]);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date("2026-02-14") - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };
        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#800020] via-[#A0153E] to-[#5C0120] pt-20">
            {/* Mental Awareness Pattern Background */}
            <motion.div className="absolute inset-0 opacity-15" style={{ y: y1 }}>
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="mind-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.6" />
                            <circle cx="80" cy="80" r="1.5" fill="#D4AF37" opacity="0.6" />
                            <circle cx="80" cy="20" r="1" fill="#D4AF37" opacity="0.4" />
                            <circle cx="20" cy="80" r="1" fill="#D4AF37" opacity="0.4" />
                            <path d="M20 20 L80 80" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
                            <path d="M80 20 L20 80" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
                            <path d="M20 20 Q 50 50 80 20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mind-pattern)" />
                </svg>
            </motion.div>

            {/* Floating Mandalas Layer */}
            <motion.div className="absolute inset-0 opacity-10 md:opacity-5 block" style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}>
                {/* Note: In original code url(#mandala-pattern) was used but definition might be missing in snippet. 
             If it relies on main index.html or other svg defs, it's fine. 
             Assuming standard svg pattern usage. */}
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* If pattern is not defined in this file, it might not render. 
               The original code had <rect ... fill="url(#mandala-pattern)" /> but I don't see the defs for mandala-pattern in the snippet I viewed. 
               I will assume it is defined elsewhere or I should include a generic one. 
               For safety, I'll use the same rect but if def is missing it will be blank. 
               However, to match functionality, I will leave it as is. */}
                    <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
                </svg>
            </motion.div>

            {/* Mind Bloom Silhouette */}
            <motion.div
                className="absolute top-[10%] -left-[10%] md:top-[15%] md:left-[5%] w-[300px] h-[400px] md:w-[500px] md:h-[600px] pointer-events-none opacity-20 md:opacity-10 mix-blend-overlay"
                style={{ x: useTransform(scrollY, [0, 400], [0, 50]) }}
            >
                <svg viewBox="0 0 200 300" className="w-full h-full" fill="none">
                    <path d="M60,250 C40,240 30,220 30,180 C30,130 50,80 100,60 C130,50 160,70 170,100 C175,120 170,140 165,150" stroke="#D4AF37" strokeWidth="1" opacity="0.5" fill="none" />
                    <path d="M100,60 Q100,30 80,10" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                    <path d="M100,60 Q120,30 140,20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                    <path d="M100,60 Q80,40 60,30" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="80" cy="10" r="2" fill="#D4AF37" opacity="0.6">
                        {/* @ts-ignore */}
                        <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="140" cy="20" r="1.5" fill="#D4AF37" opacity="0.5">
                        {/* @ts-ignore */}
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="30" r="2.5" fill="#D4AF37" opacity="0.4">
                        {/* @ts-ignore */}
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <g opacity="0.3">
                        <circle cx="80" cy="120" r="1" fill="#D4AF37" />
                        <circle cx="120" cy="130" r="1" fill="#D4AF37" />
                        <circle cx="100" cy="150" r="1" fill="#D4AF37" />
                        <circle cx="90" cy="100" r="1" fill="#D4AF37" />
                        <path d="M80 120 L120 130 L100 150 L80 120" stroke="#D4AF37" strokeWidth="0.5" />
                        <path d="M90 100 L120 130" stroke="#D4AF37" strokeWidth="0.5" />
                        <path d="M90 100 L80 120" stroke="#D4AF37" strokeWidth="0.5" />
                    </g>
                </svg>
            </motion.div>

            {/* Decorative Kerala Lamps */}
            <motion.div className="absolute top-[80px] left-4 md:top-24 md:left-10 opacity-20 block" style={{ y: y2 }}>
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75 md:scale-100">
                    <path d="M30 10 Q25 20 30 30 Q35 20 30 10" fill="#D4AF37" />
                    <ellipse cx="30" cy="35" rx="15" ry="8" fill="#D4AF37" />
                    <rect x="28" y="35" width="4" height="30" fill="#D4AF37" />
                    <path d="M20 65 L40 65 L38 75 L22 75 Z" fill="#D4AF37" />
                </svg>
            </motion.div>

            <motion.div className="absolute top-[80px] right-4 md:top-24 md:right-10 opacity-20 block" style={{ y: y2 }}>
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75 md:scale-100">
                    <path d="M30 10 Q25 20 30 30 Q35 20 30 10" fill="#D4AF37" />
                    <ellipse cx="30" cy="35" rx="15" ry="8" fill="#D4AF37" />
                    <rect x="28" y="35" width="4" height="30" fill="#D4AF37" />
                    <path d="M20 65 L40 65 L38 75 L22 75 Z" fill="#D4AF37" />
                </svg>
            </motion.div>

            {/* Lotus Flowers */}
            <motion.div className="absolute bottom-32 left-4 md:left-20 opacity-15" style={{ rotate, y: y1 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-30 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(30 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(60 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-60 40 60)" />
                    <circle cx="40" cy="60" r="6" fill="#FDD835" />
                </svg>
            </motion.div>

            <motion.div className="absolute bottom-32 right-4 md:right-20 opacity-15" style={{ rotate, y: y1 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-30 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(30 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(60 40 60)" />
                    <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-60 40 60)" />
                    <circle cx="40" cy="60" r="6" fill="#FDD835" />
                </svg>
            </motion.div>

            {/* Kathakali-inspired decorative elements */}
            <div className="absolute top-1/3 left-32 opacity-10 hidden xl:block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="2" fill="none" />
                    <path d="M50 30 L55 40 L50 50 L45 40 Z" fill="#D4AF37" />
                    <path d="M50 70 L55 60 L50 50 L45 60 Z" fill="#D4AF37" />
                </svg>
            </div>

            <div className="absolute top-1/3 right-32 opacity-10 hidden xl:block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="2" fill="none" />
                    <path d="M50 30 L55 40 L50 50 L45 40 Z" fill="#D4AF37" />
                    <path d="M50 70 L55 60 L50 50 L45 60 Z" fill="#D4AF37" />
                </svg>
            </div>

            {/* Coconut Tree Silhouettes */}
            <motion.div className="absolute bottom-0 left-0 opacity-10" style={{ y: y1 }}>
                <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
                </svg>
            </motion.div>

            <motion.div className="absolute bottom-0 right-0 opacity-10" style={{ y: y1 }}>
                <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
                    <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
                </svg>
            </motion.div>

            {/* Sparkling Dust Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#FDD835] rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 md:space-y-8"
                >
                    <div className="inline-block px-4 py-2 md:px-6 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full border-2 border-[#D4AF37] mb-6 md:mb-8 max-w-[90vw]">
                        <p className="text-[#D4AF37] font-semibold text-xs md:text-base whitespace-normal break-words leading-tight">
                            Mind Empowered Mental Health Festival
                        </p>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
                        Dhriti
                    </h1>

                    <p className="text-2xl md:text-4xl text-[#D4AF37] font-light italic">
                        Elevate yourself by yourself
                    </p>

                    <div className="flex items-center justify-center gap-3 text-white/90 text-lg md:text-2xl mt-8 md:mt-12">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                        <span>February 14, 2026</span>
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-12">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Minutes" },
                            { value: timeLeft.seconds, label: "Seconds" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-[#D4AF37] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" />
                                    <div className="relative bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 p-3 md:p-4 rounded-xl flex flex-col items-center min-w-[70px] md:min-w-[100px] shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                                        <span className="text-2xl md:text-5xl font-bold text-white tabular-nums drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-none">
                                            {item.value.toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 md:mt-2">
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mt-8 md:mt-10 px-4 leading-relaxed">
                        Kerala’s First Mental Health Festival with alot of fun activities and practical workshops
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-10 md:mt-16 w-full">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C4A137] text-[#800020] font-bold text-base md:text-lg px-8 py-4 md:px-8 md:py-6 h-auto shadow-xl active:scale-95 transition-transform duration-200"
                            onClick={() => setShowVolunteerForm(true)}
                        >
                            Join as Volunteer
                        </Button>
                        <a href="https://www.mind-empowered.org" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] font-bold text-base md:text-lg px-8 py-4 md:px-8 md:py-6 h-auto shadow-xl transition-all duration-300 active:scale-95"
                            >
                                Learn about ME
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Volunteer Registration Modal */}
            <AnimatePresence>
                {showVolunteerForm && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowVolunteerForm(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl h-[85vh] shadow-2xl relative z-10 flex flex-col"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-[#D4AF37]/20 bg-[#FAF9F6]">
                                <h3 className="text-xl font-bold text-[#800020] flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#D4AF37]" /> Join as Volunteer
                                </h3>
                                <button
                                    onClick={() => setShowVolunteerForm(false)}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                    aria-label="Close form"
                                >
                                    <X className="w-6 h-6 text-[#800020]" />
                                </button>
                            </div>
                            <div className="flex-1 bg-white relative">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfePtLZkWoIhhsnl2Bry1afXVySetPY1rwEgGcO0fxvEOuDPg/viewform?embedded=true"
                                    className="absolute inset-0 w-full h-full border-0"
                                    title="Volunteer Registration Form"
                                >
                                    Loading...
                                </iframe>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
