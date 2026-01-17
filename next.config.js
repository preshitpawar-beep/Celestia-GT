/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for larger file uploads (50MB)
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

module.exports = nextConfig;
