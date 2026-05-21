"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, MapPin, Phone, User, MessageSquare, Car } from "lucide-react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // WhatsApp Integration
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const name = formData.get("name");
      const phone = formData.get("phone");
      const pickup = formData.get("pickup");
      const drop = formData.get("drop");
      const date = formData.get("date");
      const vehicle = formData.get("vehicle");
      
      const message = `*New Booking Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}%0A*Vehicle:* ${vehicle}`;
      window.open(`https://wa.me/919048855179?text=${message}`, "_blank");
    }, 1500);
  };

  return (
    <section id="booking" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-black/30 font-bold tracking-[0.4em] uppercase text-[10px]">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8 tracking-tight">
              Book Your <span className="italic text-black/40 text-premium">Premium Ride</span>
            </h2>
            <p className="text-black/50 text-lg mb-12 leading-relaxed font-light">
              Fill out the form below or contact us directly on WhatsApp for 
              instant confirmation. We ensure on-time pickups and a luxury 
              experience for every journey.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone size={20} />, label: "Call for Instant Booking", value: "+91 90488 55179" },
                { icon: <Calendar size={20} />, label: "Availability", value: "24/7 Service" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-8 bg-black/5 rounded-3xl border border-black/5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-black/30 mb-1 font-bold">{item.label}</div>
                    <div className="text-xl font-bold tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-black/5 shadow-2xl relative"
          >
            {success ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center text-black mx-auto mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Request Sent!</h3>
                <p className="text-black/40 mb-10 font-light">Opening WhatsApp for instant confirmation...</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-black font-bold underline text-sm uppercase tracking-widest"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input 
                        name="name"
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black placeholder:text-black/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input 
                        name="phone"
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black placeholder:text-black/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input 
                        name="pickup"
                        required
                        type="text" 
                        placeholder="e.g. Mundakayam"
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black placeholder:text-black/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Drop Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input 
                        name="drop"
                        required
                        type="text" 
                        placeholder="e.g. Kochi Airport"
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black placeholder:text-black/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input 
                        name="date"
                        required
                        type="date" 
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black [color-scheme:light]"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Vehicle Type</label>
                    <div className="relative">
                      <Car className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <select 
                        name="vehicle"
                        required
                        className="w-full bg-black/5 border border-transparent rounded-2xl py-4.5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black appearance-none"
                      >
                        <option value="sedan">Premium Sedan</option>
                        <option value="suv">Luxury SUV</option>
                        <option value="traveller">Urban Traveller</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">Special Requirements</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-5 top-5 text-black/20" size={18} />
                    <textarea 
                      name="message"
                      rows={4} 
                      placeholder="Extra luggage, child seat, etc."
                      className="w-full bg-black/5 border border-transparent rounded-2xl py-5 pl-14 pr-5 focus:outline-none focus:bg-white focus:border-black/10 transition-all text-black placeholder:text-black/20 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-black/90 text-white font-bold py-5 rounded-2xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 shadow-2xl shadow-black/10 uppercase tracking-[0.2em] text-xs"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Confirm Booking <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
