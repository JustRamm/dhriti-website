import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Sparkles, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GallerySection() {
    const [selectedItem, setSelectedItem] = useState<{ src: string; alt: string; role?: string } | null>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const galleryImages = [
        { src: "/images/gallery/gallery1.jpeg", alt: "Community Workshop", caption: "Safe Circles", desc: "Conversations that break the silence." },
        { src: "/images/gallery/gallery2.jpeg", alt: "Wellness Activities", caption: "Mindful Moments", desc: "Practicing the art of being present." },
        { src: "/images/gallery/gallery3.jpeg", alt: "Festival Gathering", caption: "Dhriti Experience", desc: "A movement for mental wellness in Kerala." }
    ];

    return (
        <section id="gallery" className="py-24 md:py-40 bg-[#FAF9F6] overflow-hidden relative" ref={containerRef}>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#800020]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#800020]/5 border border-[#800020]/10 text-[#800020] font-semibold text-sm tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Our Review</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#800020] mb-6 tracking-tight">
                        Memories & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] font-serif italic">Voices</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Witness the transformation and hear the stories that define our community.
                    </p>
                </motion.div>

                {/* Gallery Grid (Horizontal Scroll on Mobile, Grid on Desktop) */}
                <div
                    className="max-w-6xl mx-auto flex md:grid md:grid-cols-3 gap-6 md:gap-8 mb-32 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-auto md:px-0 md:overflow-visible"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {galleryImages.map((img, index) => {
                        // Apply different parallax speeds for staggered look on desktop
                        const y = index === 0 ? y1 : index === 1 ? y2 : y3;
                        // On mobile, we don't want parallax affecting the scroll flow or layout too much, so we disable y translation or keep it subtle
                        // Ideally, parallax should engage only on md+

                        return (
                            <motion.div
                                key={index}
                                style={{ y: typeof window !== 'undefined' && window.innerWidth >= 768 ? y : 0 }}
                                className="group relative min-w-[85vw] md:min-w-0 snap-center"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(128,0,32,0.3)]">
                                    <div className="absolute inset-0 bg-[#800020]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <LazyImage
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        wrapperClassName="w-full h-full"
                                        loading="eager"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a0e14] via-transparent to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 z-20 text-white">
                                        <p className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-100">
                                            Inside Look
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                                            {img.caption}
                                        </h3>
                                        <p className="text-white/80 font-light text-sm md:text-base leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200">
                                            {img.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


                {/* Testimonials (Voices) */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Big Quote Icon Background */}
                    <Quote className="absolute -top-12 -left-12 w-40 h-40 text-[#800020]/5 -z-10 rotate-12" />
                    <Quote className="absolute -bottom-12 -right-12 w-40 h-40 text-[#D4AF37]/10 -z-10 -rotate-12" />

                    <div className="flex items-center justify-between mb-8 px-2">
                        <h3 className="text-2xl font-bold text-[#800020]">Voices of Dhriti</h3>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020]"
                                onClick={() => document.getElementById('voices-scroll-container')?.scrollBy({ left: -300, behavior: 'smooth' })}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-[#800020]/20 hover:bg-[#800020]/5 text-[#800020]"
                                onClick={() => document.getElementById('voices-scroll-container')?.scrollBy({ left: 300, behavior: 'smooth' })}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div
                        id="voices-scroll-container"
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[
                            {
                                quote: "In a world that constantly tests us, emotional resilience is no longer optional—it is essential. Dhriti is our reminder that strength begins within. With Dhriti, we hope to create a space where strength is nurtured, emotions are honoured, and healing feels possible.",
                                author: "Maya Menon",
                                role: "Founder",
                                image: "/images/gallery/maya.jpeg"
                            },
                            {
                                quote: "Dhriti is not just a festival—it is a movement to normalise emotions, strengthen minds, and remind people that asking for support is also a form of courage. This festival was born from the belief that resilience is not about being unshaken, but about learning how to stand again after every fall.",
                                author: "Sreela Menon",
                                role: "Co-Founder",
                                image: "/images/gallery/sreela.jpeg"
                            },
                            {
                                quote: "Shed what weighs you down like a caterpillar, and fly high like a butterfly",
                                author: "Jessica John",
                                role: "Lead Graphic Designer",
                                image: "/images/gallery/jessica.jpeg"
                            },
                            {
                                quote: "Earning your wings means surrendering everything you thought you were, to become everything you are meant to be. Resilience is the trust we place in the air once we finally decide to spread them.",
                                author: "Abiram T Bijoy",
                                role: "Technical Lead",
                                image: "/images/gallery/abiram.jpeg"
                            },
                            {
                                quote: "The butterfly does not rush its wings, it waits until the sky feels like home. And Dhriti mirrors this belief- to hold on with quiet courage, allowing healing to take its time, trusting the process, and creating a space where minds feel safe enough to grow, unfold, and finally fly.",
                                author: "Nakshatra P Nair",
                                role: "Content & Editorial Lead",
                                image: "/images/gallery/nakshatra.jpeg"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="min-w-[260px] md:min-w-[320px] snap-center"
                            >
                                <Card className="h-full bg-white border border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl">
                                    <div className="p-6 flex flex-col h-full relative">
                                        {/* Decorative Quote Mark */}
                                        <div className="absolute top-4 right-4 opacity-10">
                                            <Quote className="w-8 h-8 text-[#800020]" />
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-[#D4AF37] text-xs">★</span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 italic font-serif leading-relaxed mb-6 text-sm md:text-base flex-grow">
                                            "{testimonial.quote}"
                                        </p>

                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                            {testimonial.image ? (
                                                <div
                                                    className="w-10 h-10 rounded-full overflow-hidden shadow-md border border-[#D4AF37]/20 cursor-pointer hover:scale-110 transition-transform"
                                                    onClick={() => setSelectedItem({ src: testimonial.image!, alt: testimonial.author, role: testimonial.role })}
                                                >
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-sm shadow-md", (testimonial as any).color || "bg-[#800020]")}>
                                                    {testimonial.author[0]}
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-[#800020] text-sm">{testimonial.author}</h4>
                                                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="ghost" className="text-[#800020] hover:text-[#D4AF37] hover:bg-transparent text-lg font-medium group">
                            Read more stories <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Image Popup Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative max-w-md w-full flex flex-col items-center z-10"
                        >
                            {/* Decorative Gold Frame - Subtle */}
                            <div className="absolute -inset-1 border border-[#D4AF37]/30 rounded-[2rem] -z-10" />

                            <div className="relative w-full overflow-hidden rounded-[1.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#800020]/10 bg-white">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-[#800020] hover:text-white rounded-full transition-all duration-300 z-20"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="aspect-square w-full bg-gray-50">
                                    <img
                                        src={selectedItem.src}
                                        alt={selectedItem.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 text-center bg-white">
                                    <h4 className="text-2xl font-serif font-bold text-[#800020] mb-1">
                                        {selectedItem.alt}
                                    </h4>
                                    {selectedItem.role && (
                                        <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs">
                                            {selectedItem.role}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Label for Lightbox Feel */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4 text-white/40 font-medium text-[10px] tracking-[0.2em] uppercase"
                            >
                                Voices of Dhriti Experience
                            </motion.p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
