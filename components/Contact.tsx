"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Camera, Clock, ExternalLink } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const contactInfo = [
  {
    icon: <MapPin className="text-black" />,
    title: "Our Location",
    value: "Mundakayam, Kerala, India",
    link: "https://maps.google.com/?q=Mundakayam,Kerala"
  },
  {
    icon: <Phone className="text-black" />,
    title: "Phone Number",
    value: "+91 90488 55179",
    link: "tel:+919048855179"
  },
  {
    icon: <Mail className="text-black" />,
    title: "Email Address",
    value: "candacetravel.....",
    link: "mailto:candacetravelempire@gmail.com"
  },
  {
    icon: <FaInstagram size={20} className="text-black" />,
    title: "Instagram",
    value: "@candace_travel_empire",
    link: "https://www.instagram.com/candace_travel_empire"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            Connect with <span className="italic text-black/40 text-premium">Empire</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 p-8 bg-black/5 rounded-3xl border border-black/5 group hover:bg-black/10 transition-all shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-black">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-black/30 mb-2 font-bold">{item.title}</div>
                  <div className="text-lg font-bold flex items-center gap-2 text-black tracking-tight">
                    {item.value}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="p-10 bg-black rounded-[2.5rem] mt-12 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 text-white mb-6">
                  <Clock size={24} />
                  <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Operating Hours</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  We are available 24 hours a day, 7 days a week, including all public holidays. 
                  Your travel comfort is our priority.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2.5rem] overflow-hidden min-h-[500px] relative border border-black/5 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.327429188265!2d76.8778644871582!3d9.673894000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06368d37452d37%3A0xc0670868f773426e!2sMundakayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715582345678!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
