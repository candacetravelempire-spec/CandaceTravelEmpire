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

    </motion.main>
  );
}
