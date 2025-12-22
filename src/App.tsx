import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Users,
  Sparkles,
  Brain,
  Laugh,
  Gamepad2,
  Building2,
  Target,
  Handshake,
  Mail,
  Instagram,
  Linkedin,
  Award,
  TrendingUp,
  Shield,
  ArrowUp,
  Quote,
  Menu,
  MapPin,
  Home,
  Info,
  Mic,
  Image
} from "lucide-react";
import { ThemeSection } from "@/components/ThemeSection";
import { ButterflyBackground } from "@/components/ButterflyBackground";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<{ name: string; role: string; topic: string; image: string; bio: string } | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [surpriseBoxRef, setSurpriseBoxRef] = useState<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Moves down
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Moves up
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]); // Rotates

  const venueRef = useRef(null);
  const { scrollYProgress: venueScrollProgress } = useScroll({
    target: venueRef,
    offset: ["start end", "center center"]
  });

  const mapRotateX = useTransform(venueScrollProgress, [0, 1], [60, 0]);
  const mapScale = useTransform(venueScrollProgress, [0, 1], [0.8, 1]);
  const mapOpacity = useTransform(venueScrollProgress, [0, 0.8], [0, 1]);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8DC] to-white relative">
      <ButterflyBackground attractionTarget={surpriseBoxRef} />
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#800020]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mind Empowered Header - Left Side */}
            <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img src="/logo.jpeg" alt="Mind Empowered Logo" className="w-10 h-10 object-cover rounded-full border-2 border-[#D4AF37]" />
              <span className="text-white font-bold text-lg tracking-wide">
                MIND EMPOWERED
              </span>
            </a>

            {/* Navigation Links - Right Side */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Home</a>
              <a href="#why" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">About</a>
              <a href="#activities" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Activities</a>
              <a href="#speakers" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Speakers</a>
              <a href="#venue" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Venue</a>
              <a href="#gallery" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Gallery</a>
              <a href="#partnership" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Partners</a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="w-12 h-12 p-0 text-white hover:bg-white/10">
                    <Menu className="w-8 h-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-[#800020]/90 to-[#4a0013]/90 backdrop-blur-md border-l border-[#D4AF37]/30 text-white p-0">
                  <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="p-6 border-b border-[#D4AF37]/20 bg-black/10">
                      <div className="flex items-center gap-3">
                        <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full border border-[#D4AF37]" />
                        <div>
                          <h2 className="font-bold text-lg tracking-wider text-white">DHRITI</h2>
                          <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest">Elevate Yourself</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                      <nav className="flex flex-col">
                        <a href="#home" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Home className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Home</span>
                        </a>
                        <a href="#why" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Info className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">About</span>
                        </a>
                        <a href="#activities" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Gamepad2 className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Activities</span>
                        </a>
                        <a href="#speakers" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Mic className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Speakers</span>
                        </a>
                        <a href="#venue" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <MapPin className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Venue</span>
                        </a>
                        <a href="#gallery" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Image className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Gallery</span>
                        </a>
                        <a href="#partnership" className="flex items-center gap-4 px-6 py-4 text-white/90 hover:bg-white/10 hover:text-[#D4AF37] transition-all border-b border-[#D4AF37]/10 group">
                          <Handshake className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37]" />
                          <span className="font-medium text-lg">Partners</span>
                        </a>
                      </nav>
                    </div>

                    {/* Menu Footer */}
                    <div className="p-6 border-t border-[#D4AF37]/20 bg-black/10">
                      <div className="flex justify-center gap-6 mb-4">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#800020] transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#800020] transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#800020] transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-center text-[#D4AF37]/60 text-xs tracking-wider">
                        FEBRUARY 14, 2026
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full pt-0 md:pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#800020] via-[#A0153E] to-[#5C0120]">
          {/* Mental Awareness Pattern Background - Neural Network / Connection */}
          <motion.div className="absolute inset-0 opacity-15" style={{ y: y1 }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mind-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.6" />
                  <circle cx="80" cy="80" r="1.5" fill="#D4AF37" opacity="0.6" />
                  <circle cx="80" cy="20" r="1" fill="#D4AF37" opacity="0.4" />
                  <circle cx="20" cy="80" r="1" fill="#D4AF37" opacity="0.4" />

                  {/* Connecting Lines */}
                  <path d="M20 20 L80 80" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
                  <path d="M80 20 L20 80" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
                  <path d="M20 20 Q 50 50 80 20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mind-pattern)" />
            </svg>
          </motion.div>

          {/* Floating Mandalas Layer - Slow Move - NOW VISIBLE ON MOBILE */}
          <motion.div className="absolute inset-0 opacity-10 md:opacity-5 block" style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
            </svg>
          </motion.div>

          {/* Mind Bloom Silhouette - Symbolic Head Profile */}
          <motion.div
            className="absolute top-[10%] -left-[10%] md:top-[15%] md:left-[5%] w-[300px] h-[400px] md:w-[500px] md:h-[600px] pointer-events-none opacity-20 md:opacity-10 mix-blend-overlay"
            style={{ x: useTransform(scrollY, [0, 400], [0, 50]) }}
          >
            <svg viewBox="0 0 200 300" className="w-full h-full" fill="none">
              {/* Abstract Head Profile Trace */}
              <path d="M60,250 C40,240 30,220 30,180 C30,130 50,80 100,60 C130,50 160,70 170,100 C175,120 170,140 165,150"
                stroke="#D4AF37" strokeWidth="1" opacity="0.5" fill="none" />

              {/* Neural Roots / Thoughts Blooming */}
              <path d="M100,60 Q100,30 80,10" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
              <path d="M100,60 Q120,30 140,20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
              <path d="M100,60 Q80,40 60,30" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />

              {/* Floating Particles (Thoughts) - Animated */}
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

              {/* Brain/Mind Network inside the head */}
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

          {/* Decorative Kerala Lamps - NOW VISIBLE */}
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
          <motion.div className="absolute bottom-32 left-20 opacity-15 hidden lg:block" style={{ rotate, y: y1 }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(60 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-60 40 60)" />
              <circle cx="40" cy="60" r="6" fill="#FDD835" />
            </svg>
          </motion.div>

          <motion.div className="absolute bottom-32 right-20 opacity-15 hidden lg:block" style={{ rotate, y: y1 }}>
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
          <motion.div className="absolute bottom-0 left-0 opacity-10 hidden lg:block" style={{ y: y1 }}>
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
            </svg>
          </motion.div>

          <motion.div className="absolute bottom-0 right-0 opacity-10 hidden lg:block" style={{ y: y1 }}>
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
            </svg>
          </motion.div>

          {/* Sparkling Dust Particles - Desktop Only */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
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

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
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

              {/* Countdown Timer */}
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
                >
                  Join the Movement
                </Button>
                <a href="https://www.mind-empowered.org" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
        </section>

        {/* The Why Section */}
        <section id="why" className="py-20 md:py-32 bg-white">
          {/* Theme of the Year Section */}
          <ThemeSection />

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#800020]" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#800020]">Why a Festival?</h2>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="hidden md:block">
                  Festivals have always been at the heart of Kerala's culture - they bring people together, create joy, and foster deep connections. But what if we could harness this power to address one of our most pressing challenges?
                </p>
                <p className="text-[#8B4513] font-medium">
                  Dhriti reimagines the festival experience as a safe, engaging space where mental health conversations happen naturally. Through interactive activities, creative expression, and community celebration, we're making it easier for people to open up, seek help early, and support one another.
                </p>
                <p className="hidden md:block">
                  When mental health support feels like celebration rather than treatment, stigma dissolves. When communities gather with purpose and joy, transformation happens. This is the Dhriti way.
                </p>
              </div>

              <div className="flex justify-center gap-8 mt-12">
                <div className="text-center">
                  <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Community-Led</p>
                </div>
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Celebration-Based</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Stigma-Free</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Objectives Grid */}
        <section id="objectives" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#F4E5B8]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                Our Core Objectives
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Five pillars guiding our mission to transform mental health awareness in Kerala
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
              {[
                {
                  icon: Shield,
                  title: "Breaking Stigma",
                  description: "Creating safe spaces where mental health conversations are normalized and celebrated, not hidden."
                },
                {
                  icon: TrendingUp,
                  title: "Increasing Awareness",
                  description: "Educating communities about mental health through engaging, culturally-relevant activities and dialogues."
                },
                {
                  icon: Gamepad2,
                  title: "Experiential Learning",
                  description: "Interactive stalls and hands-on experiences that make mental health education memorable and impactful."
                },
                {
                  icon: Brain,
                  title: "Empowering Youth",
                  description: "Equipping young minds with emotional intelligence tools and coping strategies for lifelong wellness."
                },
                {
                  icon: Laugh,
                  title: "Celebrating Wellness",
                  description: "Honoring community resilience and celebrating mental health as an integral part of overall well-being."
                }
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 bg-white border-[#D4AF37]/20">
                    <CardHeader className="text-center p-4 pb-2 md:p-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center mb-3 md:mb-4">
                        <objective.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-[#800020] text-sm md:text-xl leading-tight">{objective.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                      <CardDescription className="text-center text-gray-600 hidden md:block">
                        {objective.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Community Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                Expected Impact
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Creating lasting change in our community's approach to mental wellness
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
              {[
                {
                  metric: "10,000+",
                  label: "Community Members Reached",
                  icon: Users
                },
                {
                  metric: "50+",
                  label: "Interactive Activities",
                  icon: Gamepad2
                },
                {
                  metric: "100%",
                  label: "Inclusive & Accessible",
                  icon: Heart
                },
                {
                  metric: "1st",
                  label: "Of Its Kind in Kerala",
                  icon: Award
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-[#800020] mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#FFF8DC] to-[#F5DEB3] rounded-2xl p-8 md:p-12 text-[#3E2723]"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#800020]">
                  Community Empowerment Through Action
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#800020]" />
                      Improved Emotional Awareness
                    </h4>
                    <p className="text-[#3E2723]/80 hidden md:block">
                      Participants gain practical tools to recognize, understand, and express their emotions healthily.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#800020]" />
                      Strengthened Support Networks
                    </h4>
                    <p className="text-[#3E2723]/80 hidden md:block">
                      Building lasting connections between individuals, families, schools, and organizations committed to mental wellness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-[#800020]" />
                      Early Intervention Mindset
                    </h4>
                    <p className="text-[#3E2723]/80 hidden md:block">
                      Shifting from crisis response to proactive mental health care through early help-seeking behaviors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#800020]" />
                      Cultural Transformation
                    </h4>
                    <p className="text-[#3E2723]/80 hidden md:block">
                      Leading Kerala toward a future where mental health is discussed as openly as physical health.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Activity Showcase */}
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
              {/* Mobile Scroll Hint */}
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="text-sm text-[#D4AF37] font-semibold md:hidden flex items-center justify-center gap-1"
              >
                Swipe to explore <span className="text-lg">→</span>
              </motion.p>
            </motion.div>

            {/* Activities Container - Horizontal scroll on mobile, Grid on desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible custom-scrollbar scroll-smooth scroll-pl-6">
              {[
                {
                  image: "/empathy_walk.png",
                  title: "Empathy Walk",
                  description: "Step into someone else's shoes through guided journeys that build understanding and compassion for diverse mental health experiences."
                },
                {
                  image: "/voice_worries.png",
                  title: "Voice Your Worries",
                  description: "Anonymous sharing spaces where you can express concerns freely, realizing you're not alone in your struggles."
                },
                {
                  image: "/art_therapy.png",
                  title: "Art & Art Therapy",
                  description: "Express emotions through creative mediums - painting, sculpting, and crafting your way to self-discovery and healing."
                },
                {
                  image: "/wellness_games.png",
                  title: "Mental Health Wellness Games",
                  description: "Gamified learning experiences that make understanding mental health fun, interactive, and accessible to all ages."
                },
                {
                  image: "/dance_therapy.png",
                  title: "Dance Therapy",
                  description: "Move, express, and heal through rhythm and movement in sessions blending traditional Kerala dance with therapeutic practices."
                },
                {
                  isSurprise: true,
                  title: "A Surprise Event",
                  description: "It's a surprise event. Join us to find out!"
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="min-w-[70vw] md:min-w-0 snap-start"
                  ref={activity.isSurprise ? setSurpriseBoxRef : undefined}
                >
                  <motion.div
                    initial={{ scale: 0.9, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={activity.isSurprise ? { rotate: [0, -3, 3, -3, 3, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } } : { scale: 1.05 }}
                    className="group cursor-pointer h-full"
                  >
                    <Card className={`h-full overflow-hidden border-2 transition-all duration-300 flex flex-col active:scale-95 relative ${activity.isSurprise ? 'bg-gradient-to-br from-[#4a0013] via-[#800020] to-[#4a0013] border-[#FFD700] shadow-[0_0_30px_rgba(128,0,32,0.4)]' : 'bg-white border-[#D4AF37]/20 hover:border-[#D4AF37]'}`}>
                      {/* Ribbons for Surprise Card - Cover Entire Card */}
                      {/* Ribbons for Surprise Card - Cover Entire Card */}
                      {activity.isSurprise && (
                        <>
                          {/* Vertical Ribbon */}
                          <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-b from-[#FFD700]/30 via-[#FFD700]/10 to-[#FFD700]/30 border-x border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)] pointer-events-none z-0">
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                          {/* Horizontal Ribbon - Moved to upper third (lid style) */}
                          <div className="absolute inset-x-0 top-[35%] h-8 -translate-y-1/2 bg-gradient-to-r from-[#FFD700]/30 via-[#FFD700]/10 to-[#FFD700]/30 border-y border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)] pointer-events-none z-0">
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                          {/* Central Butterfly Bow */}
                          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                            <motion.svg
                              width="80"
                              height="60"
                              viewBox="0 0 80 60"
                              fill="none"
                              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] filter brightness-110 w-16 h-12 md:w-20 md:h-16"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                              {/* Left Loop (Butterfly Wing Shape) */}
                              <path d="M40 30 C 20 10, 0 10, 5 30 C 10 45, 30 35, 40 30" fill="url(#goldGradient)" filter="url(#glow)" />
                              {/* Right Loop (Butterfly Wing Shape) */}
                              <path d="M40 30 C 60 10, 80 10, 75 30 C 70 45, 50 35, 40 30" fill="url(#goldGradient)" filter="url(#glow)" />

                              {/* Tails */}
                              <path d="M40 30 Q 30 50 20 55" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
                              <path d="M40 30 Q 50 50 60 55" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />

                              {/* Center Knot */}
                              <circle cx="40" cy="30" r="5" fill="#FFE4B5" stroke="#B8860B" strokeWidth="1" />

                              <defs>
                                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#FFD700" />
                                  <stop offset="50%" stopColor="#B8860B" />
                                  <stop offset="100%" stopColor="#FFD700" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                  <feGaussianBlur stdDeviation="2" result="blur" />
                                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                              </defs>
                            </motion.svg>
                          </div>
                        </>
                      )}

                      <div className={`h-48 overflow-hidden flex items-center justify-center relative z-10 ${activity.isSurprise ? 'bg-[#800020]/20' : ''}`}>
                        {activity.isSurprise ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-white animate-pulse" />
                          </div>
                        ) : (
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('.jpeg')) {
                                target.src = target.src.replace('.jpeg', '.png');
                              } else if (target.src.includes('.png')) {
                                target.src = target.src.replace('.png', '.jpeg');
                              } else if (target.src.includes('.jpg')) {
                                target.src = target.src.replace('.jpg', '.png');
                              }
                            }}
                          />
                        )}
                      </div>
                      <CardHeader className="relative z-10">
                        <CardTitle className={`${activity.isSurprise ? 'text-[#FFD700]' : 'text-[#800020]'} text-xl`}>{activity.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col relative z-10">
                        <p className={`${activity.isSurprise ? 'text-[#FFE4B5]' : 'text-gray-600'} mb-4 flex-grow`}>{activity.description}</p>
                        <Button
                          disabled={activity.isSurprise}
                          className={`w-full ${activity.isSurprise ? 'bg-[#FFD700]/50 text-[#800020]/70 cursor-not-allowed border border-[#800020]/20' : 'bg-[#800020] hover:bg-[#A0153E] text-white active:scale-95'} mt-4 transition-all`}
                          size="sm"
                        >
                          {activity.isSurprise ? 'Coming Soon...' : 'Register for this Activity'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>





        {/* Speakers & Artistes Section */}
        <section id="speakers" className="py-20 md:py-32 bg-[#FAF9F6] overflow-hidden" >
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

          {/* Endless Scroll Carousel */}
          <div className="relative">


            <div className="flex overflow-hidden group">
              {/* Mobile: Horizontal Manual Scroll */}
              <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 w-full custom-scrollbar scroll-smooth">
                {[
                  {
                    image: "/speaker_psychologist.png",
                    name: "Dr. Anjali Menon",
                    role: "Clinical Psychologist",
                    topic: "Decoding Emotions"
                  },
                  {
                    image: "/speaker_dancer.png",
                    name: "Reshma Nair",
                    role: "Contemporary Dancer",
                    topic: "Healing Through Movement"
                  },
                  {
                    image: "/speaker_activist.png",
                    name: "Adv. Manoj Krishna",
                    role: "Social Activist",
                    topic: "Community Mental Health"
                  },
                  {
                    image: "/speaker_author.png",
                    name: "Sarah Joseph",
                    role: "Author & Speaker",
                    topic: "Stories that Heal"
                  }
                ].map((speaker, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedSpeaker({ ...speaker, bio: "A visionary leader dedicated to mental wellness and community empowerment. With years of experience in their field, they bring unique insights and practical tools to help you navigate life's challenges." })}
                    className="min-w-[70vw] shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 snap-center cursor-pointer active:scale-95 transition-transform"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#800020] mb-1">{speaker.name}</h3>
                      <p className="text-[#D4AF37] font-medium text-sm mb-3 uppercase tracking-wider">{speaker.role}</p>
                      <div className="inline-block px-3 py-1 bg-[#800020]/5 rounded-full text-xs text-gray-600">
                        Speaking on: {speaker.topic}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Auto Scroll Carousel */}
              <motion.div
                className="hidden md:flex gap-8 px-8"
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8">
                    {[
                      {
                        image: "/speaker_psychologist.png",
                        name: "Dr. Anjali Menon",
                        role: "Clinical Psychologist",
                        topic: "Decoding Emotions"
                      },
                      {
                        image: "/speaker_dancer.png",
                        name: "Reshmi Nair",
                        role: "Contemporary Dancer",
                        topic: "Healing Through Movement"
                      },
                      {
                        image: "/speaker_activist.png",
                        name: "Adv. Manoj Krishna",
                        role: "Social Activist",
                        topic: "Community Mental Health"
                      },
                      {
                        image: "/speaker_author.png",
                        name: "Sarah Joseph",
                        role: "Author & Speaker",
                        topic: "Stories that Heal"
                      }
                    ].map((speaker, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedSpeaker({ ...speaker, bio: "A visionary leader dedicated to mental wellness and community empowerment. With years of experience in their field, they bring unique insights and practical tools to help you navigate life's challenges." })}
                        className="w-[300px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 group-hover:pause cursor-pointer hover:shadow-2xl"
                      >
                        <div className="h-64 overflow-hidden relative group/image">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover transition-transform duration-500 md:hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View Bio</span>
                          </div>
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-bold text-[#800020] mb-1">{speaker.name}</h3>
                          <p className="text-[#D4AF37] font-medium text-sm mb-3 uppercase tracking-wider">{speaker.role}</p>
                          <div className="inline-block px-3 py-1 bg-[#800020]/5 rounded-full text-xs text-gray-600">
                            Speaking on: {speaker.topic}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
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
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row"
                >
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
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
                      <h3 className="text-4xl font-bold text-[#800020] mb-2">{selectedSpeaker.name}</h3>
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

                      {/* Actions removed as per request */}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* Venue Section */}
        <section id="venue" ref={venueRef} className="relative py-20 md:py-32 bg-[#F5F5DC] overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#800020]/10 text-[#800020] font-semibold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Historic Location</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
                The Venue: Fort Kochi
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Immerse yourself in history and healing at the cultural heart of Kerala.
                <span className="block mt-2 font-semibold text-[#D4AF37]">
                  *Precise festival grounds to be disclosed soon
                </span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-autoperspective-1000">
              {/* Map Container - Unfolds on Scroll */}
              <motion.div
                style={{
                  rotateX: mapRotateX,
                  scale: mapScale,
                  opacity: mapOpacity,
                  perspective: 1000,
                  transformStyle: "preserve-3d"
                }}
                className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group origin-top"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.68886367746!2d76.24233305!3d9.9634996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d2c1c696e59%3A0xe5a20af1b6a2df84!2sFort%20Kochi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none border-[12px] border-[#800020]/10" />
              </motion.div>

              {/* Location Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#800020] mb-2">Heritage Atmosphere</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fort Kochi's colonial architecture and serene coastline provide the perfect backdrop for reflection and connection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#800020] mb-2">Easy Accessibility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Well-connected by road and ferry services. Ample parking spaces will be identified near the venue.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery & Testimonials Section */}
        <section id="gallery" className="py-20 md:py-32 bg-[#FAF9F6]" >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                Memories & Voices
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Glimpses of our community impact and words from our supporters
              </p>
            </motion.div>

            {/* Gallery Grid/Slider */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 custom-scrollbar scroll-smooth">
              {[
                { src: "/gallery1.jpeg", alt: "Community Workshop", caption: "Community Workshops" },
                { src: "/gallery2.jpeg", alt: "Art Therapy", caption: "Expressive Art Therapy" },
                { src: "/gallery3.jpeg", alt: "Dance Movement", caption: "Cultural Wellness" }
              ].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="
                    snap-center shrink-0 
                    min-w-[70vw] md:min-w-0 
                    bg-white md:bg-transparent
                    rounded-2xl md:rounded-2xl
                    shadow-md md:shadow-lg
                    border border-[#D4AF37]/20 md:border-0
                    flex flex-col md:block
                    relative md:group md:overflow-hidden md:aspect-[4/3]
                  "
                >
                  <div className="h-48 md:h-full w-full overflow-hidden rounded-t-2xl md:rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="
                    p-4 text-center md:absolute md:inset-0 md:bg-gradient-to-t md:from-black/80 md:via-transparent md:to-transparent md:flex md:items-end md:p-6 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:text-left
                  ">
                    <p className="
                      font-semibold text-lg tracking-wide
                      text-[#800020] md:text-[#D4AF37]
                    ">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Dhriti is exactly what Kerala needs right now. A festival that celebrates mental health is a revolutionary concept that removes the fear and shame associated with seeking help.",
                  author: "Srila Menon",
                  role: "Co-Founder"
                },
                {
                  quote: "Partnering with this movement allows us to give back to the community meaningfully. The energy and positivity of this initiative are infectious.",
                  author: "Maya Menon",
                  role: "Founder"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white border-[#D4AF37]/20 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-[#D4AF37]/40 mb-4" />
                    <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#800020]">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership/CSR Section */}
        <section id="partnership" className="py-20 md:py-32 bg-gradient-to-br from-[#FFF8DC] to-[#F5DEB3]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                  Partner with Dhriti
                </h2>
                <p className="text-xl text-[#3E2723] max-w-2xl mx-auto">
                  Align your organization with Kerala's groundbreaking mental health initiative
                </p>
                <div className="inline-block mt-4 px-4 py-2 bg-[#D4AF37]/20 rounded-lg hidden md:inline-block">
                  <p className="text-[#800020] font-semibold">
                    Perfect timing for March CSR closing
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                {[
                  {
                    icon: Award,
                    title: "High-Visibility Branding",
                    description: "Prominent logo placement across festival materials, social media campaigns, and community touchpoints reaching thousands."
                  },
                  {
                    icon: Target,
                    title: "CSR Alignment",
                    description: "Direct contribution to UN SDG 3 (Good Health & Well-being) and SDG 4 (Quality Education) with measurable community impact."
                  },
                  {
                    icon: Handshake,
                    title: "Employee Engagement",
                    description: "Unique volunteering opportunities for your team to actively participate in breaking mental health stigma."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border border-[#800020]/20 hover:bg-white/80 transition-all duration-300 flex items-start gap-4">
                      <benefit.icon className="w-8 h-8 text-[#800020] shrink-0" />
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#3E2723] mb-1">{benefit.title}</h3>
                        <p className="text-[#3E2723]/80 text-sm hidden md:block">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sponsorship Opportunities Showcase */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#800020] text-center mb-8">Sponsorship Opportunities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Title Sponsor",
                    "Health Partner",
                    "Wellness Partner",
                    "Community Partner",
                    "Venue Partner",
                    "Media Partner",
                    "Tech Partner",
                    "Gift Partner"
                  ].map((role, index) => (
                    <div
                      key={index}
                      className="border border-[#800020]/20 bg-white/60 rounded-lg p-3 md:p-6 flex flex-col items-center justify-center aspect-[2/1] md:aspect-video group hover:bg-[#800020]/10 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-dashed border-[#800020]/50 flex items-center justify-center mb-2 md:mb-3 group-hover:border-solid group-hover:bg-[#800020] group-hover:text-white transition-all">
                        <span className="text-[#800020] text-xl md:text-2xl group-hover:text-white">+</span>
                      </div>
                      <span className="text-[#3E2723] font-medium text-xs md:text-sm text-center group-hover:text-[#800020]">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#8B4513] font-bold text-lg px-10 py-6 h-auto shadow-2xl"
                >
                  <Building2 className="w-5 h-5" />
                  Become a Partner
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 bg-white" >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is the festival free to attend?",
                  a: "Yes! Dhriti is an open community festival. Most activities, stalls, and performances are free for everyone. Some specialized workshops may have a nominal registration fee to cover materials."
                },
                {
                  q: "Who can attend the festival?",
                  a: "Everyone! Dhriti is designed for all age groups - from children to the elderly. We have specific activities curated for youth, families, and seniors."
                },
                {
                  q: "Where is the festival taking place?",
                  a: "The festival will be held at the central grounds in Kochi. Detailed venue maps and transportation guides will be shared closer to the event date."
                },
                {
                  q: "How can I volunteer?",
                  a: "We love our volunteers! You can sign up through the 'Join the Movement' button above. We have roles in event management, stall coordination, and guest guidance."
                },
                {
                  q: "Is there parking available?",
                  a: "Yes, there is ample parking at the venue. we highly recommend using public transport or our festival shuttle services to reduce traffic congestion."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#D4AF37]/20">
                  <AccordionTrigger className="text-lg font-semibold text-[#8B4513] hover:text-[#D4AF37] text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section >



        {/* Footer/Contact Section */}
        <footer className="bg-gradient-to-b from-[#800020] to-[#5C0120] text-white py-8 md:py-16" >
          {/* Kerala Pattern Divider */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-12" />

          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
              {/* Festival Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-[#D4AF37] mb-2">Dhriti</h3>
                <p className="text-xl text-white/80 italic mb-4">Elevate yourself by yourself</p>
                <p className="text-white/70 mb-6">
                  Kerala's first community-led mental health festival bringing joy, awareness, and transformation to our community in February 2026.
                </p>
                <div className="hidden md:flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="https://www.instagram.com/mind.empowered?igsh=bGNmYXI1czlrcDhi"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="https://www.linkedin.com/company/mind-empowered/posts/?feedView=all"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links - Hidden on Mobile to save space */}
              <div className="hidden md:block">
                <h4 className="font-bold text-lg mb-4 text-[#D4AF37]">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#objectives" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                      Our Objectives
                    </a>
                  </li>
                  <li>
                    <a href="#activities" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                      Activities
                    </a>
                  </li>
                  <li>
                    <a href="#partnership" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a href="#accessibility" className="text-white/70 hover:text-[#D4AF37] transition-colors">
                      Accessibility Statement
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              {/* Contact - Hidden on Mobile */}
              <div className="hidden md:block">
                <h4 className="font-bold text-lg mb-4 text-[#D4AF37]">Get in Touch</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:Mindempowered2020@gmail.com"
                    className="flex items-start gap-2 text-white/70 hover:text-[#D4AF37] transition-colors group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="break-all">Mindempowered2020@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <Separator className="bg-white/20 my-8" />

            <div className="text-center text-white/60 text-xs md:text-sm">
              <p>&copy; 2026 Mind Empowered. All rights reserved.</p>
              <p className="mt-1 md:mt-2">
                Dedicated to creating a stigma-free, mentally healthy Kerala.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-[#D4AF37] hover:bg-[#C4A137] text-[#800020] rounded-full shadow-2xl border-2 border-white hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
