/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/command-line-the-guide',
  assetPrefix: '/command-line-the-guide/',
  trailingSlash: true,
};

module.exports = nextConfig;