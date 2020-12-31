import * as React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby";

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item/grid-item'

import styles from './portfolio.module.scss';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <section className={styles.portfolioGrid}>
          {data.allMarkdownRemark.nodes.map((node) =>
            <GridItem>
              <Link to={node.frontmatter.slug}>
                <Img fluid={node.frontmatter.coverImage.childImageSharp.fluid} />
              </Link>
            </GridItem>
          )}
        </section>

      </main>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
        description
        coverImage {
          childImageSharp {
            fluid {
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
