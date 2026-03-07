import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { Sparkles, X } from "lucide-react";

export function PhotoDumpSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Generate array of paths for all PNG and JPG images in /public/dump folder
    const pngImages = Array.from({ length: 37 }, (_, i) => `/dump/${i + 1}.png`);
    const jpgImages = Array.from({ length: 8 }, (_, i) => `/dump/${i + 38}.JPG`);
    const images = [...pngImages, ...jpgImages];

    return (
        <section id="photo-dump" className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
            {/* Decorative Backgrounds */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#800020]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#800020] font-semibold text-sm tracking-wide">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Visual Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#800020] mb-6 tracking-tight">
                        Dhriti In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] font-serif italic">Frames</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                        A candid collection of moments, smiles, and connections from our community.
                    </p>
                </motion.div>

                {/* CSS Columns based dynamic masonry layout */}
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                            className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedImage(src)}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#800020]/0 group-hover:bg-[#800020]/20 mix-blend-overlay z-10 transition-colors duration-500" />

                            <img
                                src={src}
                                alt={`Dhriti moment ${index + 1}`}
                                loading="lazy"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 p-3 bg-white/10 hover:bg-[#800020] text-white rounded-full backdrop-blur transition-all z-[160]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center cursor-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected moment"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
