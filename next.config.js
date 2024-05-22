/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
    async rewrites() {
        return [
            {
                source : '/',
                destination : '/index.html'
            }
        ]
    }
}

module.exports = nextConfig
