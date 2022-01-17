import React, { useContext } from 'react'

import Layout from '../components/layout'
import Introduce from '../components/introduce'
import Projects from '../components/projects'
import Contact from '../components/contact'

import Splash from '../components/splash'
import { SplashContext } from '../contexts/splashcontext'

const IndexPage = () => {
  const { isSplashFinish } = useContext(SplashContext)

  return isSplashFinish ? (
    <Layout>
      <Introduce />
      <Projects />
      <Contact />
    </Layout>
  ) : (
    <Splash />
  )
}

export default IndexPage
