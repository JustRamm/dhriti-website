import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { SPEAKERS_DATA } from "@/data/speakers";

export function SpeakersSection() {
    const [selectedSpeaker, setSelectedSpeaker] = useState<{ name: string; role: string; topic: string; image: string; bio: string } | null>(null);

    return (
        <section id="speakers" className="py-20 md:py-32 bg-[#FAF9F6] overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
                        Voices of Dhriti
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Meet the visionaries, healers, and artists shaping this movement.
                    </p>
                </motion.div>
            </div>

            {/* Manual Scroll Carousel */}
            <div className="relative">
                {/* Scroll Controls (Desktop only) */}
                <div className="hidden md:flex justify-end gap-2 container mx-auto px-6 mb-4">
                    <button
                        onClick={() => document.getElementById('speakers-scroll-container')?.scrollBy({ left: -300, behavior: 'smooth' })}
                        className="p-2 rounded-full border border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020] transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => document.getElementById('speakers-scroll-container')?.scrollBy({ left: 300, behavior: 'smooth' })}
                        className="p-2 rounded-full border border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020] transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div
                    id="speakers-scroll-container"
                    className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide md:justify-center"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {SPEAKERS_DATA.map((speaker, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedSpeaker(speaker)}
                            className="w-[280px] md:w-[250px] shrink-0 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer md:hover:shadow-2xl md:hover:-translate-y-1 group snap-center"
                        >
                            <div className="h-64 md:h-56 overflow-hidden relative">
                                <LazyImage
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                    wrapperClassName="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/90 to-transparent opacity-80 md:opacity-40 md:group-hover:opacity-30 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-4 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-[#D4AF37] font-medium text-sm md:text-xs uppercase tracking-wider mb-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-75">{speaker.role}</p>
                                    <h3 className="text-xl md:text-lg font-bold text-white leading-tight">{speaker.name}</h3>
                                </div>
                            </div>
                            <div className="p-5 md:p-4 bg-white relative h-full">
                                <div className="absolute top-0 right-4 -mt-3 w-8 h-8 md:w-6 md:h-6 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md">
                                    <svg className="w-4 h-4 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <p className="text-[#800020] text-sm md:text-xs font-serif italic line-clamp-2 leading-relaxed opacity-90 md:opacity-80">
                                    "{speaker.topic}"
                                </p>
                            </div>
                        </div>
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
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="speaker-name"
                        >
                            <button
                                onClick={() => setSelectedSpeaker(null)}
                                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6 text-[#800020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Image */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                                <img
                                    src={selectedSpeaker.image}
                                    alt={selectedSpeaker.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/90 via-transparent to-transparent md:bg-gradient-to-r" />
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <h3 className="text-2xl font-bold">{selectedSpeaker.name}</h3>
                                    <p className="text-[#D4AF37] font-medium">{selectedSpeaker.role}</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                                <div className="hidden md:block mb-6">
                                    <h3 id="speaker-name" className="text-4xl font-bold text-[#800020] mb-2">{selectedSpeaker.name}</h3>
                                    <p className="text-xl text-[#D4AF37] font-medium tracking-wide uppercase">{selectedSpeaker.role}</p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Topic</h4>
                                        <p className="text-xl text-[#800020] font-serif italic">"{selectedSpeaker.topic}"</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">About</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {selectedSpeaker.bio}
                                        </p>
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
