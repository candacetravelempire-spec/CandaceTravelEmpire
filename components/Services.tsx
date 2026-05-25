"use client";

import { motion } from "framer-motion";
import { 
  Plane, 
  MapPin, 
  Heart, 
  Car, 
  Briefcase, 
  Clock 
} from "lucide-react";

const services = [
  {
    title: "Airport Pickup & Drop",
    description: "Reliable airport transfers to and from Kochi, Trivandrum, and more.",
    icon: <Plane size={32} />,
    image: "/gallery/services/image001.jpeg",
  },
  {
    title: "Tourist Taxi Packages",
    description: "Explore the beauty of Kerala with our customized tourist packages.",
    icon: <MapPin size={32} />,
    image: "/gallery/services/image002.jpeg",
  },
  {
    title: "Wedding & Event Travel",
    description: "Elegant travel solutions for your special days and grand events.",
    icon: <Heart size={32} />,
    image: "/gallery/lux/WhatsApp Image 2026-05-19 at 1.43.56 PM.jpeg",
  },
  {
    title: "Outstation Trips",
    description: "Safe and comfortable long-distance travel across South India.",
    icon: <Car size={32} />,
    image: "/gallery/lux/WhatsApp Image 2026-05-19 at 1.44.02 PM.jpeg",
  },
  {
    title: "Pilgrim visiting",
    description: "Safe, comfortable and respectful transport for pilgrims visiting temples and holy sites across Kerala, with experienced drivers and flexible itineraries.",
    icon: <MapPin size={32} />,
    image: "/gallery/services/1779632687099.jpg",
  },
  {
    title: "24/7 Cab Service",
    description: "Always available for your emergency travel needs, anytime, anywhere.",
    icon: <Clock size={32} />,
    image: "/gallery/taxi/WhatsApp Image 2026-05-25 at 10.31.41 AM.jpeg",
  },
];

export default function Services() {
  return (
    <section id="we-offer" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black font-bold tracking-[0.3em] uppercase text-xs"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mt-4"
          >
            Premium Travel <span className="italic text-black/30 text-premium">Solutions</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:bg-black/[0.03] transition-all duration-500 relative overflow-hidden"
            >
              {/* Faded background image */}
              {service.image && (
                <img
                  src={service.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 z-0"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)'
                  }}
                />
              )}
              {/* Hover Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-black/5 rounded-full blur-[60px] group-hover:bg-black/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-white font-bold mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                {/* Learn More <div className="w-6 h-px bg-black" /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
