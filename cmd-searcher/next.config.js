/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Make sure to update this to your GitHub repository name
  basePath: '/command-line-the-guide',
  assetPrefix: '/command-line-the-guide/',
}

module.exports = nextConfig