import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby";
import styled from 'styled-components'


const Post = styled(Link).attrs({
  className: `
    block
    rounded
    truncate
  `
})``

const PostImage = styled(Img).attrs({
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
        <PostImage fluid={this.props.image} />
      </Post>
    )
  }
}

export default GridItem
