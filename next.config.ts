import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // Send the vercel.app address and the bare domain to the canonical www host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "the90-s-club.vercel.app" }],
        destination: "https://www.the90sclub.in/:path*",
        permanent: true,
      },
      { source: "/contact", destination: "/visit", statusCode: 301 },
      { source: "/rooftop-pub", destination: "/#gallery", statusCode: 302 },
      { source: "/craft-beer", destination: "/menu", statusCode: 302 },
      { source: "/occasions", destination: "/#parties", statusCode: 302 },
      { source: "/about", destination: "/#story", statusCode: 302 },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
