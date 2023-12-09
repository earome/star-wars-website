/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.wikia.nocookie.net", "media.timeout.com"],
  },
};

module.exports = nextConfig;
