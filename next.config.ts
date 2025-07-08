import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // or your config options
  eslint: {
    ignoreDuringBuilds: true, // not ideal daw for long term
  },
};

export default nextConfig;
