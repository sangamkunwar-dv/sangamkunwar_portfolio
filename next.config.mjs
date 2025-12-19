/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint block removed as it is no longer supported here in Next.js 15/16
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig