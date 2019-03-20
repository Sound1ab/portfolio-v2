import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../layouts'
import { SEO } from '../components/utility'

interface IArticleTemplate {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        keywords: string
      }
    }
  }
}

function ArticleTemplate({ data }: IArticleTemplate) {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
