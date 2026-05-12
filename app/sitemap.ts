import type { MetadataRoute } from "next"
import { getAllLocalizedRoutes, getCanonicalCoreRoutes } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const canonicalRoutes = getCanonicalCoreRoutes().map(({ url, pageKey }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: pageKey === "home" ? ("weekly" as const) : ("monthly" as const),
    priority: pageKey === "home" ? 1 : 0.9,
  }))

  const localizedRoutes = getAllLocalizedRoutes().map(({ url, pageKey, locale }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: pageKey === "home" ? ("weekly" as const) : ("monthly" as const),
    priority: locale === "en" ? 0.6 : pageKey === "home" ? 0.8 : 0.5,
  }))

  const routesByUrl = new Map<string, MetadataRoute.Sitemap[number]>()
  for (const route of [...localizedRoutes, ...canonicalRoutes]) {
    routesByUrl.set(route.url, route)
  }

  return Array.from(routesByUrl.values())
}
