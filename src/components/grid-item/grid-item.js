import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import styled from 'styled-components'


const Post = styled(Link).attrs({
  className: `
    block
    rounded
    truncate
  `
})``

const PostImage = styled(GatsbyImage).attrs({
  className: `
    duration-100
    transform
    transition-transform
    ease-in
    hover:scale-110
  `
})``

class GridItem extends React.Component {
  render() {
    return (
      <Post to={this.props.to}>
        <PostImage image={this.props.image} />
      </Post>
    )
  }
}

export default GridItem
