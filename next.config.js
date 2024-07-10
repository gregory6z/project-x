/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-hcp.hurst.capital",
      },
    ],
  },
}

module.exports = nextConfig
