import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/neighborhood', destination: '/guide', permanent: true },
    ];
  },
};

export default nextConfig;
