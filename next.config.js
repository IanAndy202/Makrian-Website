const isGithubPages = process.env.GITHUB_PAGES === 'true';
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
