/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PIXELS_API_KEY: process.env.PIXELS_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cars.tatamotors.com",
      },
    ],
  },
};

module.exports = nextConfig;
