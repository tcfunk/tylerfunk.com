import React from "react"
import { Link } from "gatsby";
import { SiArtstation, SiTwitter, SiInstagram, SiTwitch, SiItchDotIo } from 'react-icons/si';
import styled from 'styled-components'

import headerCSS from './header.module.scss'
import socialCSS from './social.module.scss'

const SocialLink = styled.a.attrs({
  className: "flex rounded-lg p-2 my-0 mx-2 bg-gradient-to-tr from-white via-white to-white text-gray-700"
})``

const SocialLinkInstagram = "hover:to-yellow-500 hover:from-purple-500 hover:via-pink-500 hover:text-white"
const SocialLinkTwitter = "hover:to-twitter hover:from-twitter hover:text-white"
const SocialLinkArtstation = "hover:to-gray-700 hover:from-gray-700 hover:text-artstation"
const SocialLinkTwitch = "hover:from-twitch hover:to-twitch hover:text-white"
const SocialIcon = "h-6 w-6"

class Header extends React.Component {
  render() {
    return (
      <header className={headerCSS.siteHeader}>
        <div className={headerCSS.siteHeader__container}>
    
          <div>
            <h1 className={headerCSS.siteHeader__title}>Tyler Funk</h1>
            <h2 className={headerCSS.siteHeader__subtitle}>Game Developer / 3D Artist</h2>
          </div>

          <ul className={headerCSS.siteHeader__list}>
            <li className={headerCSS.siteHeader__listItem}><Link to="/">Portfolio</Link></li>
            <li className={headerCSS.siteHeader__listItem}><Link to="/about">About</Link></li>
            <li className={headerCSS.siteHeader__listItem}><Link to="/make-contact">Contact</Link></li>
          </ul>

          <section className="flex justify-center">
            <SocialLink className={[SocialLink, SocialLinkInstagram].join(' ')} href="https://www.instagram.com/tcfunk25/" target="_blank">
              <SiInstagram className={SocialIcon} />
            </SocialLink>

            <SocialLink className={[SocialLink, SocialLinkArtstation].join(' ')} href="https://artstation.com/tcfunk/" target="_blank">
              <SiArtstation className={SocialIcon} />
            </SocialLink>

            <SocialLink className={[SocialLink, SocialLinkTwitch].join(' ')} href="https://twitch.com/tyfoo/" target="_blank">
              <SiTwitch className={SocialIcon} />
            </SocialLink>
          </section>

        </div>
      </header>
    )
  }
}

export default Header
