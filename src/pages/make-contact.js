import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from '../layouts/layout'


const Container = styled.div.attrs({
  className: `
    container
    mx-auto
    py-4
    lg:py-8
    space-y-6
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
        <h2 className="text-5xl font-serif">Let's collaborate</h2>
        <p className="text-xl">tcfunk25@gmail.com</p>
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
