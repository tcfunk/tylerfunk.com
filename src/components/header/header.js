import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'


const NavWrapper = styled.section.attrs({
  className: `
    container
    mx-auto
  `
})``

const NavList = styled.div.attrs({
  className: `
    flex
    justify-center
  `
})``

const NavLink = styled(Link).attrs({
  className: `
    text-2xl
    px-4
    py-4
    font-sans
    xl:px-8
    relative
  `,
  activeClassName: 'navlink_active'
})`
&:hover::after {
  color: rgb(79, 70, 229, 1);
}
&.navlink_active::after {
  color: rgba(252, 211, 77, 1);
}
&:hover,
&.navlink_active {
  ::after {
    content: "_";
    font-family: Outfit;
    font-size: 4rem;
    position: absolute;
    width: 100%;
    bottom: 25%;
    left: 0;
    text-align: center;
  }
}
`

const TitleWrapper = styled.section.attrs({
  className: `
    w-full
    relative
    py-4
    md:py-8
  `
})``
const TitleContainer = styled.section.attrs({
  className: `
    container
    mx-auto
    text-center
  `
})``

const NameTitle = styled.h1.attrs({
  className: `
    font-serif
    text-4xl
    md:text-6xl
    xl:text-7xl
    font-light
    mb-4
    text-zinc-600
  `
})``

const NameSubtitle = styled.h2.attrs({
  className: `
    font-serif
    text-xl
    md:text-2xl
    xl:text-4xl
    font-thin
  `
})``

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
    
          <TitleWrapper>
            <TitleContainer>
              <NameTitle>Tyler Funk</NameTitle>
              <NameSubtitle>Game Developer / 3D Artist</NameSubtitle>
            </TitleContainer>
          </TitleWrapper>

          <NavWrapper>
            <NavList>
              <NavLink to="/">Home</NavLink>
              {/* <NavLink to="/about">About</NavLink>
              <NavLink to="/make-contact">Contact</NavLink> */}
            </NavList>
          </NavWrapper>

        </div>
      </header>
    )
  }
}

export default Header
