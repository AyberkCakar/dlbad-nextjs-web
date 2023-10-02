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
};

module.exports = nextConfig;
