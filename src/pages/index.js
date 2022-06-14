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
    md:grid-cols-2
    xl:grid-cols-3
    justify-center

    max-w-md
    sm:max-w-lg
    md:max-w-screen-md
    lg:max-w-screen-lg
    xl:max-w-screen-xl
    2xl:max-w-screen-2xl
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
              image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
              key={node.frontmatter.slug}
              />
          )}
        </PortfolioGrid>
      </main>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: fileAbsolutePath}, filter: {frontmatter: {published: {eq: true}}, excerpt: {}}) {
    nodes {
      excerpt
      frontmatter {
        slug
        title
        coverImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 400, webpOptions: {quality: 90})
          }
        }
      }
    }
  }
}
`

export default IndexPage
