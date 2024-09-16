/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xjjlxkwxzoblwerunoaq.supabase.co",
      },
    ],
    domains: ["img.clerk.com"],
  },
};

export default nextConfig;
