import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";
import { Sparkles, X, Mic, Info } from "lucide-react";
import { ACTIVITIES_DATA, SURPRISE_REVEAL_DATE } from "@/data/activities";

interface ActivityShowcaseProps {
    setSurpriseBoxRef?: (node: HTMLElement | null) => void;
}

export function ActivityShowcase({ setSurpriseBoxRef }: ActivityShowcaseProps) {
    const [visibleActivitiesCount, setVisibleActivitiesCount] = useState(4);
    const [isSurpriseRevealed, setIsSurpriseRevealed] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const [selectedActivity, setSelectedActivity] = useState<{ title: string; description: string; image: string; timing: string; instruction: string; speaker?: string; isSurprise?: boolean } | null>(null);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    useEffect(() => {
        const checkReveal = () => {
            const now = new Date();
            setIsSurpriseRevealed(now >= SURPRISE_REVEAL_DATE);
        };

        checkReveal();
        const interval = setInterval(checkReveal, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selectedActivity || isRegistrationOpen) {
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
    }, [selectedActivity, isRegistrationOpen]);

    const handleLoadMore = () => {
        setVisibleActivitiesCount(prev => Math.min(prev + 4, ACTIVITIES_DATA.length));
    };

    const handleCardClick = (activity: any) => {
        if (activity.isSurprise && !isSurpriseRevealed) {
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate(200);
            }
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        } else {
            setSelectedActivity(activity);
        }
    };

    return (
        <section id="activities" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                        Experience Dhriti
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-2">
                        Immersive activities designed to engage, inspire, and transform
                    </p>
                </motion.div>

                {/* Scroll Controls */}
                <div className="flex justify-end gap-2 mb-4 px-1">
                    <button
                        type="button"
                        onClick={() => document.getElementById('activities-scroll-container')?.scrollBy({ left: -320, behavior: 'smooth' })}
                        className="p-2 rounded-full border border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020] transition-colors bg-white shadow-sm"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => document.getElementById('activities-scroll-container')?.scrollBy({ left: 320, behavior: 'smooth' })}
                        className="p-2 rounded-full border border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020] transition-colors bg-white shadow-sm"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div
                    id="activities-scroll-container"
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {ACTIVITIES_DATA.map((activity, index) => {
                        const isLockedSurprise = activity.isSurprise && !isSurpriseRevealed;

                        const displayActivity = isLockedSurprise ? {
                            ...activity,
                            title: "A Surprise Event",
                            description: "It's a secret! Join us on Feb 14th at 12:00 PM to find out what magic awaits.",
                            timing: "TBA",
                            image: ""
                        } : activity;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="h-full min-w-[300px] md:min-w-[340px] snap-center"
                                ref={isLockedSurprise ? setSurpriseBoxRef : undefined}
                            >
                                <motion.div
                                    initial={{ scale: 1, rotate: 0 }}
                                    animate={isLockedSurprise && isShaking ? {
                                        x: [-5, 5, -5, 5, 0],
                                        transition: { duration: 0.4 }
                                    } : { scale: 1, rotate: 0 }}
                                    whileHover={isLockedSurprise ? { rotate: [0, -3, 3, -3, 3, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } } : { y: -10 }}
                                    onClick={() => handleCardClick(activity)}
                                    className="group cursor-pointer h-full"
                                >
                                    <Card className={`h-full overflow-hidden border-2 transition-all duration-300 flex flex-col active:scale-95 relative ${isLockedSurprise ? 'bg-gradient-to-br from-[#4a0013] via-[#800020] to-[#4a0013] border-[#FFD700] shadow-[0_0_30px_rgba(128,0,32,0.4)]' : 'bg-white border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl'}`}>
                                        {isLockedSurprise && (
                                            <>
                                                <div className="absolute inset-y-0 left-1/2 w-12 -translate-x-1/2 bg-gradient-to-b from-[#FFD700]/40 via-[#FFD700]/20 to-[#FFD700]/40 border-x border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)] pointer-events-none z-0">
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                </div>
                                                <div className="absolute inset-x-0 top-[40%] h-12 -translate-y-1/2 bg-gradient-to-r from-[#FFD700]/40 via-[#FFD700]/20 to-[#FFD700]/40 border-y border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)] pointer-events-none z-0">
                                                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                                </div>

                                                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                                                    <motion.svg
                                                        width="100"
                                                        height="80"
                                                        viewBox="0 0 80 60"
                                                        fill="none"
                                                        className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] filter brightness-110"
                                                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                    >
                                                        <defs>
                                                            <linearGradient id="goldGradientSurprise" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" stopColor="#FFD700" />
                                                                <stop offset="50%" stopColor="#FDB931" />
                                                                <stop offset="100%" stopColor="#FFD700" />
                                                            </linearGradient>
                                                            <filter id="glowSurprise">
                                                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                                                <feMerge>
                                                                    <feMergeNode in="coloredBlur" />
                                                                    <feMergeNode in="SourceGraphic" />
                                                                </feMerge>
                                                            </filter>
                                                        </defs>
                                                        <path d="M40 30 C 20 10, 0 10, 5 30 C 10 45, 30 35, 40 30" fill="url(#goldGradientSurprise)" filter="url(#glowSurprise)" />
                                                        <path d="M40 30 C 60 10, 80 10, 75 30 C 70 45, 50 35, 40 30" fill="url(#goldGradientSurprise)" filter="url(#glowSurprise)" />
                                                        <path d="M40 30 Q 30 50 20 55" stroke="url(#goldGradientSurprise)" strokeWidth="4" strokeLinecap="round" />
                                                        <path d="M40 30 Q 50 50 60 55" stroke="url(#goldGradientSurprise)" strokeWidth="4" strokeLinecap="round" />
                                                        <circle cx="40" cy="30" r="5" fill="#FFE4B5" stroke="#B8860B" strokeWidth="1" />
                                                    </motion.svg>
                                                </div>
                                            </>
                                        )}

                                        {activity.isSurprise && isSurpriseRevealed && (
                                            <div className="absolute top-0 right-0 z-30">
                                                <div className="bg-[#FFD700] text-[#800020] text-xs font-bold px-3 py-1 rounded-bl-xl shadow-md">
                                                    SURPRISE REVEALED!
                                                </div>
                                            </div>
                                        )}

                                        <div className={`h-48 overflow-hidden flex items-center justify-center relative z-10 ${isLockedSurprise ? 'bg-transparent' : 'bg-gray-100'}`}>
                                            {isLockedSurprise ? (
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <Sparkles className="absolute top-4 right-4 w-8 h-8 text-[#FFD700] animate-spin-slow" />
                                                    <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-white animate-pulse delay-500" />
                                                </div>
                                            ) : (
                                                <LazyImage
                                                    src={displayActivity.image}
                                                    alt={displayActivity.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                                    wrapperClassName="w-full h-full"
                                                    loading="eager"
                                                />
                                            )}

                                            {!isLockedSurprise && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            )}
                                        </div>

                                        <CardHeader className="relative z-10 text-center pb-2 pt-6 px-4">

                                            <CardTitle className={`leading-tight ${isLockedSurprise ? 'text-[#FFD700] text-2xl font-black tracking-wide drop-shadow-md' : 'text-[#800020] text-xl'}`}>
                                                {displayActivity.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow flex flex-col relative z-10 text-center px-6 pb-6 pt-2">
                                            <p className={`text-sm ${isLockedSurprise ? 'text-[#FFE4B5] font-medium' : 'text-gray-600'} mb-6 flex-grow line-clamp-3`}>
                                                {displayActivity.description}
                                            </p>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCardClick(activity);
                                                }}
                                                className={`w-full ${isLockedSurprise ? 'bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#FFE4B5] hover:to-[#D4AF37] text-[#800020] font-bold border-none shadow-lg' : 'bg-transparent border-2 border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white'} mt-auto transition-all rounded-xl py-6 tracking-wide text-sm active:scale-95`}
                                            >
                                                {isLockedSurprise ? 'Reveal Magic ✨' : 'View Details'}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>


            </div>



            {/* Activity Details Modal */}
            <AnimatePresence>
                {selectedActivity && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedActivity(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative z-10 flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="activity-title"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedActivity(null)}
                                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-[#800020]" />
                            </button>

                            <div className="h-48 md:h-64 overflow-hidden relative">
                                <LazyImage
                                    src={selectedActivity.image}
                                    alt={selectedActivity.title}
                                    className="w-full h-full object-cover"
                                    wrapperClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 id="activity-title" className="text-3xl font-bold text-white shadow-black drop-shadow-md">{selectedActivity.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
                                <div>
                                    <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-1">Description</h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">{selectedActivity.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                                    {selectedActivity.speaker && (
                                        <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#D4AF37]/20">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Mic className="w-5 h-5 text-[#800020]" />
                                                <h4 className="font-bold text-[#800020]">Facilitator</h4>
                                            </div>
                                            <p className="text-gray-600 font-medium">{selectedActivity.speaker}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-[#800020]/5 p-5 rounded-xl border-l-4 border-[#800020]">
                                    <h4 className="font-bold text-[#800020] mb-2 flex items-center gap-2">
                                        <Info className="w-5 h-5" /> Instructions
                                    </h4>
                                    <p className="text-gray-700 italic">{selectedActivity.instruction}</p>
                                </div>

                                <div className="flex flex-col gap-2 mt-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-[#800020] animate-pulse">
                                            Only {Math.floor(Math.random() * 20) + 5} seats left!
                                        </span>
                                        <span className="text-gray-500">Free Registration</span>
                                    </div>
                                    <Button
                                        onClick={() => setIsRegistrationOpen(true)}
                                        className="w-full bg-[#800020] hover:bg-[#600018] text-white py-6 text-lg shadow-lg"
                                    >
                                        Register Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {/* Google Form Registration Modal */}
            <AnimatePresence>
                {isRegistrationOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsRegistrationOpen(false)}
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
                                    <Sparkles className="w-5 h-5 text-[#D4AF37]" /> Register for Event
                                </h3>
                                <button
                                    onClick={() => setIsRegistrationOpen(false)}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                                    aria-label="Close registration"
                                >
                                    <X className="w-6 h-6 text-[#800020]" />
                                </button>
                            </div>
                            <div className="flex-1 bg-white relative">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSdRdX19XoYFkuJq3yklwYireMzul6zZyRIF-oKlFEWxf3BG7A/viewform?embedded=true"
                                    className="absolute inset-0 w-full h-full border-0"
                                    title="Registration Form"
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
