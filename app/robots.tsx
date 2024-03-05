import { BASE_URLS } from "@/Essential";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: BASE_URLS.HOME_PAGE_BASE_URL,
  };
}
