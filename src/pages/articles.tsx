import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Card } from '../components/molecules'
import { Layout } from '../layouts'

interface IArticles {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          published: string
          tags: string
          slug: string
          layout: string
        }
      }
    }[]
  }
}

const AllContentDocument = graphql`
  query Articles {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "article" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            published
            tags
            slug
            layout
          }
        }
      }
    }
  }
`

function Articles() {
  const { allMarkdownRemark } = useStaticQuery<IArticles>(AllContentDocument)
  return (
    <Layout>
      {allMarkdownRemark
        ? allMarkdownRemark.edges.map(({ node }) => (
            <Card
              title={node.frontmatter.title}
              published={node.frontmatter.published}
              tags={node.frontmatter.tags}
              excert={node.excerpt}
              slug={`${node.frontmatter.layout}s/${node.frontmatter.slug}`}
            />
          ))
        : "Unfortunately I haven't made any content here yet"}
      {}
    </Layout>
  )
}

export default Articles
