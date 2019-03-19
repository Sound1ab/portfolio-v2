import React from 'react'
import { styled } from '../../../theme'
import { StickyContainer, Heading } from '../../atoms'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

const Style = styled.div`
  position: relative;

  .sidebar-sticky {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.spacing.s};
  }

  .sidebar-avatar {
    margin-bottom: ${({ theme }) => theme.spacing.s};
    //clip-path: circle(100px at center);
  }

  .sidebar-nav > a {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`

interface IComponentData {
  site: {
    siteMetadata: {
      title: string
      author: string
      description: string
    }
  }
  placeholderImage: {
    childImageSharp: {
      fixed: FixedObject | undefined
    }
  }
}

interface ISidebar {
  className?: string
}

export function Sidebar({ className = 'Sidebar' }: ISidebar) {
  const { site, placeholderImage } = useStaticQuery<IComponentData>(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
        placeholderImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Style className={className}>
      <StickyContainer className="sidebar-sticky">
        <Img
          className="sidebar-avatar"
          fixed={placeholderImage.childImageSharp.fixed}
        />
        <Heading type="h3" marginBottom>
          {site.siteMetadata.author}
        </Heading>
        <p>
          I am a full-stack (TypeScript) developer based in London, UK who is
          passionate about building scalable and robust applications.
        </p>
        <nav className="sidebar-nav">
          <Link to="projects">Projects</Link>
          <Link to="projects">Articles</Link>
          <Link to="projects">About</Link>
          <Link to="projects">Contact</Link>
        </nav>
      </StickyContainer>
    </Style>
  )
}
