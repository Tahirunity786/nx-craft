/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1', 'localhost'],
    },
    env: {
        NEXT_PUBLIC_SERVER_END_POINT: 'http://127.0.0.1:8000', // Adjust the endpoint as needed
    },
};

export default nextConfig;

