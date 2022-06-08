/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/cart-with-nextjs',
    assetPrefix: '/cart-with-nextjs',
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/cart-with-nextjs/cart/small',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig

