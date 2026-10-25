
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/personal-portfolio-website",

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;
