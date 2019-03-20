import Typography from './typography'

const rhythm = Typography.rhythm

export const theme = {
  colors: {
    brand: '#27348A',
    accent: '#c7ca6e',
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
