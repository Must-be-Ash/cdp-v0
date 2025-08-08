/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure prompts directory is included in build
  experimental: {
    outputFileTracingIncludes: {
      '/api/prompts/[filename]': ['./prompts/**/*'],
    },
  },
}

export default nextConfig