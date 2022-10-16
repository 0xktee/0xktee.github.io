import React, { Fragment } from 'react'

import {
  Card,
  Container,
  createStyles,
  Grid,
  Title,
  Text,
  Space,
  Box,
  Group,
  Divider,
} from '@mantine/core'
import Image, { ImageProps } from 'next/image'

import { default as ReactMarquee } from 'react-fast-marquee'
import { IconBrandMantine, IconWorld } from '@tabler/icons'

// import IconReact from '/assets/technologies/cib-react.svg'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '20vh',

    ...theme.other.flexCenter,
  },
  marqueeWrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,

    // borderTop: '1px solid black',
    // borderBottom: '1px solid black',

    // background: 'black',
  },
  marquee: {
    fontWeight: 500,

    // color: theme.colors.orenji,
  },
}))

export default function Marquee() {
  const { classes } = useStyles()

  return (
    <Fragment>
      <Container className={classes.container} fluid px={0}>
        <Divider />
        <Box className={classes.marqueeWrapper}>
          <ReactMarquee className={classes.marquee} gradient={false}>
            BUILD SOMETHING USERS WANT · BUILD SOMETHING USERS WANT · BUILD SOMETHING USERS WANT ·
            BUILD SOMETHING USERS WANT · BUILD SOMETHING USERS WANT · BUILD SOMETHING USERS WANT ·
            BUILD SOMETHING USERS WANT ·&nbsp;
          </ReactMarquee>
        </Box>
        <Divider />
      </Container>
    </Fragment>
  )
}
