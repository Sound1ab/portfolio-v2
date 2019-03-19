import React from 'react'
import { Heading, FormInput, FormTextArea } from '../components/atoms'
import { Layout } from '../layouts'
import { Formik, FormikActions, FormikProps, Form } from 'formik'

enum FormValue {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

interface MyFormValues {
  [FormValue.NAME]: string
  [FormValue.EMAIL]: string
  [FormValue.MESSAGE]: string
}

function About() {
  const initialValues = {
    [FormValue.NAME]: '',
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
    if (!values[FormValue.NAME]) {
      errors[FormValue.NAME] = 'Required'
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
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <FormInput
              name={FormValue.NAME}
              placeholder={`${FormValue.NAME.charAt(
                0
              ).toUpperCase()}${FormValue.NAME.slice(1)}`}
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
          </Form>
        )}
      />
    </Layout>
  )
}

export default About
