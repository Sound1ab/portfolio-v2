# Phillip Parker's Portfolio

## Development

Gatsby Development: `npm start`

Gatsby Build: `npm build`

## Preview Links


[Master](https://phillipparker.io)

## CircleCI

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) provided by [CircleCI](https://circleci.com/) when either
Master or Staging receives a push or PR.

## Typescript

[Typescript](https://www.typescriptlang.org/) is used throughout the project to provide static type checking. Any new
files or components should therefore use the extensions `.ts` or `.tsx`.

## GraphQL

[GraphQL](https://graphql.org/) is a query language to query API data of any kind. Gatsby retrieves all remote data at
compile time and then leverages GraphQL as the mechanism to deliver the data to our client side components. One major
benefit of this is all our data is available immediately on page load however, the drawback is that whenever content
changes, the entire site must be regenerated to pull in the new data. This process will be explained further in the
section about Contentful.

##### GraphiQL

GraphiQL is a client side playground to test run GraphQL queries. It can be accessed at
`http://localhost:8000/___graphql`.

## Gatsby Config

Gatsby uses a plugin architecture to provide functionality such as typescript, image transform. Here you will also find the site's meta data and manifest.

## Design

##### Atomic Design

The site uses the principles laid down by Brad Frost of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) to split the component hierarchy.

##### Styled Components

All components are [styled components](https://emotion.sh/docs/styled) using the Emotion library.
