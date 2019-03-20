import React from 'react'
import { Card } from '../../molecules'

interface ICardList {
  edges?: {
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

export function CardList({ edges }: ICardList) {
  return (
    <>
      {edges
        ? edges.map(({ node }) => (
            <Card
              key={`${node.frontmatter.title}-${node.frontmatter.published}`}
              title={node.frontmatter.title}
              published={node.frontmatter.published}
              tags={node.frontmatter.tags}
              excert={node.excerpt}
              slug={`${node.frontmatter.layout}s/${node.frontmatter.slug}`}
            />
          ))
        : "Unfortunately I haven't made any content here yet"}
    </>
  )
}
