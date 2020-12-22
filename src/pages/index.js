import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item'



const filters = [
  {
    key: 0,
    tag: 'game-asset',
    name: 'Game Assets'
  },
  {
    key: 1,
    tag: 'vfx',
    name: 'Visual Effects'
  },
  {
    key: 2,
    tag: 'game',
    name: 'Games'
  },
];


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="bg-yellow-100">
        <section className="p-4">
          <ul className="flex justify-center">
            {filters.map((filter) => 
              <li className="flex-initial text-center px-4">{filter.name}</li>
            )}
          </ul>
        </section>

        <section className="flex flex-wrap">
          {data.allFile.group.map((group) =>
            <GridItem>
              {group.nodes.map((post) =>
                  <Img fluid={post.childImageSharp.fluid} />
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
