import React from 'react'
import { styled } from '../../../theme'

const Style = styled.div`
  position: relative;
`

interface IButton {
  dummyProp?: string
}

export function Button({ dummyProp = 'Button' }: IButton) {
  return <Style>{dummyProp}</Style>
}
