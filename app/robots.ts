import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        crawlDelay: 1,
      },
      // Block AI training bots
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: "https://aviralpathak.vercel.app/sitemap.xml",
  }
}
