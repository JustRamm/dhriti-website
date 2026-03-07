import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LazyImage } from "@/components/ui/LazyImage";
import {
    Menu,
    Home,
    Gamepad2,
    Mic,
    Image,
    Handshake,
    Mail,
    Sparkles,
    Instagram,
    Linkedin
} from "lucide-react";

interface NavbarProps {
    onOpenVolunteer: () => void;
}

export function Navbar({ onOpenVolunteer }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#800020]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Mind Empowered Header - Left Side */}
                        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <LazyImage src="/images/brand/logo.jpeg" alt="Mind Empowered Logo" className="w-full h-full object-cover" wrapperClassName="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
                            <span className="text-white font-bold text-lg tracking-wide">
                                MIND EMPOWERED
                            </span>
                        </a>

                        {/* Navigation Links - Right Side */}
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Home</a>
                            <a href="#activities" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Activities</a>
                            <a href="#speakers" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Speakers</a>
                            <a href="#photo-dump" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Gallery</a>
                            <a href="#partnership" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Partners</a>
                            <a href="#contact" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Contact Us</a>
                            <Button
                                className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#8B4513] font-bold rounded-full px-6 shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
                                onClick={onOpenVolunteer}
                            >
                                Volunteer Now
                            </Button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="md:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" className="w-12 h-12 p-0 text-white hover:bg-white/10" aria-label="Open Menu">
                                        <Menu className="w-8 h-8" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="bg-gradient-to-b from-[#FFF8DC] to-[#FAEBD7] border-l border-[#800020]/20 text-[#800020] p-0 w-[85vw] sm:max-w-md shadow-2xl">
                                    {/* Subtle Pattern Background */}
                                    <div className="absolute inset-0 bg-white opacity-5 pointer-events-none mix-blend-multiply"></div>

                                    <div className="flex flex-col h-full relative z-10">
                                        {/* Menu Header */}
                                        <div className="p-8 pb-4 pt-12">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 rounded-full"></div>
                                                    <LazyImage src="/images/brand/logo.jpeg" alt="Logo" className="w-full h-full object-cover" wrapperClassName="w-12 h-12 rounded-full border border-[#D4AF37]/50 relative z-10" />
                                                </div>
                                                <div>
                                                    <h2 className="font-bold text-2xl tracking-[0.15em] text-[#800020]">DHRITI</h2>
                                                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">Elevate Yourself</p>
                                                </div>
                                            </div>
                                            <Separator className="mt-6 bg-[#D4AF37]/10" />
                                        </div>

                                        {/* Menu Links */}
                                        <div className="flex-1 px-8 py-2 overflow-hidden flex flex-col justify-center">
                                            <nav className="flex flex-col h-full justify-evenly">
                                                {[
                                                    { name: "Home", href: "#home", icon: Home },
                                                    { name: "Activities", href: "#activities", icon: Gamepad2 },
                                                    { name: "Speakers", href: "#speakers", icon: Mic },
                                                    { name: "Gallery", href: "#photo-dump", icon: Image },
                                                    { name: "Partners", href: "#partnership", icon: Handshake },
                                                    { name: "Contact Us", href: "#contact", icon: Mail },
                                                ].map((item, i) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="group flex items-center gap-5 py-2 text-[#800020]/70 hover:text-[#800020] transition-all duration-300 hover:translate-x-2 last:border-0"
                                                        style={{ transitionDelay: `${i * 50}ms` }}
                                                    >
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#800020]/5 group-hover:bg-[#800020]/10 transition-colors shrink-0">
                                                            <item.icon className="w-4 h-4 text-[#800020] transition-colors" />
                                                        </span>
                                                        <span className="text-xl font-bold tracking-wide group-hover:text-[#A0153E]">{item.name}</span>
                                                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">
                                                            <Sparkles className="w-4 h-4" />
                                                        </span>
                                                    </a>
                                                ))}
                                                {/* Mobile Volunteer Button */}
                                                <div className="mt-4">
                                                    <Button
                                                        className="w-full bg-[#D4AF37] hover:bg-[#C4A137] text-[#8B4513] font-bold rounded-full py-6 shadow-md"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            onOpenVolunteer();
                                                        }}
                                                    >
                                                        Volunteer Now
                                                    </Button>
                                                </div>
                                            </nav>
                                        </div>

                                        {/* Menu Footer */}
                                        <div className="p-8 pt-4">
                                            <div className="flex justify-between items-end border-t border-[#800020]/10 pt-6">
                                                <div className="flex gap-5">
                                                    <a href="#" className="text-[#800020]/60 hover:text-[#D4AF37] transition-colors" aria-label="Follow us on Instagram"><Instagram className="w-5 h-5" /></a>
                                                    <a href="#" className="text-[#800020]/60 hover:text-[#D4AF37] transition-colors" aria-label="Connect on LinkedIn"><Linkedin className="w-5 h-5" /></a>
                                                    <a href="#" className="text-[#800020]/60 hover:text-[#D4AF37] transition-colors" aria-label="Send us an email"><Mail className="w-5 h-5" /></a>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[#D4AF37] text-xs font-serif italic font-bold">February 14, 2026</p>
                                                    <p className="text-[#800020]/40 text-[10px] mt-1 font-medium">Kerala, India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
