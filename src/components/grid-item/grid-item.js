import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'

const Article = styled.article.attrs({
  className: "w-1/4 flex-initial p-4"
})``

const ItemContainer = styled.div.attrs({
  className: "truncate h-auto rounded shadow-xl relative"
})``

const Overlay = styled.div.attrs({
  className: "opacity-0 hover:opacity-90 w-full absolute text-gray-700 inset-0 bg-green-400 transition-opacity duration-300 ease-in",
})``

const OverlayText = styled.div.attrs({
  className: "flex justify-center items-center h-full w-full text-white uppercase",
})`
&:before {
  content: '_'
}`

const linkClasses = "block duration-300 transition-transform ease-in transform scale-100 hover:scale-125";

class GridItem extends React.Component {
  render() {
    return (
      <Article>
        <ItemContainer>
          <Link to={this.props.to} className={linkClasses}>
            {this.props.children}
          </Link>

          <Overlay>
            <OverlayText>
              {this.props.title}
            </OverlayText>
          </Overlay>
        </ItemContainer>
      </Article>
    )
  }
}

export default GridItem