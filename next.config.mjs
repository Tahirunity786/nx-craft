/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1', 'localhost', 'https://nxcraft.com'],
    },
    env: {

        // NEXT_PUBLIC_SERVER_END_POINT: 'https://sitif62914q.pythonanywhere.com/' 
        NEXT_PUBLIC_SERVER_END_POINT: process.env.NEXT_PUBLIC_SERVER_END_POINT
    },
};

export default nextConfig;

