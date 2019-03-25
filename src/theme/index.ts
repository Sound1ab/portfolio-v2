import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { theme } from './theme'
import { COLOR_MODE } from '../enums'

export type Theme = {
  colors: typeof theme.colors[COLOR_MODE.DARK]
  spacing: typeof theme.spacing
}
export const styled = baseStyled as ThemedStyledInterface<Theme>
