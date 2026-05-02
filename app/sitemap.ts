import type { MetadataRoute } from "next"
import { getAllLocalizedRoutes } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllLocalizedRoutes().map(({ url, pageKey }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: pageKey === "home" ? "weekly" : "monthly",
    priority: pageKey === "home" ? 1 : pageKey === "solutions" ? 0.9 : 0.7,
  }))
}
