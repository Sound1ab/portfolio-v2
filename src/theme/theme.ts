import Typography from './typography'

const rhythm = Typography.rhythm

export const theme = {
  colors: {
    brand: '#27348A',
    accent: '#73ffcd',
    error: '#ff6790',
    input: {
      background: '#eeedf8',
      primaryText: '#7a727c',
      secondaryText: '#fff1ff',
      errorText: '#ff6790',
    },
  },
  spacing: {
    xxl: rhythm(10),
    xl: rhythm(7),
    l: rhythm(4),
    m: rhythm(2),
    s: rhythm(1),
    xs: rhythm(0.5),
    xxs: rhythm(0.25),
  },
}
