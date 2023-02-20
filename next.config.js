/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  headers() {
    return [
      {
        source: '/',
        headers: [
          {
            // Cache for 1 second, but allow to send
            // cached responses for up to 1 week
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=604800'
          }
        ]
      }
    ];
  }
};
