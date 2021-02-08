import React from "react"
import { Link } from "gatsby"
import { SiArtstation,  SiInstagram, SiTwitch } from 'react-icons/si'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import styled from 'styled-components'


const SocialLink = styled.a.attrs({
  className: "flex rounded-lg p-2 my-0 mx-2 bg-gradient-to-tr from-white via-white to-white text-gray-700"
})``

const SocialLinkInstagram = "hover:to-yellow-500 hover:from-purple-500 hover:via-pink-500 hover:text-white"
const SocialLinkArtstation = "hover:to-gray-700 hover:from-gray-700 hover:text-artstation"
const SocialLinkTwitch = "hover:from-twitch hover:to-twitch hover:text-white"
const SocialIcon = "h-6 w-6"

const NavWrapper = styled.section.attrs({
  // className: "container mx-auto py-2 flex flex-row-reverse"
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

const NavLink = `
  text-gray-100
  text-lg
  px-4
`
const HeaderMenuIcon = "text-gray-200 h-8 w-8"

const TitleWrapper = styled.section.attrs({
  className: `
    w-full
    relative
    mb-16
  `
})``
const TitleContainer = styled.section.attrs({
  className: `
    container
    mx-auto
    text-center
  `
  // className: "container mx-auto py-2 relative z-10"
})``
const TitleBackdrop = styled.div.attrs({
  // className: "h-full w-2/3 bg-gray-700 absolute left-0 top-0 z-0"
})``

const NameTitle = styled.h1.attrs({
  className: `
    font-serif
    text-4xl
    md:text-6xl
    xl:text-7xl
    text-yellow-300
  `
})``
const NameSubtitle = styled.h2.attrs({
  className: `
    font-serif
    text-xl
    md:text-2xl
    xl:text-4xl
    text-yellow-300
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
            <TitleBackdrop />
          </TitleWrapper>

          <NavWrapper>
            {/* <HiOutlineMenuAlt3 className={HeaderMenuIcon}/> */}

            <NavList>
              <Link className={NavLink} to="/">Home</Link>
              <Link className={NavLink} to="/about">About</Link>
              <Link className={NavLink} to="/make-contact">Contact</Link>
            </NavList>
          </NavWrapper>


          {/* <section className="flex justify-center">
            <SocialLink className={[SocialLink, SocialLinkInstagram].join(' ')} href="https://www.instagram.com/tcfunk25/" target="_blank">
              <SiInstagram className={SocialIcon} />
            </SocialLink>

            <SocialLink className={[SocialLink, SocialLinkArtstation].join(' ')} href="https://artstation.com/tcfunk/" target="_blank">
              <SiArtstation className={SocialIcon} />
            </SocialLink>

            <SocialLink className={[SocialLink, SocialLinkTwitch].join(' ')} href="https://twitch.com/tyfoo/" target="_blank">
              <SiTwitch className={SocialIcon} />
            </SocialLink>
          </section> */}

        </div>
      </header>
    )
  }
}

export default Header
