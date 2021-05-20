module.exports = {
  siteMetadata: {
    title: `Tactical Consciousness`,
    description: `It's all an illusion. Everything. None of this is real. We are prisoners behind bars which we cannot see. But they are also an illusion. Step through.`,
    author: `[REDACTED]`,
    siteUrl: `https://tacticalconsciousness.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tacticalconsciousness.com',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
        output: '/robots.txt',
        sitemap: 'https://www.tacticalconsciousness.com/sitemap.xml'
      },
    },  
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tactical Consciousness`,
        short_name: `taccon`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/triangle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
