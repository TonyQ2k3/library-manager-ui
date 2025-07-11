import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    let baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'; // Back-end API address
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
      },
      // Wildcard path matching
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
