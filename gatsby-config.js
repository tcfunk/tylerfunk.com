const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: `https://tylerfunk.com`,
    title: "Tyler Funk"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, 'src', 'posts')
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, 'src', 'images')
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-plugin-purgecss",
    //   options: {
    //     printRejected: true,
    //     tailwind: true,
    //   }
    // },
    "gatsby-plugin-postcss"
  ],
};
