import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
       {
        protocol: 'http',
        hostname: '127.0.0.1.1',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
        // dangerouslyAllowSVG: false,

  },
 
}

export default nextConfig
