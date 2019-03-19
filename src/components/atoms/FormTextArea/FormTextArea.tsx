import React from 'react'
import { styled } from '../../../theme'
import { Field, FieldProps } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Style = styled.div`
  position: relative;

  .form-textarea-wrapper {
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }

  .form-textarea {
    padding: ${({ theme }) => theme.spacing.xs};
    padding-left: ${({ theme }) => theme.spacing.m};
    border: 0;
    color: ${({ theme }) => theme.colors.input.primaryText};
    background-color: ${({ theme }) => theme.colors.input.background};
    margin-bottom: ${({ theme }) => theme.spacing.s};
    width: 100%;
    height: ${({ theme }) => theme.spacing.xxl};
  }

  .form-svg-icon {
    margin-left: ${({ theme }) => theme.spacing.xs};
    position: absolute;
    top: 6%;
  }

  .form-textarea-error-message {
    position: absolute;
    left: 0;
    bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.input.errorText};
    font-size: 12px;
  }
`

interface IFormField {
  icon: 'envelope' | 'user' | 'comment'
  name: string
  placeholder: string
}

export function FormTextArea({ icon, name, placeholder }: IFormField) {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => (
        <Style>
          <div className="form-textarea-wrapper">
            <FontAwesomeIcon icon={icon} size="xs" className="form-svg-icon" />
            <textarea
              className="form-textarea"
              {...field}
              placeholder={placeholder}
            />
          </div>
          {form.touched[name] && form.errors[name] && (
            <span className="form-textarea-error-message">
              {form.errors[name]}
            </span>
          )}
        </Style>
      )}
    />
  )
}
