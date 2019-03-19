import { Link } from 'gatsby'
import * as React from 'react'
import { styled } from '../../../theme'

const Test = styled('header')`
  background: rebeccapurple;
  margin-bottom: ${({ theme }) => theme.spacing.l};
`

export const Header = ({ siteTitle }: { siteTitle: any }) => (
  <Test>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  </Test>
)
