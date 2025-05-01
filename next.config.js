/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/command-line-the-guide', // Remove the base path
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig;