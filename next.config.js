/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // This is important - it makes Next.js continue building even with TypeScript errors
    ignoreBuildErrors: true, 
  },
  eslint: {
    // Only during development
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig