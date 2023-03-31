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
  Box,
  Card,
} from '@mantine/core'
import Image, { ImageProps } from 'next/image'

const useStyles = createStyles((theme) => ({
  outer: {
    background: theme.colors.orenji,
  },
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
  card: {
    borderRadius: '0px',
    background: theme.colors.gray[2],
    boxShadow: `0px 0px 0px 1px black inset, -4px 4px 0px ${theme.colors.gray[3]}, -4px 4px 0px 1px black`,
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

    return (
      <Image src={props.src} alt={props.alt} width={ICON_SIZE} height={ICON_SIZE} priority={true} />
    )
  }

  const Tech = (props: any) => {
    const { label, icon } = props
    return (
      <Group className={classes.iconWrapper} spacing="sm" my="sm">
        {typeof icon === 'string' ? <IconImage src={icon} /> : icon}

        <Text size="md">{label}</Text>
      </Group>
    )
  }

  return (
    <Box className={classes.outer}>
      <Container className={classes.container} size="md" py="xl">
        <Title order={2} color="white">
          Worked on technologies
        </Title>

        <Space h="xs" />

        <Text size="md" color="white">
          These are some of the technologies that I have used for working on various projects.
        </Text>

        <Space h={32} />

        <Grid gutter={24}>
          <Grid.Col span={12} xs={5} sm={4}>
            <Card className={classes.card}>
              <Text align="left" size="sm" weight={500}>
                Programming Languages
              </Text>

              <Divider my="xs" />

              <SimpleGrid cols={1} spacing={0}>
                <Tech label="TypeScript" icon="/assets/technologies/cib-typescript.svg" />
                <Tech label="JavaScript" icon="/assets/technologies/cib-javascript.svg" />
                <Tech label="Python" icon="/assets/technologies/cib-python.svg" />
              </SimpleGrid>
            </Card>
          </Grid.Col>

          <Grid.Col span={12} xs={7} sm={8}>
            <Card className={classes.card}>
              <Text align="left" size="sm" weight={500}>
                Web Development
              </Text>

              <Divider my="xs" />

              <SimpleGrid cols={2} spacing={0}>
                <Tech label="React" icon="/assets/technologies/cib-react.svg" />
                <Tech label="Angular" icon="/assets/technologies/cib-angular.svg" />
                <Tech label="Next.js" icon="/assets/technologies/cib-next-js.svg" />
                <Tech label="Node.js" icon="/assets/technologies/cib-node-js.svg" />
                <Tech label="Scss" icon="/assets/technologies/cib-sass.svg" />
                <Tech label="Framer Motion" icon="/assets/technologies/cib-framer.svg" />
              </SimpleGrid>
            </Card>
          </Grid.Col>

          <Grid.Col span={12} xs={5} sm={4}>
            <Card className={classes.card}>
              <Text align="left" size="sm" weight={500}>
                Web3
              </Text>

              <Divider my="xs" />

              <SimpleGrid cols={1} spacing={0}>
                <Tech label="Solana" icon="/assets/technologies/solana.svg" />
                <Tech label="NEAR Protocol" icon="/assets/technologies/near.svg" />
              </SimpleGrid>
            </Card>
          </Grid.Col>

          <Grid.Col span={12} xs={7} sm={8}>
            <Card className={classes.card}>
              <Text align="left" size="sm" weight={500}>
                Tools
              </Text>
              <Divider my="xs" />
              <SimpleGrid cols={2} spacing={0}>
                <Tech label="Cloudflare" icon="/assets/technologies/cib-cloudflare.svg" />
                <Tech label="Notion" icon="/assets/technologies/cib-notion.svg" />
                <Tech label="Figma" icon="/assets/technologies/cib-figma.svg" />
              </SimpleGrid>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
