import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Heading } from '../components/atoms'
import { Card } from '../components/molecules'
import { Layout } from '../layouts'

interface IAllContent {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          published: string
          tags: string
          slug: string
        }
      }
    }[]
  }
}

const AllContentDocument = graphql`
  query AllContent {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            published
            tags
          }
        }
      }
    }
  }
`

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery<IAllContent>(AllContentDocument)
  return (
    <Layout>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Card
          title={node.frontmatter.title}
          published={node.frontmatter.published}
          tags={node.frontmatter.tags}
          excert={node.excerpt}
          slug={node.frontmatter.slug}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
