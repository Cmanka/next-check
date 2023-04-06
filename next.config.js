const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  env: { NEWS_API_KEY: process.env.NEWS_API_KEY, NEWS_API_URL: process.env.NEWS_API_URL },
  devIndicators: {
    buildActivity: false,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n,
  ...nextConfig,
};
