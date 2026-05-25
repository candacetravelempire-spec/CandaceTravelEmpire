"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgePercent, UserCheck, Car, Headphones } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="text-black" />,
    title: "Experienced Drivers",
    description: "Our drivers are professionally trained and have years of experience navigating Kerala's terrains."
  },
  {
    icon: <ShieldCheck className="text-black" />,
    title: "Safe & Reliable",
    description: "Safety is our priority. All vehicles undergo regular maintenance and safety checks."
  },
  {
    icon: <BadgePercent className="text-black" />,
    title: "Affordable Pricing",
    description: "Luxury travel doesn't have to be expensive. We offer the best rates in Kerala."
  },
  {
    icon: <Clock className="text-black" />,
    title: "On-Time Pickup",
    description: "We value your time. Our drivers arrive at least 15 minutes before your scheduled departure."
  },
  {
    icon: <Car className="text-black" />,
    title: "Clean Vehicles",
    description: "All our cabs are thoroughly cleaned and sanitized before every single journey."
  },
  {
    icon: <Headphones className="text-black" />,
    title: "24/7 Customer Support",
    description: "Have a question? Our support team is available round the clock to assist you."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-empire" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Why Empire</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            The Gold Standard of <span className="italic text-black/40 text-premium">Travel</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:bg-black/[0.03] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black/10 transition-all">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-black/40 text-sm leading-relaxed group-hover:text-black/60 transition-colors">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
