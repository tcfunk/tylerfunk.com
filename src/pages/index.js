import * as React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby";

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item/grid-item'
import styled from 'styled-components'


const PortfolioGrid = styled.div.attrs({
  className: `
    container
    mx-auto
    grid
    grid-cols-1
    gap-8
    py-8
    lg:py-10
    lg:gap-10
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-4
  `
})``

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Tyler Funk | Game Developer & 3D Artist</title>
        <meta name="description" contents="Game Development and 3D Art Portfolio"></meta>
      </Helmet>
      <main>
        <PortfolioGrid>
          {data.allMarkdownRemark.nodes.map((node) =>
            <GridItem
              to={node.frontmatter.slug}
              title={node.frontmatter.title}
              description={node.excerpt}
              image={node.frontmatter.coverImage.childImageSharp.fluid} />
          )}
        </PortfolioGrid>
      </main>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}, excerpt: {}}) {
    nodes {
      excerpt
      frontmatter {
        slug
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 400, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
