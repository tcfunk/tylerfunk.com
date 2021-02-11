import React from "react";
import styled from 'styled-components'

import PostTitle from './postTitle'

const PostDescription = styled.div.attrs({
  className: `
    text-gray-100
  `
})``

const PostDetailsContentWrapper = styled.div.attrs({
  className: `
    container
    py-4
    bg-gray-700
    lg:px-4
  `
})``

class PostDetails extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <PostDetailsContentWrapper>
          <PostTitle>{this.props.title}</PostTitle>
          <PostDescription dangerouslySetInnerHTML={{__html: this.props.description}}></PostDescription>
        </PostDetailsContentWrapper>
      </div>
    )
  }
}

export default PostDetails