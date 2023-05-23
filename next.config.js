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
    prependData: `@import 'styles/media.scss'; @import 'styles/theme.scss';`,
  },
  env: {
    REST_URL_SERVER: 'https://api.aribomy.com',
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
        '@/data': path.resolve(__dirname, 'src/data'),
        '@/context': path.resolve(__dirname, 'src/context'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://api.aribomy.com',
          }, // 서버 출처 설정
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          }, // 허용할 HTTP 메서드 설정
          { key: 'Access-Control-Allow-Credentials', value: 'true' }, // 인증 정보 허용 여부 설정
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' https://api.aribomy.com 'unsafe-inline'; " +
              "connect-src 'self' https://api.aribomy.com 'unsafe-inline'; img-src * data:; font-src 'self' https://fonts.gstatic.com; script-src-elem 'self' https://accounts.google.com/gsi/client https://accounts.google.com/gsi/client;",
          },
        ],
      },
    ];
  },
};
