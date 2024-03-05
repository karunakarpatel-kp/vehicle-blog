import { BASE_URLS, SEO_OBJ } from "@/Essential";
import { MetadataRoute } from "next";

const sitemapURLOBJ: any = [];

function pullURLAndLastUpdatedTime(incomingObj: any) {
  Object.values(incomingObj).map((page: any) => {
    sitemapURLOBJ.push({ url: page.absoluteURL, lastUpdatedTime: page.lastUpdateTime });
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  pullURLAndLastUpdatedTime(SEO_OBJ);

  const sitemapObj = sitemapURLOBJ.map((singleSitemapURLObj: any) => {
    return {
      url: singleSitemapURLObj.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return sitemapObj;
}
