import * as React from "react"
import Img from "gatsby-image"
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

const Portrait = styled(Img).attrs({
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
        <h2 className="text-5xl font-serif text-gray-100">Let's collaborate</h2>
        <p className="text-xl text-gray-100">tcfunk25@gmail.com</p>
        {/* <Portrait fluid={me}></Portrait> */}
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "me.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
