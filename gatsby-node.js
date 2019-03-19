
'use strict'

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
  query AllContent {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            layout
            slug
          }
        }
      }
    }
  }
`)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { id, frontmatter } = node

    createPage({
      path: `${frontmatter.layout}s/${frontmatter.slug}`,
      component: path.resolve(`./src/templates/${frontmatter.layout || 'page'}.tsx`),
      context: {
        id
      }
    })
  })
}