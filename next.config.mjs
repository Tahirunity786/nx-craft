/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1', 'localhost', 'https://nx-craft.vercel.app'],
    },
    env: {

        NEXT_PUBLIC_SERVER_END_POINT: 'https://sitif62914q.pythonanywhere.com/' 
    },
};

export default nextConfig;

