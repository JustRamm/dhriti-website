import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Sparkles, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GallerySection() {
    const [selectedItem, setSelectedItem] = useState<{ src: string; alt: string; role?: string } | null>(null);
    const containerRef = useRef<HTMLElement>(null);
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
        { src: "/images/gallery/gallery3.jpeg", alt: "Festival Gathering", caption: "Experiences", desc: "A movement for mental wellness in Kerala." }
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
                                author: "Nayna",
                                role: "Content & Editorial Lead",
                                image: "/images/gallery/nakshatra.jpeg"
                            },
                            {
                                quote: "In our journey to find ourselves, we get lost, unable to see ourselves in others. Like us, they are also going through the similar ups and downs of life. Dhriti is where you can meet the different versions of you - they can help you and you can help them.",
                                author: "Vignesh N",
                                role: "CEO, Mevitech",
                                image: "/images/gallery/vignesh.jpeg"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="min-w-[260px] md:min-w-[300px] snap-center py-4"
                            >
                                <Card className="h-full bg-white border border-[#D4AF37]/20 shadow-md hover:shadow-xl transition-all duration-500 group rounded-3xl overflow-hidden flex flex-col items-center text-center relative hover:-translate-y-2">
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#800020] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="pt-8 pb-4 px-4">
                                        {testimonial.image ? (
                                            <div
                                                className="w-16 h-16 rounded-full p-0.5 border-2 border-[#D4AF37] shadow-sm cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 mx-auto"
                                                onClick={() => setSelectedItem({ src: testimonial.image!, alt: testimonial.author, role: testimonial.role })}
                                            >
                                                <div className="w-full h-full rounded-full overflow-hidden">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm mx-auto", (testimonial as any).color || "bg-[#800020]")}>
                                                {testimonial.author[0]}
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-6 pb-8 flex flex-col flex-grow items-center">
                                        <div className="mb-4 opacity-30">
                                            <Quote className="w-6 h-6 text-[#800020] rotate-180" />
                                        </div>

                                        <p className="text-gray-700 italic font-medium leading-relaxed mb-6 flex-grow text-sm">
                                            "{testimonial.quote}"
                                        </p>

                                        <div className="relative pt-4 border-t border-[#D4AF37]/10 w-full">
                                            <h4 className="text-base font-bold text-[#800020] mb-0.5 font-serif tracking-tight">{testimonial.author}</h4>
                                            <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.15em] uppercase">{testimonial.role}</p>
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
                                    type="button"
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-[#800020] hover:text-white rounded-full transition-all duration-300 z-20"
                                    aria-label="Close modal"
                                    title="Close modal"
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
                                Voices of Dhriti Experiences
                            </motion.p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
