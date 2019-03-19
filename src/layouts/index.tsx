import React from 'react'
import { ThemeProvider, GlobalStyle } from '../components/utility'
import { Sidebar } from '../components/molecules'
import { Container } from '../components/atoms'
import { styled } from '../theme'

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

export const Layout = ({ children }: { children: any }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      <Style>
        <Container className="layout-page">
          <Sidebar className="layout-sidebar" />
          <main className="layout-main">{children}</main>
        </Container>
      </Style>
    </>
  </ThemeProvider>
)
