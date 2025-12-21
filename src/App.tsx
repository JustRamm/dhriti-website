import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Footprints,
  MessageSquare,
  Palette,
  Gamepad2,
  Music,
  Building2,
  Target,
  Handshake,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  TrendingUp,
  Shield,
  ArrowUp,
  Quote,
  Menu
} from "lucide-react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
              <a href="#why" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Why Dhriti</a>
              <a href="#objectives" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Objectives</a>
              <a href="#activities" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Activities</a>
              <a href="#partnership" className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium">Partnership</a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#800020] border-l border-[#D4AF37]/20">
                  <div className="flex flex-col gap-6 mt-10">
                    <a href="#home" className="text-xl text-white font-medium hover:text-[#D4AF37]">Home</a>
                    <a href="#why" className="text-xl text-white font-medium hover:text-[#D4AF37]">Why Dhriti</a>
                    <a href="#objectives" className="text-xl text-white font-medium hover:text-[#D4AF37]">Objectives</a>
                    <a href="#activities" className="text-xl text-white font-medium hover:text-[#D4AF37]">Activities</a>
                    <a href="#partnership" className="text-xl text-white font-medium hover:text-[#D4AF37]">Partnership</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#800020] via-[#A0153E] to-[#5C0120]">
          {/* Kerala Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="kerala-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#D4AF37" />
                  <path d="M50 30 L60 50 L50 70 L40 50 Z" fill="#D4AF37" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#kerala-pattern)" />
            </svg>
          </div>

          {/* Decorative Kerala Lamps */}
          <div className="absolute top-24 left-10 opacity-20 animate-float hidden lg:block">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10 Q25 20 30 30 Q35 20 30 10" fill="#D4AF37" />
              <ellipse cx="30" cy="35" rx="15" ry="8" fill="#D4AF37" />
              <rect x="28" y="35" width="4" height="30" fill="#D4AF37" />
              <path d="M20 65 L40 65 L38 75 L22 75 Z" fill="#D4AF37" />
            </svg>
          </div>

          <div className="absolute top-24 right-10 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10 Q25 20 30 30 Q35 20 30 10" fill="#D4AF37" />
              <ellipse cx="30" cy="35" rx="15" ry="8" fill="#D4AF37" />
              <rect x="28" y="35" width="4" height="30" fill="#D4AF37" />
              <path d="M20 65 L40 65 L38 75 L22 75 Z" fill="#D4AF37" />
            </svg>
          </div>

          {/* Lotus Flowers */}
          <div className="absolute bottom-32 left-20 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "0.5s" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(60 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-60 40 60)" />
              <circle cx="40" cy="60" r="6" fill="#FDD835" />
            </svg>
          </div>

          <div className="absolute bottom-32 right-20 opacity-15 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(30 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(60 40 60)" />
              <ellipse cx="40" cy="60" rx="8" ry="15" fill="#D4AF37" transform="rotate(-60 40 60)" />
              <circle cx="40" cy="60" r="6" fill="#FDD835" />
            </svg>
          </div>

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
          <div className="absolute bottom-0 left-0 opacity-10 hidden lg:block">
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 opacity-10 hidden lg:block">
            <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="55" y="80" width="10" height="120" fill="#D4AF37" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(-20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" transform="rotate(20 60 70)" />
              <ellipse cx="60" cy="70" rx="25" ry="15" fill="#D4AF37" />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-6 py-2 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full border-2 border-[#D4AF37] mb-4">
                <p className="text-[#D4AF37] font-semibold text-sm md:text-base">
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
                <span>February 2026</span>
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mt-6">
                Kerala's first-of-its-kind community-led movement using the fun and meaning of a festival to break mental health stigma
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#800020] font-bold text-lg px-8 py-6 h-auto shadow-xl"
                >
                  Join the Movement
                </Button>
                <a href="https://www.mind-empowered.org" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="border-2 border-white bg-white text-[#800020] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] font-bold text-lg px-8 py-6 h-auto shadow-xl transition-all duration-300"
                  >
                    Learn More
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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-[#D4AF37]/20">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Footprints,
                  title: "Empathy Walk",
                  description: "Step into someone else's shoes through guided journeys that build understanding and compassion for diverse mental health experiences.",
                  color: "from-[#2D5016] to-[#3D6026]"
                },
                {
                  icon: MessageSquare,
                  title: "Voice Your Worries",
                  description: "Anonymous sharing spaces where you can express concerns freely, realizing you're not alone in your struggles.",
                  color: "from-[#4A90E2] to-[#5AA0F2]"
                },
                {
                  icon: Palette,
                  title: "Art & Art Therapy",
                  description: "Express emotions through creative mediums - painting, sculpting, and crafting your way to self-discovery and healing.",
                  color: "from-[#D4AF37] to-[#E4BF47]"
                },
                {
                  icon: Gamepad2,
                  title: "Mental Health Wellness Games",
                  description: "Gamified learning experiences that make understanding mental health fun, interactive, and accessible to all ages.",
                  color: "from-[#7CB342] to-[#8CC352]"
                },
                {
                  icon: Music,
                  title: "Dance Therapy",
                  description: "Move, express, and heal through rhythm and movement in sessions blending traditional Kerala dance with therapeutic practices.",
                  color: "from-[#800020] to-[#A0153E]"
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full overflow-hidden border-2 hover:border-[#D4AF37] transition-all duration-300 flex flex-col">
                    <div className={`h-32 bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                      <activity.icon className="w-16 h-16 text-white" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-[#800020] text-xl">{activity.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-gray-600 mb-4 flex-grow">{activity.description}</p>
                      <Button
                        className="w-full bg-[#800020] hover:bg-[#A0153E] text-white mt-4"
                        size="sm"
                      >
                        Register for this Activity
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
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

        {/* Gallery & Testimonials Section */}
        <section id="gallery" className="py-20 md:py-32 bg-[#FAF9F6]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 bg-white">
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
        </section>

        {/* Footer/Contact Section */}
        <footer className="bg-gradient-to-b from-[#800020] to-[#5C0120] text-white py-16">
          {/* Kerala Pattern Divider */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-12" />

          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Festival Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-[#D4AF37] mb-2">Dhriti</h3>
                <p className="text-xl text-white/80 italic mb-4">Elevate yourself by yourself</p>
                <p className="text-white/70 mb-6">
                  Kerala's first community-led mental health festival bringing joy, awareness, and transformation to our community in February 2026.
                </p>
                <div className="flex gap-4">
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

              {/* Quick Links */}
              <div>
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
              <div>
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

            <div className="text-center text-white/60 text-sm">
              <p>&copy; 2026 Mind Empowered. All rights reserved.</p>
              <p className="mt-2">
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
