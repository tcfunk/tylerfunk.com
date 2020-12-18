import * as React from "react"
import Layout from '../layouts/layout'
// import Img from 'gatsby-image'

import roveyGif from '../images/thumbs/rovey.gif';



const filters = [
  {
    key: 0,
    tag: 'game-asset',
    name: 'Game Assets'
  },
  {
    key: 1,
    tag: 'vfx',
    name: 'Visual Effects'
  },
  {
    key: 2,
    tag: 'game',
    name: 'Games'
  },
];


const posts = [
  {
    "title": "Rovey",
    "cover": roveyGif
  },
  {
    "title": "Battle Axe",
    "cover": "",
  }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="bg-yellow-100">
        <section className="p-4">
          <ul className="flex justify-center">
            {filters.map((filter) => 
              <li className="flex-initial text-center px-4">{filter.name}</li>
            )}
          </ul>
        </section>
        <section className="flex flex-wrap">
          {posts.map((post) =>
            <article
              className="flex-grow-1 flex-shrink-0 w-1/4 h-1/4 p-4 bg-pink-100"
            >
                <figure>
                  <img src={roveyGif}></img>
                  <figcaption>{post.title}</figcaption>
                </figure>
              </article>
          )}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
