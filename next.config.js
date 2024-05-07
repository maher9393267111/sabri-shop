/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
    images: {
      domains: [
        "localhost",
        "res.cloudinary.com",
        "mir-s3-cdn-cf.behance.net",
        "firebasestorage.googleapis.com",
        "dr-nahas.vercel.app",
        "marketplace.canva.com",
        "www.hoponhopoffistanbul.com"
      ],
    },
    // typescript: {
    //   // !! WARN !!
    //   // Dangerously allow production builds to successfully complete even if
    //   // your project has type errors.
    //   // !! WARN !!
    //   ignoreBuildErrors: true,
    // },
  };
  
  module.exports = nextConfig;