import React from "react";
import { Link } from "gatsby";

import { SiTwitter, SiInstagram, SiTwitch, SiItchDotIo } from 'react-icons/si';

import '../pages/index.css';


const pill = "flex-none rounded-lg p-2 p-2";
const icon = "h-6 w-6 text-white";

export default function Layout({ children }) {
  return (
    <div className="pl-64 text-gray-800">
      <header className="fixed left-0 top-0 w-64 min-h-screen flex flex-row items-center justify-center text-center font-sans bg-green-100">
        <div className="flex flex-col space-y-8">
    
          <div>
            <h1 className="text-5xl font-bold mb-2">Tyler Funk</h1>
            <h2 className="text-xl font-light">Game Developer / 3D Artist</h2>
          </div>

          <ul className="text-2xl">
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/make-contact">Contact</Link></li>
          </ul>

          <section className="flex justify-between">
            <a className={pill + " bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500"} href="https://www.instagram.com/tcfunk25/"><SiInstagram className={icon} /></a>
            <a className={pill + " bg-twitter"} href="https://twitter.com/tcfunk"><SiTwitter className={icon} /></a>
            <a className={pill + " bg-itch"} href="https://tfunk.itch.io/"><SiItchDotIo className={icon} /></a>
            <a className={pill + " bg-twitch"} href="https://www.twitch.tv/tyfoo"><SiTwitch className={icon} /></a>
          </section>

        </div>
      </header>

      {children}

      <footer className="flex flex-row text-center justify-center py-4 bg-blue-100">
        <div>
          footer things
        </div>
      </footer>
    </div>
  )
}