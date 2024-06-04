/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

/*
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'smuknu.webmcdm.dk',
				port: '',
				pathname: '/**',
			},
		],
	},
};

*/

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            }
        ],
    }
}
