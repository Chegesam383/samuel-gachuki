import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://samuel-gachuki.vercel.app";
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      //   priority: 1,
      // changeFrequency: "weekly",
    },
  ];
}
