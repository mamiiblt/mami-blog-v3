import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,

      fs: false,
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL,
  },
};

export default nextConfig;
