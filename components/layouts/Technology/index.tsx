import React, { Fragment } from 'react'

import { Card, Container, createStyles, Grid, Title, Text, Space, Box, Group } from '@mantine/core'
import Image, { ImageProps } from 'next/image'

import Marquee from 'react-fast-marquee'
import { IconBrandMantine, IconWorld } from '@tabler/icons'

// import IconReact from '/assets/technologies/cib-react.svg'

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.lime,

    borderTop: '1px solid black',
    borderBottom: '1px solid black',

    '::selection': {
      background: 'black',
      color: theme.colors.lime,
    },
  },
  marqueeWrapper: {
    'svg, img': {
      ...theme.other.userSelect.none,
      ...theme.other.userDrag.none,
    },
  },
  textSelection: {
    '::selection': {
      background: 'black',
      color: theme.colors.lime,
    },
  },
}))

export default function Technology() {
  const ICON_SIZE = 36

  const { classes } = useStyles()

  const IconImage = (props: ImageProps) => {
    /*
     * mimic tabler icons padding by reduce minor image size
     */
    const CUSTOM_SIZE = ICON_SIZE - 5

    return <Image src={props.src} alt={props.alt} width={CUSTOM_SIZE} height={CUSTOM_SIZE} />
  }

  const Tech = (props: any) => {
    const { label, icon } = props
    return (
      <Group spacing="xs" mx={22}>
        {icon}
        <Text className={classes.textSelection} size="sm" weight={500}>
          {label}
        </Text>
      </Group>
    )
  }

  return (
    <Container className={classes.container} py="xl" fluid>
      <Title className={classes.textSelection} order={2} align="center">
        Loved Technologies
      </Title>

      <Space h="xl" />

      <Box className={classes.marqueeWrapper}>
        <Marquee
          speed={25}
          gradientColor={[215, 254, 56]}
          // gradientColor={[253, 253, 253]}
        >
          <Tech
            label="TypeScript"
            icon={<IconImage src="/assets/technologies/cib-typescript.svg" />}
          />
          <Tech
            label="JavaScript"
            icon={<IconImage src="/assets/technologies/cib-javascript.svg" />}
          />
          <Tech label="Python" icon={<IconImage src="/assets/technologies/cib-python.svg" />} />
          <Tech label="React" icon={<IconImage src="/assets/technologies/cib-react.svg" />} />
          <Tech label="Next.js" icon={<IconImage src="/assets/technologies/cib-next-js.svg" />} />
          <Tech label="Node.js" icon={<IconImage src="/assets/technologies/cib-node-js.svg" />} />
          <Tech label="web3.js" icon={<IconWorld size={ICON_SIZE} stroke={1.5} />} />
          <Tech
            label="Framer Motion"
            icon={<IconImage src="/assets/technologies/cib-framer.svg" />}
          />
          <Tech label="Mantine" icon={<IconBrandMantine size={ICON_SIZE} stroke={1.5} />} />
          <Tech label="Sass" icon={<IconImage src="/assets/technologies/cib-sass.svg" />} />
          <Tech
            label="Cloudflare"
            icon={<IconImage src="/assets/technologies/cib-cloudflare.svg" />}
          />
          <Tech label="Notion" icon={<IconImage src="/assets/technologies/cib-notion.svg" />} />
        </Marquee>
      </Box>
    </Container>
  )
}
