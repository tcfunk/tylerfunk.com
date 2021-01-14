import React from "react";
import Img from "gatsby-image"
import { Link } from "gatsby";
import styled from 'styled-components'

const Post = styled.article.attrs({
  className: `
    container
    px-16
    mx-auto
    flex
    flex-row
    -mt-12

    even:flex-row-reverse
    even:w-5/7
  `
})`
.post-card {
  margin-left: -3rem;
}
&:nth-child(1) {
  margin-top: 0;
}
&:nth-child(2n) .post-card {
  margin-left: 0;
  margin-right: -3rem;
}
&:nth-child(2n) .post-card-link {
  left: initial;
  right: 3rem;
}
`

const PostImage = styled.div.attrs({
  className: `
    relative
    flex-3/2
    z-0
  `
})``

const PostCardWrapper = styled.div.attrs({
  className: `
    flex
    flex-1
    flex-col
    justify-center
  `
})``
const PostCard = styled.div.attrs({
  className: `
    bg-gray-700
    text-gray-100
    post-card
    relative
    p-12
    z-10
  `
})``
const PostCardTitle = styled.h2.attrs({
  className: `
    font-serif
    text-4xl
    text-yellow-300
    mb-8
  `
})``
const PostCardLink = `
  absolute
  post-card-link
  bg-yellow-300
  font-serif
  text-5xl
  text-gray-800
  leading-zero
  px-6
  pt-6
  pb-8
  -bottom-7
  left-12
  transition-transform
  transform
  ease-out
  hover:scale-110
`
const PostCardDescription = styled.p.attrs({
  className: "mb-6"
})``

class GridItem extends React.Component {
  render() {
    return (
      <Post>
        <PostImage>
          <Img fluid={this.props.image} />
        </PostImage>
        <PostCardWrapper>
          <PostCard>
            <PostCardTitle>{this.props.title}</PostCardTitle>
            <PostCardDescription dangerouslySetInnerHTML={{__html: this.props.description}}></PostCardDescription>
            <Link to={this.props.to} className={PostCardLink}>-&gt;</Link>
          </PostCard>
        </PostCardWrapper>
      </Post>
    )
  }
}

export default GridItem
