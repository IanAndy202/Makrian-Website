/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Add this line
  images: {
    unoptimized: true, // ✅ REQUIRED for <Image> to work in static export
  },
};

export default nextConfig;
