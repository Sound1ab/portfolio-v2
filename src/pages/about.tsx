import React from 'react'
import { Heading } from '../components/atoms'
import { Layout } from '../layouts'

function About() {
  return (
    <Layout>
      <Heading type="h1" marginBottom>
        About
      </Heading>
      <p>
        I am a full-stack (TypeScript) developer based in London, UK who is
        passionate about building scalable and robust applications. I aim to
        write modular, testable code while employing pair/mob coding and agile
        best practices such as iterative design, burndown charts and trunk-based
        development.
      </p>
    </Layout>
  )
}

export default About
