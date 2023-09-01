/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codewars.com',
        port: '',
        pathname: '/users/NiklausRupail/badges/large'
      }
    ]
  }
};

module.exports = nextConfig;
