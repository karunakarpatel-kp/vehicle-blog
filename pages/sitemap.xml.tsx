import React from "react";
import { SEO_OBJ } from "Essentials";

const Sitemap = () => {};

export const getServerSideProps = ({ res }: any) => {
  const siteData = Object.values(SEO_OBJ).map((page) => {
    return { url: page.absoluteURL, lastUpdatedTime: page.lastUpdateTime };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- We'll render the URLs for our sitemap here. -->
      ${siteData.map((singleSiteData) => {
        return `<url> <loc>${singleSiteData.url}</loc>
              <lastmod>${singleSiteData.lastUpdatedTime}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>`;
      })}
    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default Sitemap;
