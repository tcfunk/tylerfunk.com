import React from "react"
import { SiArtstation, SiTwitch, SiTwitter, SiItchdotio, SiLinkedin } from 'react-icons/si'
import styled from 'styled-components'


const SocialLink = styled.a.attrs({
  className: `
    flex
    rounded-lg
    p-2
    my-0
    mx-4
    text-stone-700
  `
})``
    // bg-gradient-to-tr
    // from-gray-700
    // via-gray-700
    // to-gray-700
    // text-gray-100

const SocialLinkItch = styled(SocialLink).attrs({
  className: `
    hover:from-itch
    hover:to-itch
    hover:text-itch
  `
})``
const SocialLinkInstagram = styled(SocialLink).attrs({
  className: `
    hover:to-yellow-500
    hover:from-purple-500
    hover:via-pink-500
    hover:text-pink-500
  `
})``
const SocialLinkArtstation = styled(SocialLink).attrs({
  className: `
    hover:to-gray-800
    hover:from-gray-900
    hover:text-artstation
  `
})``
const SocialLinkTwitch = styled(SocialLink).attrs({
  className: `
    hover:from-twitch
    hover:to-twitch
    hover:text-twitch
  `
})``

const SocialLinkLinkedin = styled(SocialLink).attrs({
  className: `
  hover:to-sky-600
  hover:from-gray-900
  hover:text-sky-600
  `
})``

const SocialLinkTwitter = styled(SocialLink).attrs({
  className: `
    hover:from-twitter
    hover:to-twitter
    hover:text-twitter
  `
})``
const SocialIcon = "h-8 w-8"



class Footer extends React.Component {
  render() {
    return (
      <footer className="py-8">

        <div className="flex justify-center">
          <SocialLinkArtstation href="https://artstation.com/tcfunk/" target="_blank">
            <SiArtstation className={SocialIcon} />
          </SocialLinkArtstation>

          <SocialLinkLinkedin href="https://linkedin.com/in/tyler-c-funk" target="_blank">
            <SiLinkedin className={SocialIcon} />
          </SocialLinkLinkedin>

          <SocialLinkTwitch href="https://twitch.com/tyfoo/" target="_blank">
            <SiTwitch className={SocialIcon} />
          </SocialLinkTwitch>

          <SocialLinkItch href="https://tfunk.itch.io" target="_blank">
            <SiItchdotio className={SocialIcon} />
          </SocialLinkItch>

          <SocialLinkTwitter  href="https://twitter.com/furtive_games" target="_blank">
            <SiTwitter className={SocialIcon} />
          </SocialLinkTwitter>
        </div>

      </footer>
    )
  }
}

export default Footer
