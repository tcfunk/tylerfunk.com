import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item/grid-item'

import styles from './portfolio.module.scss';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <section className={styles.portfolioGrid}>
          {data.allMarkdownRemark.nodes.map((node) =>

            <GridItem
              to={node.frontmatter.slug}
              title={node.frontmatter.title}
              description={node.excerpt}
              image={node.frontmatter.coverImage.childImageSharp.fluid} />
          )}
        </section>

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
