import React from 'react'
import { styled } from '../../../theme'

const Style = styled.div`
  position: relative;

  .form-submit {
    padding: ${({ theme }) => theme.spacing.xs};
    border: 0;
    color: ${({ theme }) => theme.colors.input.secondaryText};
    background-color: ${({ theme }) => theme.colors.brand};
  }
`

interface IFormSubmit {
  isSubmitting: boolean
}

export function FormSubmit({ isSubmitting }: IFormSubmit) {
  return (
    <Style>
      <button className="form-submit" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Style>
  )
}
