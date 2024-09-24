/** @type {import('next').NextConfig} */
// module.exports= {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'gregarious-dragon-958.convex.cloud',
//                 port: '',
//                 pathname: '/api/storage/**',
//             },
//         ]
//     }
// }
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'energized-crocodile-497.convex.cloud',
            port: '',
            pathname: '/api/storage/**',
            },
        ]
    }
};

export default nextConfig;
