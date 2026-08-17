// Serves https://engineering.celestiagt.com/robots.txt
// Allows all crawlers, blocks the API route, and points to the sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://engineering.celestiagt.com/sitemap.xml",
    host: "https://engineering.celestiagt.com",
  };
}
