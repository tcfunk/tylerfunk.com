import React from "react"
import { SiArtstation,  SiInstagram, SiItchDotIo, SiTwitch, SiTwitter } from 'react-icons/si'
import styled from 'styled-components'


const SocialLink = styled.a.attrs({
  className: `
    flex
    rounded-lg
    p-2
    my-0
    mx-4
    bg-gradient-to-tr
    from-gray-700
    via-gray-700
    to-gray-700
    text-gray-100
  `
})``

const SocialLinkItch = styled(SocialLink).attrs({
  className: `
    hover:from-itch
    hover:to-itch
    hover:text-white
  `
})``
const SocialLinkInstagram = styled(SocialLink).attrs({
  className: `
    hover:to-yellow-500
    hover:from-purple-500
    hover:via-pink-500
    hover:text-white
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
    hover:text-white
  `
})``
const SocialLinkTwitter = styled(SocialLink).attrs({
  className: `
    hover:from-twitter
    hover:to-twitter
    hover:text-white
  `
})``
const SocialIcon = "h-6 w-6"



class Footer extends React.Component {
  render() {
    return (
      <footer className="py-8">

        <div className="flex justify-center">
          <SocialLinkArtstation href="https://artstation.com/tcfunk/" target="_blank">
            <SiArtstation className={SocialIcon} />
          </SocialLinkArtstation>

          <SocialLinkTwitch href="https://twitch.com/tyfoo/" target="_blank">
            <SiTwitch className={SocialIcon} />
          </SocialLinkTwitch>

          <SocialLinkItch href="https://tfunk.itch.io" target="_blank">
            <SiItchDotIo className={SocialIcon} />
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

