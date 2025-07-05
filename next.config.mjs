/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "157.230.240.97",
        port: "9999",
        pathname: "**", // সব path অ্যালাও করবে
      },
    ],
  },
};

export default nextConfig;
