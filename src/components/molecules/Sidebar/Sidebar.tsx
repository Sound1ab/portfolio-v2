import React from 'react'
import { styled } from '../../../theme'
import { StickyContainer, Heading } from '../../atoms'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

const Style = styled.div`
  position: relative;
  border-right: 2px solid grey;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid grey;
  }

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

interface ISidebarData {
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

const SidebarDocument = graphql`
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

export function Sidebar({ className = 'Sidebar' }: ISidebar) {
  const { site, placeholderImage } = useStaticQuery<ISidebarData>(
    SidebarDocument
  )

  return (
    <Style className={className}>
      <StickyContainer className="sidebar-sticky">
        <Link to="/">
          <Img
            className="sidebar-avatar"
            fixed={placeholderImage.childImageSharp.fixed}
          />
        </Link>
        <Heading type="h3" marginBottom>
          {site.siteMetadata.author}
        </Heading>
        <p>
          I am a full-stack (TypeScript) developer based in London, UK who is
          passionate about building scalable and robust applications.
        </p>
        <nav className="sidebar-nav">
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </StickyContainer>
    </Style>
  )
}
