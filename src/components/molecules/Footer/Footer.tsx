import React from 'react'
import { styled } from '../../../theme'

const Style = styled.footer`
  position: relative;
`

export function Footer() {
  return (
    <Style>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Style>
  )
}
