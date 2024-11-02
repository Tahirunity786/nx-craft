/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1', 'localhost', 'https://nx-craft.vercel.app'],
    },
    env: {
<<<<<<< HEAD
        NEXT_PUBLIC_SERVER_END_POINT: 'http://127.0.0.1:8000', // Adjust the endpoint as needed
=======
        NEXT_PUBLIC_SERVER_END_POINT: 'https://sitif62914q.pythonanywhere.com/' // Adjust the endpoint as needed
>>>>>>> 117b762d19b1e28dd5d793b2d9a7b8943ee9f1e8
    },
};

export default nextConfig;

