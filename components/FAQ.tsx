"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book an airport transfer?",
    answer: "You can book directly through our website form, or simply call/WhatsApp us at +91 90488 55179. We recommend booking at least 24 hours in advance for guaranteed availability."
  },
  {
    question: "Do you provide 24/7 taxi service?",
    answer: "Yes, Candace Travel Empire operates 24/7. Whether it's a midnight airport arrival or an early morning emergency, our drivers are always ready to serve you."
  },
  {
    question: "What areas in Kerala do you cover?",
    answer: "While we are based in Mundakayam, we provide services across all of Kerala, including major airports (Kochi, Trivandrum) and tourist destinations like Munnar, Vagamon, and Thekkady."
  },
  {
    question: "How can I pay for my trip?",
    answer: "We accept various payment methods including Cash, UPI (GPay, PhonePe), and Bank Transfers. For long-distance trips, a small advance payment might be required."
  },
  {
    question: "Are your vehicles air-conditioned?",
    answer: "Yes, all our vehicles—from sedans to larger travellers—are fully air-conditioned and well-maintained to ensure a comfortable journey in Kerala's climate."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Assistance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 tracking-tight">
            Frequently Asked <span className="italic text-black/40 text-premium">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border transition-all duration-300 rounded-2xl overflow-hidden"
              style={{ 
                borderColor: openIndex === index ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05)" 
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors ${openIndex === index ? "text-black" : "text-black/50 group-hover:text-black"}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-black text-white rotate-180" : "bg-black/5 text-black/20"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-black/40 leading-relaxed border-t border-black/5 pt-6 font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
