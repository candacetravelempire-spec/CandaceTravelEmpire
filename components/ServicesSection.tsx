// components/ServicesSection.tsx

import {
  Car,
  MapPinned,
  MapPin,
  Phone,
  Mail,
  Heart,
  Sparkles,
  Clock3,
  Plane
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const services = [
  {
    title: "Airport Pickup & Drop",
    subtitle: "Skip the wait — your ride is ready when you are!",
    description:
      "Reliable airport transfers with smooth pickups, comfortable rides, and on-time service every time.",
    icon: Plane,
    image:
      "/gallery/taxi/airport.jpeg",
  },
  {
    title: "Tourist Taxi Packages",
    subtitle: "Your wheels, your way — freedom starts here!",
    description:
      "Explore Kerala with flexible taxi packages designed for sightseeing, day trips, and custom itineraries.",
    list: [
      "Tourist Bus",
      "Traveler Package",
    ],
    icon: MapPin,
    image:
      "/gallery/taxi/traveler.jpeg",
  },
  {
    title: "Wedding & Event Travel",
    subtitle: "Pack your bags — the world is waiting!",
    description:
      "Elegant travel solutions for weddings, special occasions, and grand events with extra care.",
    list: [
      "For Groom",
      "For Bride",
      "For Passengers",
    ],
    icon: Heart,
    image:
      "/gallery/services/1779632687099.jpg",
  },
  {
    title: "Outstation Trips",
    subtitle: "Make your grand entrance unforgettable!",
    description:
      "Safe and comfortable long-distance travel across South India with experienced drivers.",
    list: [
      "Flexible round trips",
      "Family-friendly travel",
      "Comfortable highway rides",
    ],
    icon: Car,
    image:
      "/gallery/taxi/Outstation.jpeg",
  },
  {
    title: "Pilgrim visiting",
    subtitle: "Safe, respectful journeys to holy places.",
    description:
      "Comfortable transport for pilgrimages across Kerala with flexible itineraries and experienced drivers.",
    icon: MapPinned,
    image:
      "/gallery/services/image001.jpeg",
  },
  {
    title: "24/7 Cab Service",
    subtitle: "Always available, anytime you need us.",
    description:
      "Round-the-clock cab service for urgent trips, late-night travel, and last-minute plans.",
    icon: Clock3,
    image:
      "/gallery/taxi/WhatsApp Image 2026-05-25 at 10.31.41 AM.jpeg",
  },
];

const contactItems = [
  {
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />,
    title: "Our Location",
    value: "Mundakayam, Kerala, India",
    link: "https://maps.google.com/?q=Mundakayam,Kerala"
  },
  {
    icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-black" />,
    title: "Phone Number",
    value: "+91 90488 55179",
    link: "tel:+919048855179"
  },
  {
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-black" />,
    title: "Email Address",
    value: "candacetravelempire@gmail.com",
    link: "mailto:candacetravelempire@gmail.com"
  },
  {
    icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />,
    title: "Instagram",
    value: "@candace_travel_empire",
    link: "https://www.instagram.com/candace_travel_empire"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white w-full bg-[#f5f5f5] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
<div className="text-center max-w-4xl mx-auto mb-14">
  <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-slate-900">
    Our Services
  </h2>

  <div className="mt-8 space-y-5">
    {/* Line 1 */}
    <div className="flex items-start justify-center gap-3 text-slate-600 text-sm md:text-base leading-7">
      <Sparkles className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

      <p>
        <span className="font-semibold text-slate-900">
          Premium journeys crafted with care.
        </span>{" "}
        From everyday city rides to luxury travel
        experiences, we deliver comfort, elegance, and
        reliability at every mile.
      </p>
    </div>

    {/* Line 2 */}
    <div className="flex items-start justify-center gap-3 text-slate-600 text-sm md:text-base leading-7">
      <Clock3 className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

      <p>
        Airport transfers, wedding arrivals, weekend
        escapes, and corporate travel — available whenever
        you need, day or night.
      </p>
    </div>
    {/* Line 3 */}
    <div className="flex items-start justify-center gap-3 text-slate-700 italic text-sm md:text-base leading-7">
      <Plane className="w-5 h-5 text-orange-500 mt-1 shrink-0" />

      <p>
        Your next journey starts here — travel smarter,
        safer, and more comfortably with us.
      </p>
    </div>
  </div>
</div>

          {/* Contact icons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 gap-y-4 mt-6 mb-6 items-center">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 hover:text-slate-900 justify-center sm:justify-start text-center sm:text-left p-1 sm:p-2"
              >
                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-sm">{item.icon}</span>
                <div className="leading-tight">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm">{item.title}</div>
                  <div
                    className="text-[10px] sm:text-xs text-slate-500 max-w-[110px] sm:max-w-[160px] truncate"
                    title={item.value}
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute bottom-3 left-3 h-10 w-10 rounded-full  backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 pt-5">
                  <h3 className="text-2xl text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-orange-500 font-medium text-sm leading-6">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-slate-500 text-sm leading-7">
                    {service.description}
                  </p>

                  {service.list && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {service.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <span className="text-orange-500 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button */}
                  <div className="mt-auto pt-6">
                    <a
                      href="https://api.whatsapp.com/send/?phone=919048855179&text=Hello%20%F0%9F%91%8B%20I%27m%20interested%20in%20booking%20a%20premium%20taxi.%20Could%20you%20please%20share%20the%20details%20and%20availability%3F&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center rounded-xl border border-slate-300 bg-orange-500 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:text-white"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}