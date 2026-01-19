import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // next.config.js
  // optimizeCss: false,
  // enableBabelRuntime: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/devicons/devicon/master/**',
      },
      {
        protocol: "http",
        hostname: "spring.io"
      },
      {
        protocol: "https",
        hostname: "cms-interlink.onrender.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "192.168.1.55",
      },
      {
        protocol: "https",
        hostname: "priv-web-nomeo-prod.apnl.ws", // Added this line
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", // Added this line
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Added this line
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nomeo.fr", // Added this line
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
