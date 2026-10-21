/** Absolute origin for canonicals, sitemap, and JSON-LD. */
export const PRODUCTION_URL = "https://www.the90sclub.in";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  // Production always answers on the client domain, whatever host Vercel reports.
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;

  if (process.env.VERCEL) {
    if (process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return PRODUCTION_URL;
  }

  return "http://127.0.0.1:3847";
}
