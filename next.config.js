/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    hasuraUrl: process.env.HASURA_URL
  },
};

module.exports = nextConfig;
