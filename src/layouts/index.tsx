import React from 'react'
import { ThemeProvider, GlobalStyle } from '../components/utility'
import { Sidebar, ColorModeButton } from '../components/molecules'
import { Container } from '../components/atoms'
import { styled } from '../theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faUser,
  faComment,
  faPenSquare,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub as any,
  faSoundcloud as any,
  faEnvelope,
  faUser,
  faMoon,
  faComment,
  faPenSquare
)

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout-page {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .layout-sidebar {
    flex: 0 0 300px;
  }

  .layout-main {
    display: flex;
    flex-direction: column;
    flex: 2;
    position: relative;
    padding: ${({ theme }) => theme.spacing.s};
    min-width: 0;
  }
`

export function Layout({ children }: { children: any }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Style>
        <Container className="layout-page">
          <Sidebar className="layout-sidebar" />
          <main className="layout-main">{children}</main>
        </Container>
        <ColorModeButton />
      </Style>
    </ThemeProvider>
  )
}
