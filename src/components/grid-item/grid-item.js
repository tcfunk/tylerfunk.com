import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby";
import styled from 'styled-components'


const Post = styled(Link).attrs({
  className: `
  `
})``

const PostImage = styled.div.attrs({
  className: ''
})``

const PostCardWrapper = styled.div.attrs({
  className: ''
})``

const PostCard = styled.div.attrs({
  className: ''
})``

const PostCardTitle = styled.div.attrs({
  className: ''
})``

const PostCardDescription = styled.div.attrs({
  className: ''
})``

class GridItem extends React.Component {
  render() {
    return (
      <Post to={this.props.to}>
        <PostImage>
          <Img fluid={this.props.image} />
        </PostImage>
        <PostCardWrapper>
          <PostCard>
            <PostCardTitle>{this.props.title}</PostCardTitle>
            <PostCardDescription dangerouslySetInnerHTML={{__html: this.props.description}}></PostCardDescription>
          </PostCard>
        </PostCardWrapper>
      </Post>
    )
  }
}

export default GridItem
