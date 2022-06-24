/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.resolve(__dirname, 'src/styles'),
      path.resolve(__dirname, 'src/components'),
    ],
  },
  env: {
    REST_URL_SERVER: process.env.REST_URL_SERVER,
  },
  webpack(config) {
    config.resolve = {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/libs': path.resolve(__dirname, 'src/libs'),
        '@/layout': path.resolve(__dirname, 'src/layout'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/posts': path.resolve(__dirname, 'src/posts'),
        '@/public': path.resolve(__dirname, 'src/public'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
        '@/services': path.resolve(__dirname, 'src/services'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
