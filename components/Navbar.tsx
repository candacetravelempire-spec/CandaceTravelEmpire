"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Camera } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tighter text-black">
              Candace Travel
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-black/30 -mt-1 font-medium">
              Empire
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        {/* <div className="hidden md:flex items-center gap-6">
          <Link
            href="https://www.instagram.com/candace_travel_empire"
            target="_blank"
            className="text-black/30 hover:text-black transition-colors"
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            href="#booking"
            className="bg-black text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/5"
          >
            Book Now
          </Link>
        </div> */}

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-black/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-black/60 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                {/* <Link
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-black text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                  Book Now
                </Link> */}
                <Link
                  href="tel:+919048855179"
                  className="flex items-center justify-center gap-2 text-black border border-black/10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                  <Phone size={16} /> Call Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
