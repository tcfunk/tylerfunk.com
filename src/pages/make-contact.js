import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../layouts/layout'


const Container = styled.div.attrs({
  className: `
    container
    mx-auto
    py-4
    lg:py-8
    space-y-6
    items-center
    flex
    flex-col
  `
})``

const Portrait = styled(GatsbyImage).attrs({
  className: `
    rounded-full
    w-64
  `
})``

const IndexPage = ({ data }) => {
  const me = data.file.childImageSharp.fluid

  return (
    <Layout>
      <Container>
        <h2 className="text-5xl font-serif text-center">Looking for some jolly cooperation?</h2>
        <p className="text-2xl flex items-center space-x-4">
          <FaEnvelope />
          <span>tyler@furtivegames.com</span>
        </p>
        <Portrait image={me}></Portrait>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "me.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
}
`

export default IndexPage
