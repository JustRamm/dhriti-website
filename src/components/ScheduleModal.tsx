import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Sparkles, Gamepad2, Hammer, MapPin, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { SCHEDULE_DATA } from "@/data/activities";

interface ScheduleModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onSelectActivity: (title: string) => void;
}

type TabType = 'workshops' | 'allday' | 'games';

const ButterflyIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
    >
        <path d="M50 50 C 20 10, 0 10, 5 30 C 10 45, 30 35, 50 50 Z" />
        <path d="M50 50 C 80 10, 100 10, 95 30 C 90 45, 70 35, 50 50 Z" />
        <path d="M50 50 Q 40 70 30 75" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 50 Q 60 70 70 75" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="3" />
    </svg>
);

export function ScheduleModal({ isOpen, onOpenChange, onSelectActivity }: ScheduleModalProps) {
    const [activeTab, setActiveTab] = useState<TabType>('workshops');

    useEffect(() => {
        if (isOpen) {
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
    }, [isOpen]);

    const tabConfig = [
        { id: 'workshops' as TabType, label: 'Workshops', icon: Clock },
        { id: 'allday' as TabType, label: 'All Day', icon: Hammer },
        { id: 'games' as TabType, label: 'Games', icon: Gamepad2 },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="absolute inset-0 bg-[#4a0013]/60 backdrop-blur-md"
                        aria-hidden="true"
                    />

                    {/* Decorative Butterflies */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 left-10 text-[#FFD700]/20 pointer-events-none hidden md:block"
                    >
                        <ButterflyIcon className="w-24 h-24" />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 right-10 text-[#FFD700]/20 pointer-events-none hidden md:block"
                    >
                        <ButterflyIcon className="w-32 h-32" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="bg-white rounded-[2rem] overflow-hidden w-full max-w-4xl max-h-[85vh] shadow-[0_32px_64px_rgba(0,0,0,0.4)] relative z-10 flex flex-col border border-[#D4AF37]/30"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Elegant Header */}
                        <div className="relative p-8 md:p-10 bg-gradient-to-br from-[#800020] to-[#4a0013] text-white">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <ButterflyIcon className="w-48 h-48" />
                            </div>

                            <div className="flex justify-between items-start relative z-10">
                                <div className="space-y-2">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-2 bg-[#FFD700] text-[#800020] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        Dhriti 2026
                                    </motion.div>
                                    <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none italic">
                                        Festival Schedule
                                    </h3>
                                </div>
                                <button
                                    onClick={() => onOpenChange(false)}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/20 group backdrop-blur-md"
                                    aria-label="Close"
                                >
                                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Custom Tab Switcher */}
                            <div className="flex gap-2 mt-8 bg-[#4a0013]/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md max-w-fit">
                                {tabConfig.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isActive ? 'text-[#800020]' : 'text-white/60 hover:text-white'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTabBg"
                                                    className="absolute inset-0 bg-[#FFD700] rounded-xl shadow-[0_4px_12px_rgba(255,215,0,0.3)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'animate-pulse' : ''}`} />
                                            <span className="relative z-10">{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto bg-[#FAF9F6] p-6 md:p-10 relative">
                            {/* Watermark Logo/Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                                <ButterflyIcon className="w-[80%] h-[80%]" />
                            </div>

                            <AnimatePresence mode="wait">
                                {activeTab === 'workshops' && (
                                    <motion.div
                                        key="workshops"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="relative pl-8 md:pl-12 pt-4 relative z-10"
                                    >
                                        {/* Vertical Timeline Line */}
                                        <div className="absolute left-[15px] md:left-[23px] top-0 bottom-10 w-0.5 bg-gradient-to-b from-[#800020] via-[#D4AF37] to-transparent rounded-full opacity-30" />

                                        <div className="space-y-8">
                                            {SCHEDULE_DATA.workshops.filter(item => !item.title.startsWith('//')).map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="relative group cursor-pointer"
                                                    onClick={() => onSelectActivity(item.title)}
                                                >
                                                    {/* Timeline Dot */}
                                                    <div className="absolute left-[-25px] md:left-[-35px] top-2 h-5 w-5 md:h-6 md:w-6 rounded-full bg-white border-4 border-[#800020] shadow-[0_0_15px_rgba(128,0,32,0.3)] z-20 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                                                    </div>

                                                    <div className="bg-white p-6 rounded-[2rem] border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                                        <div className="text-xs font-black text-[#D4AF37] uppercase tracking-widest mb-1 flex items-center gap-2">
                                                            <div className="w-8 h-px bg-[#D4AF37]/30" />
                                                            {item.time}
                                                        </div>
                                                        <div className="flex justify-between items-center gap-4">
                                                            <h5 className="text-[#800020] font-bold text-xl md:text-2xl leading-tight">
                                                                {item.title}
                                                            </h5>
                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#800020]/5 px-3 py-1 rounded-full text-[10px] font-bold text-[#800020] whitespace-nowrap">
                                                                View Details →
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'allday' && (
                                    <motion.div
                                        key="allday"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
                                    >
                                        {SCHEDULE_DATA.allDayWorkshops.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="bg-white p-5 rounded-2xl border border-[#D4AF37]/10 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer group"
                                                onClick={() => onSelectActivity(item)}
                                            >
                                                <div className="w-3 h-3 rounded-full bg-[#FFD700] group-hover:scale-125 transition-transform" />
                                                <span className="text-[#800020] font-bold text-lg flex-grow">{item}</span>
                                                <div className="text-[10px] font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                                    DETAILS
                                                </div>
                                            </motion.div>
                                        ))}
                                        <div className="md:col-span-2 bg-[#800020]/5 p-6 rounded-3xl border-2 border-dashed border-[#800020]/20 mt-4">
                                            <p className="text-[#800020]/60 text-center font-medium italic">
                                                These workshops run continuously from 10:00 AM to 6:30 PM
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'games' && (
                                    <motion.div
                                        key="games"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10"
                                    >
                                        {SCHEDULE_DATA.games.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ y: -5 }}
                                                className="bg-white p-4 rounded-3xl border border-[#D4AF37]/10 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                                                onClick={() => onSelectActivity(item)}
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#800020] transition-colors">
                                                    <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-[#800020] font-bold text-sm leading-tight">{item}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Polished Footer */}
                        <div className="p-6 bg-white border-t border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2 text-[#800020]/50">
                                <Info className="w-4 h-4" />
                                <p className="text-xs font-medium italic">
                                    Timings are subject to change. Arrive 10 mins early for workshops.
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                                    Stay Connected
                                </span>
                                <div className="h-1 w-8 bg-[#D4AF37]/20 rounded-full" />
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#800020]" />)}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
