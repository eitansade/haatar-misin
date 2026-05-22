import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { categories } from "@/data/products";
import { seoLandingPages } from "@/data/seoPages";

const baseUrl = "https://haatar-misin.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/our-story", "/how-we-choose", "/why-it-matters", "/parents", "/faq", "/categories", "/contact", "/terms", "/articles", "/seo"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.75,
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...seoLandingPages.map((page) => ({
      url: `${baseUrl}/seo/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
