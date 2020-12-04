import * as React from "react"
import Layout from '../layouts/layout'

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
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="bg-yellow-100">
        <section className="p-4">
          <ul className="flex">
            {filters.map((filter) => 
              <li className="flex-auto text-center">{filter.name}</li>
            )}
          </ul>
        </section>
        <section className="flex flex-wrap">
          {posts.map((post) =>
            <article className="flex-grow-1 flex-shrink-0 w-1/3 p-4 bg-pink-100">Post</article>
          )}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
