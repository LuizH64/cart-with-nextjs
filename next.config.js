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
                source: process.env.NEXT_PUBLIC_BASE_PATH || '/',
                destination: `${process.env.NEXT_PUBLIC_BASE_PATH}/cart/small`,
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig

