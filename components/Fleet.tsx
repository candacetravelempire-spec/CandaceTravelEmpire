"use client";

import { motion } from "framer-motion";
import { Check, Users, Luggage, Wind } from "lucide-react";

const fleet = [
  {
    type: "Premium Sedan",
    model: "Maruti Dzire / Toyota Etios",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    features: ["4 Passengers", "2 Bags", "Climate Control", "Professional Driver"],
    price: "From ₹2500"
  },
  {
    type: "Luxury SUV",
    model: "Toyota Innova Crysta",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    features: ["7 Passengers", "4 Bags", "Spacious Interior", "Premium Audio"],
    price: "From ₹4500"
  },
  {
    type: "Urban Traveller",
    model: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop",
    features: ["12-26 Passengers", "Bulk Luggage", "Pushback Seats", "Dual AC"],
    price: "From ₹6500"
  }
];

export default function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
              Explore Our <span className="italic text-black/40 text-premium">Elite Fleet</span>
            </h2>
            <p className="text-black/50 mt-6 text-lg font-light">
              Choose from our wide range of well-maintained, premium vehicles tailored for comfort and safety.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fleet.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-black/5 rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.type} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-6 left-8">
                  <span className="bg-black text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold mb-3 tracking-tight">{item.model}</h3>
                <div className="flex items-center gap-6 mb-8 text-black/40 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-black" /> {item.features[0].split(' ')[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage size={14} className="text-black" /> {item.features[1].split(' ')[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind size={14} className="text-black" /> AC
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-black/60 text-xs">
                      <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                        <Check size={10} className="text-black" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-black/5">
                  <div>
                    <div className="text-black/30 text-[9px] uppercase tracking-widest font-bold mb-1">Starting at</div>
                    <div className="text-3xl font-bold text-black tracking-tighter">{item.price}</div>
                  </div>
                  <button className="bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-black/80">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
