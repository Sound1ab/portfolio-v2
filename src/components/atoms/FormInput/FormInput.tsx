import React from 'react'
import { styled } from '../../../theme'
import { Field, FieldProps } from 'formik'

const Style = styled.div`
  position: relative;

  .form-input {
    padding: ${({ theme }) => theme.spacing.xs};
    border: 0;
    color: ${({ theme }) => theme.colors.input.primaryText};
    background-color: ${({ theme }) => theme.colors.input.background};
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }

  .form-input-error-message {
    position: absolute;
    left: 0;
    bottom: ${({ theme }) => theme.spacing.xxs};
    color: ${({ theme }) => theme.colors.input.errorText};
    font-size: 12px;
  }
`

interface IFormField {
  name: string
  placeholder: string
}

export function FormInput({ name, placeholder }: IFormField) {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => (
        <Style>
          <input
            className="form-input"
            type="text"
            {...field}
            placeholder={placeholder}
          />
          {form.touched[name] && form.errors[name] && (
            <span className="form-input-error-message">
              {form.errors[name]}
            </span>
          )}
        </Style>
      )}
    />
  )
}
