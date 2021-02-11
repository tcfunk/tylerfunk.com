import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby";
import styled from 'styled-components'


const Post = styled(Link).attrs({
  className: `
    truncate
  `
})``

const PostImage = styled.div.attrs({
  className: `
    block
    duration-100
    transform
    transition-transform
    ease-in
    hover:scale-110
  `
})``
// const linkClasses = "block duration-300 transition-transform ease-in transform scale-100 hover:scale-125";

class GridItem extends React.Component {
  render() {
    return (
      <Post to={this.props.to}>
        <PostImage>
          <Img fluid={this.props.image} />
        </PostImage>
      </Post>
    )
  }
}

export default GridItem
