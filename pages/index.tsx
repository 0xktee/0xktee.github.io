import { Container, Divider, Space } from '@mantine/core'

import Introduce from '../components/layouts/Introduce'
import About from '../components/layouts/About'
import Technology from '../components/layouts/Technology'
import Contact from '../components/layouts/Contact'

import { Fragment } from 'react'

export default function HomePage() {
  return (
    <Fragment>
      <Space h={64} />

      <Introduce />

      <Space h={64} />

      <Container size="md">
        <Divider size={2} />
      </Container>

      <Space h={64} />

      <About />

      <Space h={64} />

      <Technology />

      <Space h={64} />

      <Contact />

      <Space h="xl" />
    </Fragment>
  )
}
