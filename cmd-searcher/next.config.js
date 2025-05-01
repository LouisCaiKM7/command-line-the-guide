/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Remove the base path
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig;