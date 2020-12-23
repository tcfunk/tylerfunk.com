import React from "react"
import { Link } from "gatsby";
import { SiTwitter, SiInstagram, SiTwitch, SiItchDotIo } from 'react-icons/si';

import headerCSS from './header.module.scss'
import socialCSS from './social.module.scss'

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

          <section className={socialCSS.socialIcons}>
            <a
              className={`${socialCSS.socialIcons__link} ${socialCSS.socialIcons__linkInstagram}`}
              href="https://www.instagram.com/tcfunk25/">
              <SiInstagram className={socialCSS.socialIcons__icon} />
            </a>

            <a
              className={`${socialCSS.socialIcons__link} ${socialCSS.socialIcons__linkTwitter}`}
              href="https://twitter.com/tcfunk">
                <SiTwitter className={socialCSS.socialIcons__icon} />
            </a>

            <a
              className={`${socialCSS.socialIcons__link} ${socialCSS.socialIcons__linkItch}`}
              href="https://tfunk.itch.io/">
                <SiItchDotIo className={socialCSS.socialIcons__icon} />
            </a>

            <a
              className={`${socialCSS.socialIcons__link} ${socialCSS.socialIcons__linkTwitch}`}
              href="https://www.twitch.tv/tyfoo">
                <SiTwitch className={socialCSS.socialIcons__icon} />
            </a>
          </section>

        </div>
      </header>
    )
  }
}

export default Header
