"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Kochi",
    text: "Excellent service! The driver was very professional and the car was spotless. Highly recommended for airport transfers.",
    rating: 5,
    // avatar: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Sarah Jenkins",
    location: "United Kingdom",
    text: "We booked a 5-day tour of Kerala. Our driver was more like a guide, showing us hidden gems we would have never found.",
    rating: 4,
    // avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Anjali Menon",
    location: "Bangalore",
    text: "The best taxi service in Mundakayam. Punctual, polite, and very reasonable pricing. Will definitely book again.",
    rating: 5,
    // avatar: "https://i.pravatar.cc/150?u=anjali"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Customer Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            What Our <span className="italic text-black/40 text-premium">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-black/5 p-12 rounded-3xl relative group shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="absolute top-8 right-10 text-black/[0.03] group-hover:text-black/[0.06] transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-black fill-black" />
                ))}
              </div>

              <p className="text-black/60 italic leading-relaxed mb-10 relative z-10 font-light text-lg">
                &quot;{item.text}&quot;
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-black/5">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-black/5 grayscale hover:grayscale-0 transition-all duration-500 flex items-center justify-center bg-white">
                  <User size={34} className="text-black/30" />
                </div>
                <div>
                  <h4 className="font-bold text-black tracking-tight">{item.name}</h4>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 font-bold">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
