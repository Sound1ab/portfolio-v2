import React from 'react'
import { styled } from '../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Style = styled.a`
  position: relative;
  border: 1px solid;
  display: inline-block !important;
  padding: 20px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.xs};

  .icon-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

interface IIcon {
  link?: string
  icon: 'github' | 'soundcloud'
}

export function Icon({ link = '#', icon }: IIcon) {
  return (
    <Style href={link} rel="noopener" target="_blank">
      <FontAwesomeIcon icon={['fab', icon]} size="xs" className="icon-svg" />
    </Style>
  )
}
