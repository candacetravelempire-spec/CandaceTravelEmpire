import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['10.235.90.23'],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
