/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,  
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,  
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: ``, // Get this value in Bucket > Settings
        objectTypes: [`posts`],
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: ``, // Get this value in Bucket > Settings
        },
        localMedia: true, // Download media locally for gatsby image (optional)
        limit: 1000, // The number of Objects to fetch on each request (optional)
      }
    },
  ],
  siteMetadata: {
    title: 'Samson',
    description: 'Web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'thnquang.digistar.vn@gmail.com',
  }
}
