import React, { createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'
import { COLOR_MODE } from '../../../enums'

function loadColorMode() {
  const loadedColorMode = localStorage.getItem(
    LOCAL_STORAGE.KEY
  ) as COLOR_MODE | null
  return loadedColorMode ? loadedColorMode : COLOR_MODE.LIGHT
}

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
  const [colorMode, setColorMode] = useState(loadColorMode())

  const selectedTheme = {
    ...theme,
    colors: theme.colors[colorMode],
  }

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
