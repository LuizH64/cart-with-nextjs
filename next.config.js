/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['codeby.vteximg.com.br'],
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cart/small',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig

