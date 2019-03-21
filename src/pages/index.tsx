import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { CardList } from '../components/organism'
import { Layout } from '../layouts'

interface IAllContentData {
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
  query AllContent {
    allMarkdownRemark(sort: { fields: frontmatter___sort, order: DESC }) {
      edges {
        node {
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

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery<IAllContentData>(
    AllContentDocument
  )
  return (
    <Layout>
      <CardList edges={allMarkdownRemark && allMarkdownRemark.edges} />
    </Layout>
  )
}

export default IndexPage
