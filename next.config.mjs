/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger serves the generated static files directly.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
