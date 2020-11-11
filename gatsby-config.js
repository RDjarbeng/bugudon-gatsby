/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'data',
        path: `${__dirname}/src/content`,
        plugins: [`gatsby-plugin-json-remark`]
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-json-remark`,
      options: {
        paths: [
          `${__dirname}/src`,
        ], // Process all JSON files in these directories.
        fieldNameBlacklist: [
          "id",
          "children",
          "parent",
          "fields",
          "internal",
          "path",
          "template",
        ],
      },
    },
  ],
}