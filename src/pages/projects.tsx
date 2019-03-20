import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from '../layouts'
import { CardList } from '../components/organism'

interface IProjectData {
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
  query Projects {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "project" } } }) {
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

function Projects() {
  const { allMarkdownRemark } = useStaticQuery<IProjectData>(AllContentDocument)
  return (
    <Layout>
      <CardList edges={allMarkdownRemark && allMarkdownRemark.edges} />
    </Layout>
  )
}

export default Projects
