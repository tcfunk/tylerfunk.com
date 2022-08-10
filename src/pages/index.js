import * as React from "react"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../layouts/layout'
import GridItem from '../components/grid-item/grid-item'
import ProjectCard from '../components/project/project-card'
import PageSection from '../components/page-section'

const ProjectGrid = styled.div.attrs({
  className: `
    grid
    grid-cols-1
    gap-8
    lg:gap-10
    md:grid-cols-2
    xl:grid-cols-3
  `
})``


const PortfolioGrid = styled.div.attrs({
  className: `
    grid
    grid-cols-1
    gap-8
    lg:gap-10
    md:grid-cols-2
    xl:grid-cols-3
  `
})``

// const projects = ['Triune Legacy', 'No Quarter', 'Rovey']

// const Section = styled.section.attrs({
//   className: `
//     container
//     mx-auto
//     justify-center
//     py-8
//     lg:py-10

//     max-w-md
//     sm:max-w-lg
//     md:max-w-screen-md
//     lg:max-w-screen-lg
//     xl:max-w-screen-xl
//     2xl:max-w-screen-2xl
//   `
// })``


const IndexPage = ({ data }) => {
  const models = data.allMarkdownRemark.group[0]
  const projects = data.allMarkdownRemark.group[1]
  
  return (
    <Layout>
      <Helmet>
        <title>Tyler Funk | Game Developer & 3D Artist</title>
        <meta name="description" contents="Game Development and 3D Art Portfolio"></meta>
      </Helmet>
      <main>
        <PageSection className="" title="Projects">
          <ProjectGrid>
            {projects.nodes.map((node) =>
              <ProjectCard
                to={"https://tfunk.itch.io/" + node.frontmatter.slug}
                title={node.frontmatter.title}
                key={node.frontmatter.slug}
                image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                description={node.frontmatter.description}>
              </ProjectCard>
            )}
          </ProjectGrid>
        </PageSection>
        <PageSection className="" title="3D Art">
          <PortfolioGrid>
            {models.nodes.map((node) =>
              <GridItem
                to={node.frontmatter.slug}
                title={node.frontmatter.title}
                description={node.excerpt}
                image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                key={node.frontmatter.slug}
                />
            )}
          </PortfolioGrid>
        </PageSection>
      </main>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: fileAbsolutePath}, filter: {frontmatter: {published: {eq: true}}}) {
    group(field: frontmatter___type) {
      fieldValue
      nodes {
        excerpt
        frontmatter {
          slug
          title
          description
          coverImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 400, webpOptions: {quality: 90})
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
