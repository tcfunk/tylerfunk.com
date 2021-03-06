import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import PostDetails from '../components/postDetails'
import Layout from '../layouts/layout'


const Article = styled.div.attrs({
  className: `
    grid
    gap-4
    grid-cols-1
    grid-rows-1
    py-6
    lg:py-8
    lg:container
    lg:mx-auto
    lg:grid-cols-3
    lg:grid-rows-1
  `
})``

const MediaList = styled.div.attrs({
  className: `
    col-start-1
    col-span-1
    container
    lg:px-0
    lg:col-span-2
  `
})``

const MediaItem = styled(Img).attrs({
  className: `
    mb-4
  `
})``


export default function Template({
  data
}) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  // var artstationEmbed = "";
  // if (frontmatter.artstationId) {
  //   artstationEmbed = (
  //     <iframe title="Marmoset Viewer" style={{width: "100%"}} src={"https://www.artstation.com/embed/"+ frontmatter.artstationId} frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" scrolling="no"></iframe>
  //   )
  // }

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" contents={frontmatter.description}></meta>
      </Helmet>

      <Article>
        <PostDetails
          className="col-start-1 row-start-1 lg:col-start-3"
          title={frontmatter.title}
          description={html}></PostDetails>

        <MediaList>
          {frontmatter.images.map((image) =>
            <div>
              <MediaItem fluid={image.src.childImageSharp.fluid} />
            </div>
          )}
          {/* {artstationEmbed} */}
        </MediaList>
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      slug
      title
      description
      artstationId
      images {
        label
        src {
          childImageSharp {
            fluid (quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
}
`