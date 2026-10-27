import type { NextConfig } from "next";
import { marketingRedirects } from "./lib/site-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return marketingRedirects();
  },
  async headers() {
    return [
      {
        source: "/levytate-sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
