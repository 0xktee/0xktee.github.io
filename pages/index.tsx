import { Divider } from '@mantine/core'

import Introduce from '../components/layouts/Introduce'
import Technology from '../components/layouts/Technology'
import Contact from '../components/layouts/Contact'
import { Fragment } from 'react'

export default function HomePage() {
  return (
    <Fragment>
      <Introduce />
      <Divider />
      <Technology />
      <Divider />
      <Contact />
    </Fragment>
  )
}
