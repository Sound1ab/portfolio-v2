import React from 'react'
import { styled } from '../../../theme'
import { Heading } from '../../atoms'
import { Link } from 'gatsby'

const Style = styled.div`
  position: relative;
  background-color: white;

  .card-tags {
    color: ${({ theme }) => theme.colors.accent};
  }
`

interface ICard {
  title: string
  published: string
  tags: string
  excert: string
  slug: string
}

export function Card({ title, excert, published, tags, slug }: ICard) {
  return (
    <Style>
      <Heading type="h4" textTransform="uppercase" marginBottom>
        {published} <span className="card-tags">{tags}</span>
      </Heading>
      <Heading type="h2" marginBottom>
        {title}
      </Heading>
      <p>{excert}</p>
      <Link to={slug}>Read</Link>
    </Style>
  )
}
