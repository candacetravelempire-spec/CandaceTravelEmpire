import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Candace Travel Empire | Premium Taxi & Airport Transfer Kerala",
  description: "Premium and affordable taxi rental, airport transfer and travel services in Kerala. Reliable cab booking, tourist trips, airport pickup and drop services from Mundakayam, Idukki and Kottayam.",
  keywords: [
    "cheap taxi Mundakayam",
    "affordable taxi Kerala",
    "best taxi Mundakayam",
    "Mundakayam cabs",
    "Kerala taxi service",
    "Idukki taxi",
    "Kottayam taxi",
    "airport transfer Kerala",
    "rented day cars",
    "rental day car Kerala",
    "travel agency Kerala",
    "traveler services Kerala",
    "bride and groom premium cars",
    "wedding car hire Mundakayam",
    "BMW taxi",
    "Audi taxi",
    "premium cars Kerala",
    "cab booking Kerala",
    "tourist taxi Kerala",
    "solo travelers Kerala",
    "family travelers Mundakayam",
    "family trips Kerala",
    "couples travel Kerala",
    "honeymooners Kerala",
    "business travelers Kerala",
    "corporate transfers Kerala",
    "group travelers Kerala",
    "tour groups Kerala",
    "backpackers Kerala",
    "senior travelers Kerala",
    "elderly friendly taxi",
    "student travel Kerala",
    "pilgrimage taxi Kerala",
    "medical tourists Kerala",
    "holidaymakers Kerala",
    "adventure travelers Kerala",
    "international travelers Kerala",
    "domestic travelers Kerala"
  ],
  authors: [{ name: "Candace Travel Empire" }],
  openGraph: {
    title: "Candace Travel Empire | Premium Taxi & Airport Transfer Kerala",
    description: "Experience luxury travel in Kerala with Candace Travel Empire.",
    url: "https://candacetravelempire.com",
    siteName: "Candace Travel Empire",
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 630,
        alt: "Candace Travel Empire",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
