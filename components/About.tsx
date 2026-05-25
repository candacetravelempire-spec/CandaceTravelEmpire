"use client";

import { motion } from "framer-motion";
import { Award, Users, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Travel Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-3 bg-black p-8 rounded-3xl shadow-2xl text-white">
              <div className="text-5xl font-bold font-serif">8 +</div>
              <div className="text-[10px] font-bold uppercase tracking-widest mt-3 opacity-40">Years of Excellence</div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-black/5 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-10 tracking-tight">
              Experience Kerala with <span className="italic text-black/40 text-premium">Candace Travel Empire</span>
            </h2>
            
            <p className="text-black/60 text-lg leading-relaxed mb-8 font-light">
              Based in Mundakayam, the gateway to the high ranges of Kerala, 
              Candace Travel Empire has been the trusted name for premium taxi 
              rental and airport transfer services for over a decade.
            </p>
            
            <p className="text-black/40 mb-12 text-sm leading-relaxed">
              We specialize in providing a seamless blend of local expertise and 
              international service standards. Whether it&apos;s a quick airport run 
              to Kochi or an extensive tour of the Kerala backwaters, our 
              professional drivers and elite fleet ensure your journey is as 
              beautiful as the destination.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {[
                { icon: <Award className="text-black" />, title: "Quality Fleet" },
                { icon: <Users className="text-black" />, title: "Pro Drivers" },
                { icon: <Shield className="text-black" />, title: "Safe Travels" },
                { icon: <Clock className="text-black" />, title: "Punctuality" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-black/60">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
