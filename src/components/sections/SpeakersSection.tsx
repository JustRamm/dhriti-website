import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { SPEAKERS_DATA } from "@/data/speakers";
import { ChevronLeft, ChevronRight, Quote, X } from "lucide-react";

export function SpeakersSection() {
    const [selectedSpeaker, setSelectedSpeaker] = useState<{ name: string; role: string; topic: string; image: string; bio: string } | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="speakers" className="py-24 md:py-32 bg-gradient-to-input from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#800020 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Our Visionaries</span>
                    <h2 className="text-5xl md:text-6xl font-black text-[#800020] mb-6 tracking-tight">
                        Voices of Dhriti
                    </h2>
                    <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Meet the diverse tapestry of healers, artists, and leaders weaving the story of resilience.
                    </p>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative z-10 group/slider">
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
                    <button
                        onClick={() => scroll('left')}
                        className="bg-white/80 backdrop-blur-md text-[#800020] p-4 rounded-full shadow-2xl hover:bg-[#800020] hover:text-[#D4AF37] transition-all duration-300 border border-[#800020]/10"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
                    <button
                        onClick={() => scroll('right')}
                        className="bg-white/80 backdrop-blur-md text-[#800020] p-4 rounded-full shadow-2xl hover:bg-[#800020] hover:text-[#D4AF37] transition-all duration-300 border border-[#800020]/10"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {SPEAKERS_DATA.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedSpeaker(speaker)}
                            className="relative flex-shrink-0 w-[300px] md:w-[340px] h-[500px] snap-center cursor-pointer group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-[6px] border-white ring-1 ring-gray-100"
                        >
                            <LazyImage
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.9] group-hover:brightness-100"
                                wrapperClassName="w-full h-full"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0013] via-[#800020]/40 to-transparent opacity-80 transition-opacity duration-300" />

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-300">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-[#FFD700] font-bold tracking-widest text-xs uppercase mb-2 drop-shadow-md">
                                        {speaker.role}
                                    </p>
                                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                                        {speaker.name}
                                    </h3>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-500 ease-out mb-4 opacity-50"></div>
                                    <p className="text-white/90 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-[#FFD700] mr-2">✦</span> {speaker.topic}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Speaker Bio Modal */}
            <AnimatePresence>
                {selectedSpeaker && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSpeaker(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            className="bg-[#FAF9F6] rounded-[2rem] overflow-hidden max-w-5xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh]"
                            role="dialog"
                            aria-modal="true"
                        >
                            <button
                                onClick={() => setSelectedSpeaker(null)}
                                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur text-[#800020] md:text-white rounded-full transition-all z-30"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Modal Image Section */}
                            <div className="w-full md:w-1/2 relative bg-[#800020]">
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                                <img
                                    src={selectedSpeaker.image}
                                    alt={selectedSpeaker.name}
                                    className="w-full h-64 md:h-full object-cover opacity-90 mix-blend-normal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#800020] via-transparent to-transparent md:bg-gradient-to-r" />

                                <div className="absolute bottom-8 left-8 right-8 text-white hidden md:block">
                                    <Quote className="w-12 h-12 text-[#D4AF37]/40 mb-4 fill-current" />
                                    <p className="text-xl md:text-2xl font-light italic leading-relaxed text-[#FFE4B5]">
                                        "{selectedSpeaker.bio.split('.')[0]}."
                                    </p>
                                </div>
                            </div>

                            {/* Modal Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <span className="inline-block px-3 py-1 bg-[#800020]/5 text-[#800020] rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-[#800020]/10">
                                        Speaker Profile
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-[#2a2a2a] mb-2">
                                        {selectedSpeaker.name}
                                    </h3>
                                    <p className="text-xl text-[#D4AF37] font-medium font-serif italic">
                                        {selectedSpeaker.role}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-100">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Session Topic</h4>
                                        <p className="text-2xl text-[#800020] font-bold">
                                            {selectedSpeaker.topic}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About the Voice</h4>
                                        <p className="text-gray-600 leading-8 text-lg font-light">
                                            {selectedSpeaker.bio}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <button className="text-[#800020] font-bold hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                                            View Session Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
