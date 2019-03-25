import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../../../theme/theme'
import { COLOR_MODE } from '../../../enums'

const DEFAULT_COLOR_MODE = COLOR_MODE.LIGHT

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

function useColorModeFromLocalStorage(): [
  COLOR_MODE,
  Dispatch<SetStateAction<COLOR_MODE>>,
  boolean
] {
  const [colorMode, setColorMode] = useState(DEFAULT_COLOR_MODE)
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    const loadedColorMode = localStorage.getItem(
      LOCAL_STORAGE.KEY
    ) as COLOR_MODE | null
    if (!loadedColorMode) {
      return
    }
    setColorMode(loadedColorMode)
    setLoading(false)
  }, [colorMode])

  return [colorMode, setColorMode, loading]
}

export function ThemeProvider({ children }: ThemeProvider) {
  const [colorMode, setColorMode, loading] = useColorModeFromLocalStorage()
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
        {!loading && children}
      </ColorModeContext.Provider>
    </StyledThemeProvider>
  )
}
