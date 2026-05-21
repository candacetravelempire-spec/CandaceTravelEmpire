"use client";

import { motion } from "framer-motion";
import { Camera, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const gallery = [
  "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1974&auto=format&fit=crop",
];

export default function InstagramGallery() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Stay Connected</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
              Our <span className="italic text-black/40 text-premium">Travel Journal</span>
            </h2>
          </div>
          <Link 
            href="https://www.instagram.com/candace_travel_empire" 
            target="_blank"
            className="flex items-center gap-4 px-8 py-4 bg-black/5 hover:bg-black/10 border border-black/5 rounded-full font-bold transition-all text-xs uppercase tracking-widest text-black"
          >
            <Camera size={18} className="text-black" />
            @candace_travel_empire
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img src={img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart size={18} fill="white" />
                  <span className="text-xs font-bold">128</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle size={18} fill="white" />
                  <span className="text-xs font-bold">12</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
