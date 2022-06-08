/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
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
                basePath: false,
                permanent: true
            },
        ]
    },
}

module.exports = nextConfig

