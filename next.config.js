/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: fix proxy & use it in app
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:4000/tickets', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
