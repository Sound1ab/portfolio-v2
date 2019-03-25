import React, { createContext, useLayoutEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'
import { COLOR_MODE } from '../../../enums'

const DEFAULT_COLOR_MODE = COLOR_MODE.DARK

enum LOCAL_STORAGE {
  KEY = 'phillip_parker_portfolio::color_mode',
}

export const ColorModeContext = createContext<{
  colorMode: COLOR_MODE
  setColorMode: (newColorMode: COLOR_MODE) => void
}>(null as any)

interface ThemeProvider {
  children: any
}

export function ThemeProvider({ children }: ThemeProvider) {
  const [colorMode, setColorMode] = useState(DEFAULT_COLOR_MODE)
  const selectedTheme = {
    ...theme,
    colors: theme.colors[colorMode],
  }

  useLayoutEffect(() => {
    const loadedColorMode = localStorage.getItem(
      LOCAL_STORAGE.KEY
    ) as COLOR_MODE | null
    if (!loadedColorMode) {
      return
    }
    setColorMode(loadedColorMode)
  }, [])

  function handleSetColorMode(newColorMode: COLOR_MODE) {
    localStorage.setItem(LOCAL_STORAGE.KEY, newColorMode)
    setColorMode(newColorMode)
  }

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <ColorModeContext.Provider
        value={{ colorMode, setColorMode: handleSetColorMode }}
      >
        {children}
      </ColorModeContext.Provider>
    </StyledThemeProvider>
  )
}
