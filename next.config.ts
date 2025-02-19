import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'cdn.prod.website-files.com' }],
  },
}

export default nextConfig
