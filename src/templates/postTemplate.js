import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

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

const MediaItem = styled(GatsbyImage).attrs({
  className: `
    mb-4
  `
})``



class Template extends React.Component {

  state = {
    listWidth: 0,
    listHeight: 0,
  }

  constructor(props) {
    super(props)

    this.mviewer = undefined
    this.mviewRef = React.createRef()
    this.mediaListRef = React.createRef()
    this.viewerFile = this.props.data.markdownRemark.frontmatter.viewerFile
  }

  updateDimensions = () => {
    const width = this.mviewRef.current.offsetWidth

    this.setState({
      listWidth: width,
      listHeight: width * 9 / 16
    })

    this.mviewer.resize(this.state.listWidth, this.state.listHeight)
  }

  componentDidMount() {
    if (window.marmoset && this.viewerFile !== null) {
      const width = this.mviewRef.current.offsetWidth 
      const height = width * 9 / 16

      this.mviewer = new window.marmoset.WebViewer(width, height, this.viewerFile)
      this.mviewRef.current.appendChild(this.mviewer.domRoot)

      window.addEventListener("resize", this.updateDimensions)
    }

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    const { markdownRemark } = this.props.data
    const { html, frontmatter } = markdownRemark

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

          <MediaList ref={ this.mediaListRef }>
            <div className='mb-4' ref={ this.mviewRef }></div>
            {frontmatter.images.map((image) =>
              <div>
                <MediaItem image={image.src.childImageSharp.gatsbyImageData} />
              </div>
            )}
          </MediaList>
        </Article>
      </Layout>
    )
  }
  
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
      viewerFile
      videos {
        src {
          publicURL
        }
      }
      images {
        label
        src {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`

export default Template