/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 configuration
  // App Router is the default
  // React strict mode is enabled by default
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "njwagbcbljfyqapntvcf.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
