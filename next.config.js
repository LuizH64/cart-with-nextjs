/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
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

