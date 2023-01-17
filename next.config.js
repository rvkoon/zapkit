/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    localeDetection: true,
  },
  env: {
    API_URL_DEVELOPMENT: process.env.API_URL_DEVELOPMENT,
  },
};

module.exports = nextConfig;
