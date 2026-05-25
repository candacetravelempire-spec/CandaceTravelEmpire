// components/ServicesSection.tsx

import {
  Car,
  CarFront,
  MapPinned,
  Heart,
  Sparkles,
  Clock3,
  Plane
} from "lucide-react";

const services = [
  {
    title: "Taxi Services",
    subtitle: "Skip the wait — your ride is ready when you are!",
    description:
      "Lightning-fast pickups, smooth rides, and drivers who know every shortcut in town!",
    icon: CarFront,
    image:
      "/gallery/services/image001.jpeg",
  },
  {
    title: "Rent a Car",
    subtitle: "Your wheels, your way — freedom starts here!",
    description:
      "From zippy hatchbacks to luxury SUVs - pick your perfect ride and hit the road in style!",
    icon: Car,
    image:
      "/gallery/services/image002.jpeg",
  },
  {
    title: "Tour Packages",
    subtitle: "Pack your bags — the world is waiting!",
    description:
      "Adventure awaits! Let us craft unforgettable journeys tailored just for you.",
    list: [
      "Romantic Honeymoon Escapes",
      "Epic College & School Adventures",
      "Fun-Filled Family Getaways",
      "Sacred Pilgrimage Journeys",
    ],
    icon: MapPinned,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Wedding Car Rentals",
    subtitle: "Make your grand entrance unforgettable!",
    description:
      "Arrive like royalty! Stunning luxury cars that make your fairy tale wedding even more magical.",
    list: [
      "For Groom",
      "For Bride",
      "For Passengers",
    ],
    icon: Heart,
    image:
      "/gallery/services/1779632687099.jpg",
  },
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