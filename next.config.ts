import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/evgeniia-portfolio',
  trailingSlash: true,
}

export default nextConfig
