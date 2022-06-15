/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  webpack(config) {
    config.resolve = {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/lib': path.resolve(__dirname, 'src/lib'),
        '@/layout': path.resolve(__dirname, 'src/layout'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/posts': path.resolve(__dirname, 'src/posts'),
        '@/public': path.resolve(__dirname, 'src/public'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
