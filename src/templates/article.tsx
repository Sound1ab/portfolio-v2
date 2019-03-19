import * as React from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/molecules'
import { Layout } from '../layouts'

interface PageTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
