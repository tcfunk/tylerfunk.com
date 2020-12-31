import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

export default function Template({
  data
}) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <div>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" contents={frontmatter.description}></meta>
      </Helmet>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
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
    }
  }
}
`