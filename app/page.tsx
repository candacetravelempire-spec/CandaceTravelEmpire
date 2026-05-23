"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";
import GallerySlider from "@/components/GallerySlider";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import FAQ from "@/components/FAQ";
// import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      <div className="relative">
        <Services />
        <About />
        <WhyChooseUs />
        {/* <Fleet /> */}
        <Pricing />
        <GallerySlider />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        {/* <BookingForm /> */}
        <Contact />
      </div>
      <Footer />

      {/* Floating WhatsApp Button
      <a
        href="https://wa.me/919048855179"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all animate-bounce hover:animate-none"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare size={32} fill="white" />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a> */}
    </motion.main>
  );
}
