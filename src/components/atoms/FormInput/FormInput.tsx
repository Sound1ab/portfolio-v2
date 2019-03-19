import React from 'react'
import { styled } from '../../../theme'
import { Field, FieldProps } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Style = styled.div`
  position: relative;

  .form-input-wrapper {
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }

  .form-input {
    padding: ${({ theme }) => theme.spacing.xs};
    padding-left: ${({ theme }) => theme.spacing.m};
    border: 0;
    color: ${({ theme }) => theme.colors.input.primaryText};
    background-color: ${({ theme }) => theme.colors.input.background};
  }

  .form-svg-icon {
    margin-left: ${({ theme }) => theme.spacing.xs};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .form-input-error-message {
    position: absolute;
    left: 0;
    bottom: -${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.input.errorText};
    font-size: 12px;
  }
`

interface IFormField {
  icon: 'envelope' | 'user' | 'comment'
  name: string
  placeholder: string
}

export function FormInput({ icon, name, placeholder }: IFormField) {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => (
        <Style>
          <div className="form-input-wrapper">
            <FontAwesomeIcon icon={icon} size="xs" className="form-svg-icon" />
            <input
              className="form-input"
              type="text"
              {...field}
              placeholder={placeholder}
            />
          </div>
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
