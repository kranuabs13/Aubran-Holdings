import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Box, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || mobileMenuOpen ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 z-50">
          <span className="text-xl font-bold tracking-tighter text-black uppercase">Aubran</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-[11px] font-bold text-black/60 hover:text-black transition-colors uppercase tracking-[0.2em]">About</a>
          <a href="#solutions" className="text-[11px] font-bold text-black/60 hover:text-black transition-colors uppercase tracking-[0.2em]">Solutions</a>
          <button className="text-[11px] font-bold text-black border-b border-black/20 hover:border-black transition-all pb-0.5 uppercase tracking-[0.2em]">
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span 
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
              className="w-full h-px bg-black block origin-center" 
            />
            <motion.span 
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="w-full h-px bg-black block" 
            />
            <motion.span 
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
              className="w-full h-px bg-black block origin-center" 
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light tracking-tight text-black uppercase">About</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light tracking-tight text-black uppercase">Solutions</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-light tracking-tight text-black uppercase">Contact</a>
        </motion.div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-[clamp(2.5rem,10vw,5.5rem)] font-light leading-[1.1] tracking-tight text-black mb-8 md:mb-12">
            Global Distribution, <br />
            <span className="italic font-serif">Redefined.</span>
          </h1>
          <p className="text-base md:text-xl text-black/50 leading-relaxed max-w-lg mb-10 md:mb-16 font-light">
            Strategic reselling and logistics infrastructure for brands scaling across the worldwide market. Precision at every node of the supply chain.
          </p>
          <div className="flex items-center gap-8">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-black"
            >
              Collaborate With Us
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="lg:col-span-5 relative hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'circOut' }}
          className="aspect-[4/5] bg-gray-50 overflow-hidden rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-black/5 shadow-2xl max-w-[240px]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-2">Philosophy</p>
          <p className="text-sm italic font-serif leading-relaxed text-black/80">
            "Simplifying complexity through architectural precision in distribution."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const items = [
    {
      title: "Global Distribution",
      desc: "Comprehensive supply chain solutions connecting manufacturers to diverse global markets with total transparency.",
      icon: <Globe className="w-5 h-5 stroke-[1.5]" />,
    },
    {
      title: "Strategic Reselling",
      desc: "Leveraging market intelligence to position products optimally across premium retail networks worldwide.",
      icon: <Target className="w-5 h-5 stroke-[1.5]" />,
    },
    {
      title: "Active Logistics",
      desc: "Distributed warehousing and real-time infrastructure tailored for high-velocity international trade.",
      icon: <Box className="w-5 h-5 stroke-[1.5]" />,
    },
    {
      title: "Operational Velocity",
      desc: "Optimized workflows that minimize lead times and maximize market responsiveness.",
      icon: <Zap className="w-5 h-5 stroke-[1.5]" />,
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-2xl text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4 md:mb-6">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-tight">
              A seamless bridge for <br />
              <span className="italic font-serif">international scale.</span>
            </h2>
          </div>
          <div className="text-black/40 text-[13px] md:text-sm max-w-xs leading-relaxed font-light">
            We provide the structural foundations for brands to expand their footprint without the friction of global trade hurdles.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 group md:hover:bg-black transition-colors duration-500"
            >
              <div className="mb-6 md:mb-8 text-black md:group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-black mb-3 md:mb-4 uppercase tracking-widest md:group-hover:text-white transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-black/50 text-[13px] md:text-sm leading-relaxed md:group-hover:text-white/60 transition-colors duration-500 font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 md:py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-12">
          Let's discuss <br />
          <span className="italic font-serif">your expansion.</span>
        </h2>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-3 md:mb-4">Email Inquiry</p>
          <a href="mailto:contact@aubran.com" className="text-xl md:text-2xl font-light hover:text-black/60 transition-colors break-words text-black">
            contact@aubran.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-white border-t border-black/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-sm font-bold tracking-tighter uppercase">Aubran</div>
      <div className="text-[10px] font-bold tracking-[0.2em] text-black/30 uppercase text-center md:text-right">
        © 2026 Aubran Holdings Limited. All rights reserved. <br className="md:hidden" />
        Worldwide Distribution & Strategic Reselling.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white antialiased">
      <Navbar />
      <Hero />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}
