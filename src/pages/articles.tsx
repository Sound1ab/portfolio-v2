import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from '../layouts'
import { CardList } from '../components/organism'

interface IArticleData {
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
  const { allMarkdownRemark } = useStaticQuery<IArticleData>(AllContentDocument)
  return (
    <Layout>
      <CardList edges={allMarkdownRemark && allMarkdownRemark.edges} />
    </Layout>
  )
}

export default Articles
