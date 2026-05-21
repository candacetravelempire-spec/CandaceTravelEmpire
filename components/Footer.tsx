"use client";
import { FiPhone, FiMail, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tighter text-black">
                  Candace Travel
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-black/30 -mt-1 font-medium">
                  Empire
                </span>
              </div>
            </Link>
            <p className="text-black/40 text-sm leading-relaxed font-light">
              Premium taxi rental and airport transfer service in Kerala. 
              Providing reliable and luxury travel experiences from Mundakayam.
            </p>
            <div className="flex items-center gap-5">
              <Link 
                href="https://www.instagram.com/candace_travel_empire" 
                target="_blank"
                className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <FaInstagram   size={18} />
              </Link>
              <Link 
                href="tel:+919048855179" 
                className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <FiPhone size={18} />
              </Link>
              <Link 
                href="mailto:candacetravelempire@gmail.com" 
                className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <FiMail size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Fleet", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-black/40 hover:text-black transition-colors text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Services</h4>
            <ul className="space-y-4">
              {[
                "Airport Transfers",
                "Tourist Packages",
                "Wedding Travel",
                "Corporate Trips",
                "24/7 Cab Service"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#services" 
                    className="text-black/40 hover:text-black transition-colors text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-sm text-black/40 font-light">
                <FiMapPin size={18} className="text-black shrink-0" />
                <span>Mundakayam, Kerala, India</span>
              </li>
              <li className="flex gap-4 text-sm text-black/40 font-light">
                <FiPhone size={18} className="text-black shrink-0" />
                <span>+91 90488 55179</span>
              </li>
              <li className="flex gap-4 text-sm text-black/40 font-light">
                <FiMail size={18} className="text-black shrink-0" />
                <span>candacetravelempire@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-black/20 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Candace Travel Empire. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-black/30 hover:text-black transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
              <FiArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
