import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://samuel-gachuki.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //disallow: '/private/',
    },
    sitemap: baseURL + "sitemap.xml",
  };
}
