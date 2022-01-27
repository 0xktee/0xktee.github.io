import React, { Fragment } from 'react'
import type { NextPage } from 'next'

import Introduce from '../components/layouts/Introduce'
import Projects from '../components/layouts/Projects'
import Contact from '../components/layouts/Contact'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Introduce />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default Home
