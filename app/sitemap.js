// Serves https://engineering.celestiagt.com/sitemap.xml
// Lists every indexable page so Google can discover them directly.
export default function sitemap() {
  const base = "https://engineering.celestiagt.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/products", priority: 0.9 },
    { path: "/quality", priority: 0.9 },
    { path: "/global-reach", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
