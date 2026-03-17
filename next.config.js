/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source:
          '/:path((?!feed\\.xml|sitemap\\.xml|_next|api|favicon\\.ico|leroyclarkejr\\.jpg|manifest\\.json|robots\\.txt).+)',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
