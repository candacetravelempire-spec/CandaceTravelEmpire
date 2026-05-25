"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Fleet from "@/components/Fleet";
import GallerySlider from "@/components/GallerySlider";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
        <ServicesSection />
        <About />
        <GallerySlider />
        <WhyChooseUs />
        {/* <Fleet /> */}
        {/* <Pricing /> */}
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
