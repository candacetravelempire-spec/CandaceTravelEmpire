"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Heart,
  Car
} from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const luxImages: GalleryImage[] = [
  {
    src: "/gallery/lux/WhatsApp Image 2026-05-19 at 1.43.57 PM.jpeg",
    title: "Groom's Arrival",
    description: "Luxury sedans ready for the grand arrival of the groom and entourage."
  },
  {
    src: "/gallery/lux/WhatsApp Image 2026-05-19 at 1.44.02 PM.jpeg",
    title: "The Perfect Departure",
    description: "Elegant getaway cars for the newlywed couple's first journey together."
  },
  {
    src: "/gallery/lux/08_49_44 AM.png",
    title: "Floral Elegance",
    description: "Exquisite wedding cars adorned with stunning floral arrangements."
  },
  {
    src: "/gallery/lux/WhatsApp Image 2026-05-19 at 1.43.56 PM.jpeg",
    title: "Bridal Elegance",
    description: "Premium wedding transport decorated with exquisite floral arrangements."
  },
];

const taxiImages: GalleryImage[] = [
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-19 at 1.43.54 PM.jpeg",
    title: "Premium Sedans",
    description: "Executive travel solutions for local and outstation trips."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-19 at 1.43.59 PM.jpeg",
    title: "Pristine Interiors",
    description: "Comfortable and immaculate cabin space for a relaxing ride."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2025-19 at 1.44.03 PM.jpeg",
    title: "Reliable Chauffeurs",
    description: "Professional, well-dressed drivers committed to your safety."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-19 at 1.44.04 PM.jpeg",
    title: "Fleet Lineup",
    description: "A wide collection of modern sedans and SUVs at your service."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-19 at PM.jpeg",
    title: "Luxury Travel Experience",
    description: "First-class taxi experience for corporate and leisure clients."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-25 at 8.21.47 AM.jpeg",
    title: "Airport Transfers",
    description: "Punctual and comfortable rides to and from major airports."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-25 at 8.21.48 AM.jpeg",
    title: "Corporate Transportation",
    description: "Reliable and professional taxi services for business travelers."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-25 at 8.32.04 PM.jpeg",
    title: "Event Transportation",
    description: "Seamless travel solutions for weddings, parties, and special occasions."
  },
  {
    src: "/gallery/taxi/WhatsApp Image 2026-05-25PM.jpeg",
    title: "Outstation Travel",
    description: "Comfortable and safe long-distance taxi services across South India."
  }
];

export default function GallerySlider() {
  const [activeTab, setActiveTab] = useState<"wedding" | "taxi">("wedding");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const images = activeTab === "wedding" ? luxImages : taxiImages;

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, activeTab, lightboxOpen]);

  // Reset index when changing tab
  const handleTabChange = (tab: "wedding" | "taxi") => {
    setDirection(1);
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex, activeTab]);

  // Slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Light Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-black/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-black/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">
            Visual Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            Our Elite <span className="italic text-black/40 text-premium">Galleries</span>
          </h2>
          <p className="text-black/50 mt-4 max-w-xl mx-auto text-sm font-light">
            Slide through our curate wedding and premium taxi collections to experience true travel sophistication.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/5 p-1.5 rounded-full border border-black/5 flex gap-2">
            <button
              onClick={() => handleTabChange("wedding")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "wedding"
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "text-black/55 hover:text-black"
                }`}
            >
              <Heart size={14} className={activeTab === "wedding" ? "fill-white" : ""} />
              Wedding & Events
            </button>
            <button
              onClick={() => handleTabChange("taxi")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "taxi"
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "text-black/55 hover:text-black"
                }`}
            >
              <Car size={14} />
              Premium Cabs
            </button>
          </div>
        </div>

        {/* Main Slider Area */}
        <div className="relative glass-card border border-black/5 rounded-[2.5rem] p-4 md:p-8 bg-white/50 backdrop-blur-md shadow-lg max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-black group">
            {/* Slide Container */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex + activeTab}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls (Overlay on Hover/Always visible on touch) */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-black/40 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 pointer-events-auto hover:scale-105 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black/40 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 pointer-events-auto hover:scale-105 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Overlay Banner (Details + Maximize Button) */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white z-10 pointer-events-none">
              <div className="max-w-xl">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/50">
                  {activeTab === "wedding" ? "Luxury Travel" : "Premium Transport"}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mt-1 tracking-tight">
                  {images[currentIndex].title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-light mt-2">
                  {images[currentIndex].description}
                </p>
              </div>

              {/* Action utilities */}
              <div className="flex items-center gap-3 pointer-events-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  title={isPlaying ? "Pause autoplay" : "Play autoplay"}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="px-4 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Maximize2 size={12} /> View Full
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail navigation & Progress indicator */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
            {/* Dot Pagination */}
            <div className="flex gap-2.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "w-8 bg-black" : "w-2.5 bg-black/15 hover:bg-black/35"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Micro thumbnail preview */}
            <div className="flex gap-2 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${currentIndex === index ? "border-black scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal view */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors border border-white/5"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Main Modal Image Area */}
            <div
              className="relative w-full max-w-6xl aspect-[16/10] md:aspect-[16/9] max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex + activeTab}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Lightbox navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/5 hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/5 hover:scale-105 active:scale-95"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Info footer in Lightbox */}
            <div
              className="mt-6 text-center max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                {images[currentIndex].title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-light mt-2">
                {images[currentIndex].description}
              </p>
              <span className="inline-block mt-4 text-[10px] text-white/40 tracking-[0.2em]">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
