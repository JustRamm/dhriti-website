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

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8DC] to-white">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#800020]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mind Empowered Header - Left Side */}
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="Mind Empowered Logo" className="w-10 h-10 object-cover rounded-full border-2 border-[#D4AF37]" />
              <span className="text-white font-bold text-lg tracking-wide">
                MIND EMPOWERED
              </span>
            </div>

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
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-[#800020] to-[#4a0013] border-l border-[#D4AF37]/30 text-white p-0">
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

      <main className="w-full pt-16">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#800020] via-[#A0153E] to-[#5C0120]">
          {/* Kerala Pattern Background */}
          <motion.div className="absolute inset-0 opacity-10" style={{ y: y1 }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="kerala-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#D4AF37" />
                  <path d="M50 30 L60 50 L50 70 L40 50 Z" fill="#D4AF37" opacity="0.3" />
                </pattern>
                {/* Mandala Pattern */}
                <pattern id="mandala-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="40" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
                  <path d="M100 60 L110 80 L100 90 L90 80 Z" fill="#D4AF37" opacity="0.4" />
                  <path d="M100 140 L110 120 L100 110 L90 120 Z" fill="#D4AF37" opacity="0.4" />
                  <path d="M60 100 L80 110 L90 100 L80 90 Z" fill="#D4AF37" opacity="0.4" />
                  <path d="M140 100 L120 110 L110 100 L120 90 Z" fill="#D4AF37" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#kerala-pattern)" />
            </svg>
          </motion.div>

          {/* Floating Mandalas Layer - Slow Move - Desktop Only */}
          <motion.div className="absolute inset-0 opacity-5 hidden md:block" style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
            </svg>
          </motion.div>

          {/* Elephant Silhouette - Parallax Layer */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-10 hidden xl:block"
            style={{ x: useTransform(scrollY, [0, 1000], [0, 100]) }}
          >
            <svg width="150" height="100" viewBox="0 0 150 100" fill="#D4AF37">
              <path d="M120,70 Q110,60 100,60 L80,60 Q60,60 50,70 Q40,80 40,90 L40,95 L50,95 L50,90 Q50,85 60,85 L70,85 L70,95 L80,95 L80,75 L100,75 Q110,75 115,80 L120,85 Z" opacity="0.8" />
              <circle cx="115" cy="65" r="2" fill="white" />
              <path d="M115,70 Q120,80 110,90" stroke="#D4AF37" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>

          {/* Decorative Kerala Lamps */}
          <motion.div className="absolute top-24 left-10 opacity-20 hidden lg:block" style={{ y: y2 }}>
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10 Q25 20 30 30 Q35 20 30 10" fill="#D4AF37" />
              <ellipse cx="30" cy="35" rx="15" ry="8" fill="#D4AF37" />
              <rect x="28" y="35" width="4" height="30" fill="#D4AF37" />
              <path d="M20 65 L40 65 L38 75 L22 75 Z" fill="#D4AF37" />
            </svg>
          </motion.div>

          <motion.div className="absolute top-24 right-10 opacity-20 hidden lg:block" style={{ y: y2 }}>
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 md:px-6 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full border-2 border-[#D4AF37] mb-4 max-w-[90vw]">
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

              <div className="flex items-center justify-center gap-3 text-white/90 text-xl md:text-2xl mt-8">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                <span>February 14, 2026</span>
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>

              {/* Countdown Timer */}
              <div className="flex justify-center mt-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
                  <div className="relative bg-black/30 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 md:px-8 md:py-4 rounded-full flex items-baseline gap-2 md:gap-3 shadow-2xl">
                    <span className="text-3xl md:text-7xl font-bold text-white tabular-nums drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      {timeLeft.days}
                    </span>
                    <span className="text-[#D4AF37] text-sm md:text-2xl font-medium uppercase tracking-widest">
                      Days To Go
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mt-6">
                Kerala's first-of-its-kind community-led movement using the fun and meaning of a festival to break mental health stigma
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#800020] font-bold text-sm md:text-lg px-6 py-3 md:px-8 md:py-6 h-auto shadow-xl active:scale-95 transition-transform duration-200"
                >
                  Join the Movement
                </Button>
                <a href="https://www.mind-empowered.org" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] font-bold text-sm md:text-lg px-6 py-3 md:px-8 md:py-6 h-auto shadow-xl transition-all duration-300 active:scale-95"
                  >
                    Learn ME
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Why Section */}
        <section id="why" className="py-20 md:py-32 bg-white">
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
                <p>
                  Festivals have always been at the heart of Kerala's culture - they bring people together, create joy, and foster deep connections. But what if we could harness this power to address one of our most pressing challenges?
                </p>
                <p className="text-[#2D5016] font-medium">
                  Dhriti reimagines the festival experience as a safe, engaging space where mental health conversations happen naturally. Through interactive activities, creative expression, and community celebration, we're making it easier for people to open up, seek help early, and support one another.
                </p>
                <p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center mb-4">
                        <objective.icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <CardTitle className="text-[#800020]">{objective.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#800020] mb-2">
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
              className="bg-gradient-to-r from-[#2D5016] to-[#3D6026] rounded-2xl p-8 md:p-12 text-white"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]">
                  Community Empowerment Through Action
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#D4AF37]" />
                      Improved Emotional Awareness
                    </h4>
                    <p className="text-white/80">
                      Participants gain practical tools to recognize, understand, and express their emotions healthily.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#D4AF37]" />
                      Strengthened Support Networks
                    </h4>
                    <p className="text-white/80">
                      Building lasting connections between individuals, families, schools, and organizations committed to mental wellness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-[#D4AF37]" />
                      Early Intervention Mindset
                    </h4>
                    <p className="text-white/80">
                      Shifting from crisis response to proactive mental health care through early help-seeking behaviors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                      Cultural Transformation
                    </h4>
                    <p className="text-white/80">
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
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Immersive activities designed to engage, inspire, and transform
              </p>
            </motion.div>

            {/* Activities Container - Horizontal scroll on mobile, Grid on desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
              {[
                {
                  image: "/empathy_walk.jpeg",
                  title: "Empathy Walk",
                  description: "Step into someone else's shoes through guided journeys that build understanding and compassion for diverse mental health experiences."
                },
                {
                  image: "/voice_worries.jpeg",
                  title: "Voice Your Worries",
                  description: "Anonymous sharing spaces where you can express concerns freely, realizing you're not alone in your struggles."
                },
                {
                  image: "/art_therapy.jpeg",
                  title: "Art & Art Therapy",
                  description: "Express emotions through creative mediums - painting, sculpting, and crafting your way to self-discovery and healing."
                },
                {
                  image: "/wellness_games.jpeg",
                  title: "Mental Health Wellness Games",
                  description: "Gamified learning experiences that make understanding mental health fun, interactive, and accessible to all ages."
                },
                {
                  image: "/dance_therapy.jpeg",
                  title: "Dance Therapy",
                  description: "Move, express, and heal through rhythm and movement in sessions blending traditional Kerala dance with therapeutic practices."
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="min-w-[85vw] md:min-w-0 snap-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer h-full"
                  >
                    <Card className="h-full overflow-hidden border-2 hover:border-[#D4AF37] transition-all duration-300 flex flex-col active:scale-95">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-[#800020] text-xl">{activity.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-gray-600 mb-4 flex-grow">{activity.description}</p>
                        <Button
                          className="w-full bg-[#800020] hover:bg-[#A0153E] text-white mt-4 active:scale-95 transition-transform"
                          size="sm"
                        >
                          Register for this Activity
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
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden group">
              {/* Mobile: Horizontal Manual Scroll */}
              <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 w-full scrollbar-hide">
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
                    className="min-w-[85vw] shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 snap-center"
                  >
                    <div className="h-64 overflow-hidden">
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
                        className="w-[300px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 group-hover:pause"
                      >
                        <div className="h-64 overflow-hidden">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover transition-transform duration-500 md:hover:scale-110"
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
                ))}
              </motion.div>
            </div>
          </div>
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

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { src: "/gallery1.jpeg", alt: "Community Workshop", caption: "Community Workshops" },
                { src: "/gallery2.jpeg", alt: "Art Therapy", caption: "Expressive Art Therapy" },
                { src: "/gallery3.jpeg", alt: "Dance Movement", caption: "Cultural Wellness" }
              ].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">{img.caption}</p>
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
        <section id="partnership" className="py-20 md:py-32 bg-gradient-to-br from-[#2D5016] to-[#1D4010]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
                  Partner with Dhriti
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Align your organization with Kerala's groundbreaking mental health initiative
                </p>
                <div className="inline-block mt-4 px-4 py-2 bg-[#FDD835]/20 rounded-lg">
                  <p className="text-[#FDD835] font-semibold">
                    Perfect timing for March CSR closing
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-[#D4AF37]/30 hover:bg-white/20 transition-all duration-300">
                      <benefit.icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sponsorship Opportunities Showcase */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Sponsorship Opportunities</h3>
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
                      className="border border-[#D4AF37]/30 bg-white/5 rounded-lg p-6 flex flex-col items-center justify-center aspect-video group hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center mb-3 group-hover:border-solid group-hover:bg-[#D4AF37] group-hover:text-[#800020] transition-all">
                        <span className="text-[#D4AF37] text-2xl group-hover:text-[#800020]">+</span>
                      </div>
                      <span className="text-white/80 font-medium text-sm text-center group-hover:text-white">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#2D5016] font-bold text-lg px-10 py-6 h-auto shadow-2xl"
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
          <div className="container mx-auto px-6 max-w-4xl">
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
                  <AccordionTrigger className="text-lg font-semibold text-[#2D5016] hover:text-[#800020] text-left">
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
