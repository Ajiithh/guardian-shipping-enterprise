import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.guardianshipping.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.guardianshipping.com/about-us",
      lastModified: new Date(),
    },
    {
      url: "https://www.guardianshipping.com/home-relocation",
      lastModified: new Date(),
    },
    {
      url: "https://www.guardianshipping.com/business-logistics",
      lastModified: new Date(),
    },
    {
      url: "https://www.guardianshipping.com/reviews",
      lastModified: new Date(),
    },
    {
      url: "https://www.guardianshipping.com/contact-us",
      lastModified: new Date(),
    },
  ];
}