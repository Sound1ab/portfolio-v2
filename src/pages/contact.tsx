import React from 'react'
import {
  Heading,
  FormInput,
  FormTextArea,
  FormSubmit,
} from '../components/atoms'
import { Layout } from '../layouts'
import { Formik, FormikActions, Form } from 'formik'

enum FormValue {
  FIRST_NAME = 'firstName',
  SECOND_NAME = 'secondName',
  EMAIL = 'email',
  MESSAGE = 'message',
}

interface MyFormValues {
  [FormValue.FIRST_NAME]: string
  [FormValue.SECOND_NAME]: string
  [FormValue.EMAIL]: string
  [FormValue.MESSAGE]: string
}

function About() {
  const initialValues = {
    [FormValue.FIRST_NAME]: '',
    [FormValue.SECOND_NAME]: '',
    [FormValue.EMAIL]: '',
    [FormValue.MESSAGE]: '',
  }

  function onSubmit(
    values: MyFormValues,
    actions: FormikActions<MyFormValues>
  ) {
    console.log({ values, actions })
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  function validate(values: MyFormValues) {
    let errors: { [key: string]: string } = {}
    if (!values[FormValue.FIRST_NAME]) {
      errors[FormValue.FIRST_NAME] = 'Required'
    } else if (!values[FormValue.SECOND_NAME]) {
      errors[FormValue.SECOND_NAME] = 'Required'
    } else if (!values[FormValue.EMAIL]) {
      errors[FormValue.EMAIL] = 'Required'
    } else if (!values[FormValue.MESSAGE]) {
      errors[FormValue.MESSAGE] = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[FormValue.EMAIL])
    ) {
      errors[FormValue.EMAIL] = 'Invalid email address'
    }
    return errors
  }

  return (
    <Layout>
      <Heading type="h1" marginBottom>
        Contact
      </Heading>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInput
              name={FormValue.FIRST_NAME}
              placeholder={`${FormValue.FIRST_NAME.charAt(
                0
              ).toUpperCase()}${FormValue.FIRST_NAME.slice(1)}`}
            />
            <FormInput
              name={FormValue.SECOND_NAME}
              placeholder={`${FormValue.SECOND_NAME.charAt(
                0
              ).toUpperCase()}${FormValue.SECOND_NAME.slice(1)}`}
            />
            <FormInput
              name={FormValue.EMAIL}
              placeholder={`${FormValue.EMAIL.charAt(
                0
              ).toUpperCase()}${FormValue.EMAIL.slice(1)}`}
            />
            <FormTextArea
              name={FormValue.MESSAGE}
              placeholder={`${FormValue.MESSAGE.charAt(
                0
              ).toUpperCase()}${FormValue.MESSAGE.slice(1)}`}
            />
            <FormSubmit isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default About
