"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, ShieldCheck, MapPinned, Info } from "lucide-react";
import Link from "next/link";

const pricing = [
  {
    destination: "Cochin (COK) Airport",
    // price: "₹3,200",
    description: "Private transfer from Mundakayam to Kochi International Airport.",
    tag: "Most Popular",
    icon: <PlaneTakeoff className="text-gold" size={32} />
  },
  {
    destination: "Trivandrum (TRV) Airport",
    // price: "₹5,500",
    description: "Premium long-distance transfer to Trivandrum International Airport.",
    tag: "Express",
    icon: <PlaneTakeoff className="text-gold" size={32} />
  },
  {
    destination: "Local Kerala Tours",
    // price: "₹2,500",
    description: "Day-trip packages for Munnar, Vagamon, and Thekkady.",
    tag: "Flexible",
    icon: <MapPinned className="text-gold" size={32} />
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            Airport <span className="italic text-black/40 text-premium">Transfers</span> & More
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-black/5 p-10 rounded-3xl flex flex-col items-center text-center relative shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {item.tag && (
                <div className="absolute top-6 right-6 bg-black/5 text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-black/5">
                  {item.tag}
                </div>
              )}
              
              <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-8">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{item.destination}</h3>
              <p className="text-black/40 text-sm mb-10 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="mt-auto w-full">
                {/* <div className="text-[9px] uppercase tracking-widest text-black/30 mb-2 font-bold">Starting from</div> */}
                {/* <div className="text-4xl font-bold text-black mb-10 tracking-tighter">{item.price}</div> */}
                
                <Link 
                  href="https://api.whatsapp.com/send/?phone=919048855179&text=Hello&type=phone_number&app_absent=0" target="_blank"
                  className="block w-full py-4 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-black/90"
                >
                  Book This Trip
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-black/5 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-black/5">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shadow-sm shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg tracking-tight">Safe & Insured Journeys</h4>
              <p className="text-black/40 text-sm font-light">Every trip is monitored and drivers are verified for your safety.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-black/30 text-[10px] italic font-medium">
            <Info size={14} /> Prices may vary based on vehicle selection and additional wait times.
          </div>
        </div>
      </div>
    </section>
  );
}
