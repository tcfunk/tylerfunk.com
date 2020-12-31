const path = require('path')

exports.createPages = async({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = require.resolve(`./src/templates/postTemplate.js`);

  const result = await graphql(`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
  }

  result.data.allMarkdownRemark.nodes.map((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
      },
    })
  })
}