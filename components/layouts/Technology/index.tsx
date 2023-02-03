import React from 'react'

import {
  Container,
  Title,
  Text,
  Group,
  Divider,
  Grid,
  Space,
  SimpleGrid,
  createStyles,
} from '@mantine/core'
import Image, { ImageProps } from 'next/image'

import { IconBrandMantine } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    ...theme.other.flexCenter,
  },
  iconWrapper: {
    'svg, img': {
      ...theme.other.userSelect.none,
      ...theme.other.userDrag.none,
    },
  },
}))

export default function Technology() {
  const { classes } = useStyles()

  const ICON_SIZE = 28

  const IconImage = (props: ImageProps) => {
    /*
     * mimic tabler icons padding by reduce minor image size
     */
    // const CUSTOM_SIZE = ICON_SIZE - 5

    return <Image src={props.src} alt={props.alt} width={ICON_SIZE} height={ICON_SIZE} />
  }

  const Tech = (props: any) => {
    const { label, icon } = props
    return (
      <Group className={classes.iconWrapper} spacing="sm" my="xs">
        {typeof icon === 'string' ? <IconImage src={icon} /> : icon}

        <Text size="sm">{label}</Text>
      </Group>
    )
  }

  return (
    <Container className={classes.container} size="md" py="xl">
      <Title order={2} align="left">
        Loved
        <br />
        Technologies.
      </Title>

      <Space h="xl" />

      <Grid gutter={32}>
        <Grid.Col span={12} xs={5} sm={4}>
          <Title order={5} align="left">
            Programming Languages
          </Title>

          <Divider my="xs" />

          <SimpleGrid cols={1} spacing={0}>
            <Tech label="TypeScript" icon="/assets/technologies/cib-typescript.svg" />
            <Tech label="JavaScript" icon="/assets/technologies/cib-javascript.svg" />
            <Tech label="Python" icon="/assets/technologies/cib-python.svg" />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={12} xs={7} sm={8}>
          <Title order={5} align="left">
            Web Development
          </Title>

          <Divider my="xs" />

          <SimpleGrid cols={2} spacing={0}>
            <Tech label="React" icon={<IconImage src="/assets/technologies/cib-react.svg" />} />
            <Tech label="Next.js" icon="/assets/technologies/cib-next-js.svg" />
            <Tech label="Node.js" icon="/assets/technologies/cib-node-js.svg" />
            <Tech label="Framer Motion" icon="/assets/technologies/cib-framer.svg" />
            <Tech
              label="Mantine"
              icon={<IconBrandMantine size={ICON_SIZE} stroke={1.3} viewBox="2 2 20 20" />}
            />
            <Tech label="Scss" icon="/assets/technologies/cib-sass.svg" />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={12} xs={5} sm={4}>
          <Title order={5} align="left">
            Web 3
          </Title>

          <Divider my="xs" />

          <SimpleGrid cols={1} spacing={0}>
            <Tech label="Solana" icon="/assets/technologies/solana.svg" />
            <Tech label="NEAR Protocol" icon="/assets/technologies/near.svg" />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={12} xs={7} sm={8}>
          <Title order={5} align="left">
            Tools
          </Title>
          <Divider my="xs" />
          <SimpleGrid cols={2} spacing={0}>
            <Tech label="Cloudflare" icon="/assets/technologies/cib-cloudflare.svg" />
            <Tech label="Notion" icon="/assets/technologies/cib-notion.svg" />
            <Tech label="Figma" icon="/assets/technologies/cib-figma.svg" />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
