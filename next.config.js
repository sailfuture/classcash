/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify removed for Next.js 15 compatibility
  images: {
    unoptimized: true, // This helps with Netlify deployment
  }
};

module.exports = nextConfig;
