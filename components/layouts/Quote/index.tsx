import React, { Fragment } from 'react'

import { Card, Container, createStyles, Grid, Title, Text, Space, Box, Group } from '@mantine/core'
import Image, { ImageProps } from 'next/image'

import Marquee from 'react-fast-marquee'
import { IconBrandMantine, IconWorld } from '@tabler/icons'

// import IconReact from '/assets/technologies/cib-react.svg'

const useStyles = createStyles((theme) => ({
  container: {
    // minHeight: '20vh',
    // ...theme.other.flexCenter,
  },
}))

export default function Quote() {
  const { classes } = useStyles()

  return (
    <Fragment>
      <Container className={classes.container} size="md"></Container>
    </Fragment>
  )
}
