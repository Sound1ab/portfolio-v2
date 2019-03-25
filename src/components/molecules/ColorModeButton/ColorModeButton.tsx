import React, { useContext } from 'react'
import { styled } from '../../../theme'
import { ColorModeContext } from '../../utility'
import { COLOR_MODE } from '../../../enums'
import { Icon } from '../../atoms'

const Style = styled.div<{ colorMode: COLOR_MODE }>`
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  color: ${({ theme, colorMode }) =>
    colorMode === COLOR_MODE.DARK
      ? theme.colors.accent
      : theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.xs};
`

export function ColorModeButton() {
  const context = useContext(ColorModeContext)
  const oppositeColorMode =
    context.colorMode === COLOR_MODE.LIGHT ? COLOR_MODE.DARK : COLOR_MODE.LIGHT
  return (
    <Style
      onClick={context.setColorMode.bind(null, oppositeColorMode)}
      colorMode={context.colorMode}
    >
      <Icon icon="moon" />
    </Style>
  )
}
