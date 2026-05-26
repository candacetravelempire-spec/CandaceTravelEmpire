"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background Image with Cinematic Overlay */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.webp"
          alt="Premium Travel Kerala"
          fill
          priority
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent" />
      </motion.div>

      {/* Floating Light Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-black/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-black/5 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-black rounded-full blur-[2px] hidden md:block"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#f4e6db] border border-[#ecd7c7] backdrop-blur-md mb-8 sm:mb-10 mx-auto max-w-full"
          >
            <span className="w-1 h-1 bg-[#5B3A29] rounded-full animate-ping" />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.4em] uppercase text-[#5B3A29] truncate">Premium Kerala Taxi services</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] sm:leading-[1] mb-6 sm:mb-8 tracking-tighter">
            <span className="block text-black">Candace Travel</span>
            <span className="block italic text-white/70 ">Empire</span>
          </h1>

          <p className="max-w-2xl mx-auto text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl text-white mb-10 sm:mb-12 leading-relaxed font-light uppercase tracking-wider sm:tracking-widest px-4">
            Airport Transfers • Tourist Trips • Cab Rentals
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=919048855179&text=Hello&type=phone_number&app_absent=0" target="_blank"
              className="btn-premium flex items-center gap-3 bg-[#5B3A29] text-white hover:bg-[#4e2f22]"
            >
              Book Now <ArrowRight size={18} />
            </Link>

            <Link
              href="tel:+919048855179"
              className="btn-outline flex items-center gap-3 bg-[#5B3A29] border-[#5B3A29] text-white hover:bg-[#5B3A29]/10"
            >
              <Phone size={18} /> Call Now
            </Link>

            <Link
              href="https://wa.me/919048855179"
              target="_blank"
              className="px-6 py-3 md:px-8 md:py-4 bg-[#f4e6db] hover:bg-[#ecd7c7] border border-[#ecd7c7] rounded-full font-bold text-[#5B3A29] transition-all flex items-center gap-3"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </Link>
          </div>
        </motion.div>

        {/* Stats / Features Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-24 px-4 sm:px-6"
        >
          {[
            { label: "Reliable Service", value: "24/7", target: 24 },
            { label: "Years Experience", value: "8+", target: 8 },
            { label: "Happy Clients", value: "3k+", target: 3000 },
            { label: "Vehicle Types", value: "3+", target: 3 },
          ].map((stat, i) => (
            <div key={i} className="p-4 sm:p-6 md:p-8 border-black/5 border-l odd:border-l-0 md:odd:border-l md:first:border-l-0 border-t [&:nth-child(-n+2)]:border-t-0 md:border-t-0">
              <Counter value={stat.target} suffix={stat.value.includes('+') ? '+' : stat.value.includes('/') ? '/7' : ''} />
              <div className="text-[9px] uppercase tracking-[0.3em] text-white font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end) > 10 ? (totalDuration / end) : 10;

    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-4xl font-serif font-bold text-white mb-2 tracking-tighter">
      {suffix === '5k+' ? (count / 1000).toFixed(0) + 'k+' : count + suffix}
    </div>
  );
}