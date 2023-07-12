/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imageio.forbes.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lacounty.gov",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",

        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
