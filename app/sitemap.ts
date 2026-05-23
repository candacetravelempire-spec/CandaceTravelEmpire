import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
