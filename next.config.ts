import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    let baseURL = process.env.NEXT_PUBLIC_API_URL || "http://example.com"; // Back-end API address
    return [
      { 
        source: '/api/:path*',
        destination: `${baseURL}/api/:path*`, // Proxy to the back-end API
      },
    ]
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/dashboard',
        destination: '/dashboard/books',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
