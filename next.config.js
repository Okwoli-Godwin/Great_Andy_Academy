/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable SWC compiler and minification
    swcMinify: false,
    compiler: {
      // Disable SWC completely
      styledComponents: false,
    },
  }
  
  module.exports = nextConfig