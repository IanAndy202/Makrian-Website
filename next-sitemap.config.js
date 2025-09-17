/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://makrian.com',
  // GitHub Pages exports to /dist, so write files there:
  outDir: 'dist',
  generateRobotsTxt: true,          // creates robots.txt automatically
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    // Set priorities per route if you like
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (['/about', '/services', '/contact', '/offices'].includes(path)) priority = 0.8;

    return {
      loc: path,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },

  // Example for future dynamic pages (e.g., offices detail pages):
  // additionalPaths: async (config) => {
  //   const officeSlugs = ['nairobi', 'cape-town']; // fetch from a file/API if you have one
  //   return officeSlugs.map(slug => ({ loc: `/offices/${slug}`, priority: 0.7 }));
  // },
};
