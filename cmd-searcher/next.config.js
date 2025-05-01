/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Make sure to update this to your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/command-line-the-guide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/command-line-the-guide/' : '',
}

module.exports = nextConfig