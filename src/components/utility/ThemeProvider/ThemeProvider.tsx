import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'

interface ThemeProvider {
  children: any
}

export function ThemeProvider({ children }: ThemeProvider) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
