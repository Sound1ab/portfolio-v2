import React from 'react'
import { styled } from '../../../theme'
import { StickyContainer, Heading, Icon } from '../../atoms'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

const Style = styled.div`
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary};
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

  .sidebar-copyright {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.secondary};
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
          ...GatsbyImageSharpFixed_tracedSVG
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
          <Icon icon="github" link="https://www.github.com/sound1ab" />
          <Icon icon="soundcloud" link="https://soundcloud.com/pointhope" />
        </nav>
        <span className="sidebar-copyright">
          © All rights reserved | {new Date().getFullYear()}
        </span>
      </StickyContainer>
    </Style>
  )
}
