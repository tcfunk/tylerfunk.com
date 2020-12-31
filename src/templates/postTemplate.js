import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import PostTitle from '../components/postTitle'
import Layout from '../layouts/layout'

const Article = styled.div.attrs({
  className: "font-serif shadow m-4 rounded-sm p-4 max-w-xl mx-auto text-gray-800"
})``

export default function Template({
  data
}) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" contents={frontmatter.description}></meta>
      </Helmet>
      <Article>
        <PostTitle>{frontmatter.title}</PostTitle>

        {frontmatter.images.map((image) =>
          <Img fluid={image.childImageSharp.fluid} />
        )}

        <div dangerouslySetInnerHTML={{__html: html}}></div>
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
      coverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      images {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`