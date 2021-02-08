import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item/grid-item'
import styled from 'styled-components'

import styles from './portfolio.module.scss';

const PortfolioGrid = styled.div.attrs({
  className: `
    grid
    grid-cols-1
    gap-12
    container
    mx-auto
    lg:grid-cols-4
    md:grid-cols-3
    sm:grid-cols-2
  `
})``

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <PortfolioGrid>
          {data.allMarkdownRemark.nodes.map((node) =>
            <GridItem
              to={node.frontmatter.slug}
              title={node.frontmatter.title}
              description={node.excerpt}
              image={node.frontmatter.coverImage.childImageSharp.fluid} />
          )}
          {data.allMarkdownRemark.nodes.map((node) =>
            <GridItem
              to={node.frontmatter.slug}
              title={node.frontmatter.title}
              description={node.excerpt}
              image={node.frontmatter.coverImage.childImageSharp.fluid} />
          )}
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
query {
  allMarkdownRemark (sort: {fields: fileAbsolutePath}) {
    nodes {
      excerpt
      frontmatter {
        slug
        title
        coverImage {
          childImageSharp {
            fluid (quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
