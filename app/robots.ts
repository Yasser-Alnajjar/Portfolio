import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: `${process.env.SITE_DOMAIN}/sitemap.xml`,
    host: process.env.SITE_DOMAIN,
  };
}
