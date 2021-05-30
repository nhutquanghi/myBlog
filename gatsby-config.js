/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,  
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Samson',
    description: 'Web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'thnquang.digistar.vn@gmail.com',
  }
}
