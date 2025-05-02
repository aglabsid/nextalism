import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    prisma: ['./src/prisma/client/**'],
  },
}

export default nextConfig
