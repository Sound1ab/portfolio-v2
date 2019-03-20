import React from 'react'
import {
  Heading,
  FormInput,
  FormTextArea,
  FormSubmit,
} from '../components/atoms'
import { Layout } from '../layouts'
import { Formik, FormikActions, Form } from 'formik'

enum FORM_VALUE {
  FIRST_NAME = 'firstName',
  SECOND_NAME = 'secondName',
  EMAIL = 'email',
  MESSAGE = 'message',
}

interface MyFORM_VALUEs {
  [FORM_VALUE.FIRST_NAME]: string
  [FORM_VALUE.SECOND_NAME]: string
  [FORM_VALUE.EMAIL]: string
  [FORM_VALUE.MESSAGE]: string
}

function About() {
  const initialValues = {
    [FORM_VALUE.FIRST_NAME]: '',
    [FORM_VALUE.SECOND_NAME]: '',
    [FORM_VALUE.EMAIL]: '',
    [FORM_VALUE.MESSAGE]: '',
  }

  function onSubmit(
    values: MyFORM_VALUEs,
    actions: FormikActions<MyFORM_VALUEs>
  ) {
    console.log({ values, actions })
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  function validate(values: MyFORM_VALUEs) {
    let errors: { [key: string]: string } = {}
    if (!values[FORM_VALUE.FIRST_NAME]) {
      errors[FORM_VALUE.FIRST_NAME] = 'Required'
    } else if (!values[FORM_VALUE.SECOND_NAME]) {
      errors[FORM_VALUE.SECOND_NAME] = 'Required'
    } else if (!values[FORM_VALUE.EMAIL]) {
      errors[FORM_VALUE.EMAIL] = 'Required'
    } else if (!values[FORM_VALUE.MESSAGE]) {
      errors[FORM_VALUE.MESSAGE] = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[FORM_VALUE.EMAIL])
    ) {
      errors[FORM_VALUE.EMAIL] = 'Invalid email address'
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
              icon="user"
              name={FORM_VALUE.FIRST_NAME}
              placeholder="First name"
            />
            <FormInput
              icon="user"
              name={FORM_VALUE.SECOND_NAME}
              placeholder="Second name"
            />
            <FormInput
              icon="envelope"
              name={FORM_VALUE.EMAIL}
              placeholder={`${FORM_VALUE.EMAIL.charAt(
                0
              ).toUpperCase()}${FORM_VALUE.EMAIL.slice(1)}`}
            />
            <FormTextArea
              icon="comment"
              name={FORM_VALUE.MESSAGE}
              placeholder={`${FORM_VALUE.MESSAGE.charAt(
                0
              ).toUpperCase()}${FORM_VALUE.MESSAGE.slice(1)}`}
            />
            <FormSubmit isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default About
