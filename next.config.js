/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      },
    },
    images: {
      domains: ['raw.githubusercontent.com', 'githubusercontent.com'],
    },
  };
  
  module.exports = nextConfig;