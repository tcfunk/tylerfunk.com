import React from "react"
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'

const PageNotFound = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Tyler Funk | Game Developer & 3D Artist</title>
        <meta name="description" contents="Game Development and 3D Art Portfolio"></meta>
      </Helmet>
      <main className="container mx-auto">
        <h1 className="text-8xl text-center py-8 text-white">Page not found</h1>
      </main>
    </Layout>
  )
}

export default PageNotFound