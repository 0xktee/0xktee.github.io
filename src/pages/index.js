import React from 'react'
import Layout from '../components/layout'
import Introduce from '../components/introduce'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <Introduce />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
