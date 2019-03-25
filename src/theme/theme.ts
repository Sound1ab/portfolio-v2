import Typography from './typography'
import { COLOR_MODE } from '../enums'

const rhythm = Typography.rhythm

export const theme = {
  colors: {
    [COLOR_MODE.LIGHT]: {
      background: '#ffffff',
      brand: '#27348A',
      accent: '#ca3f96',
      error: '#ff6790',
      input: {
        background: '#eeedf8',
        primaryText: '#7a727c',
        secondaryText: '#fff1ff',
        errorText: '#ff6790',
      },
      link: {
        visited: '#000000',
        unvisited: '#000000',
      },
      text: {
        primary: 'hsla(0,0%,0%,0.7)',
        secondary: '#858585',
      },
    },
    [COLOR_MODE.DARK]: {
      background: '#0d001e',
      brand: '#4555f9',
      accent: '#ca3f96',
      error: '#ff6790',
      input: {
        background: '#260057',
        primaryText: '#ece0ee',
        secondaryText: '#fff1ff',
        errorText: '#ff6790',
      },
      link: {
        visited: '#ffffff',
        unvisited: '#ffffff',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
      },
    },
  },
  spacing: {
    xxl: rhythm(10),
    xl: rhythm(7),
    l: rhythm(3),
    m: rhythm(1.5),
    s: rhythm(1),
    xs: rhythm(0.5),
    xxs: rhythm(0.25),
  },
}
