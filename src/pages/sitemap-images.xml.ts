import type { APIRoute } from "astro";
import { products } from "../data/products";
import { site } from "../data/site";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = () => {
  const urls = products
    .map((product) => {
      const pageUrl = new URL(`/producto/${product.slug}/`, site.url).href;
      const imageUrl = new URL(product.image, site.url).href;

      return [
        "<url>",
        `<loc>${pageUrl}</loc>`,
        "<image:image>",
        `<image:loc>${imageUrl}</image:loc>`,
        `<image:title>${escapeXml(product.name)}</image:title>`,
        `<image:caption>${escapeXml(product.description)}</image:caption>`,
        "</image:image>",
        "</url>",
      ].join("");
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
