/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://comma-web-site.vercel.app",
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
