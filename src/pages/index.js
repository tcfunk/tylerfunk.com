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
          {data.allFile.group.map((group) =>
            <GridItem>
              {group.nodes.map((post) =>
                <Img fluid={post.childImageSharp?.fluid} />
              )}
            </GridItem>
          )}
        </section>

      </main>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile(filter: {relativeDirectory: {ne: ""}}) {
    group(field: relativeDirectory) {
      fieldValue
      totalCount
      nodes {
        absolutePath
        relativeDirectory
        childImageSharp {
          fluid (maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default IndexPage
