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
} from '@mantine/core'
import Image, { ImageProps } from 'next/image'

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    'svg, img': {
      ...theme.other.userSelect.none,
      ...theme.other.userDrag.none,
    },
  },
  // card: {
  //   borderRadius: '0px',
  //   background: theme.colors.gray[2],
  //   boxShadow: `0px 0px 0px 1px black inset, -4px 4px 0px ${theme.colors.gray[3]}, -4px 4px 0px 1px black`,
  // },
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

        <Text size="sm">{label}</Text>
      </Group>
    )
  }

  return (
    <Container size="md">
      <Title order={3} weight={600}>
        Worked on technologies
      </Title>

      <Space h="xs" />

      <Text size="md">
        These are some of the technologies that I have used for working on various projects.
      </Text>

      <Space h={32} />

      <Grid gutter={32}>
        <Grid.Col span={12} xs={5} sm={4}>
          <Box>
            <Text align="left" size="xs" weight={600}>
              Programming Languages
            </Text>
            <Divider size={2} my="xs" />
            <SimpleGrid cols={1} spacing={0}>
              <Tech label="TypeScript" icon="/assets/technologies/cib-typescript.svg" />
              <Tech label="JavaScript" icon="/assets/technologies/cib-javascript.svg" />
              <Tech label="Java" icon="/assets/technologies/cib-java.svg" />
              <Tech label="Python" icon="/assets/technologies/cib-python.svg" />
            </SimpleGrid>
          </Box>
        </Grid.Col>

        <Grid.Col span={12} xs={7} sm={8}>
          <Box>
            <Text align="left" size="xs" weight={600}>
              Web Development
            </Text>
            <Divider size={2} my="xs" />
            <SimpleGrid cols={2} spacing={0}>
              <Tech label="React" icon="/assets/technologies/cib-react.svg" />
              <Tech label="Angular" icon="/assets/technologies/cib-angular.svg" />
              <Tech label="Next.js" icon="/assets/technologies/cib-next-js.svg" />
              <Tech label="Spring Boot" icon="/assets/technologies/cib-spring.svg" />
              <Tech label="Node.js" icon="/assets/technologies/cib-node-js.svg" />
              <Tech label="Scss" icon="/assets/technologies/cib-sass.svg" />
              <Tech label="Framer Motion" icon="/assets/technologies/cib-framer.svg" />
            </SimpleGrid>
          </Box>
        </Grid.Col>

        <Grid.Col span={12} xs={5} sm={4}>
          <Box>
            <Text align="left" size="xs" weight={600}>
              Web3
            </Text>
            <Divider size={2} my="xs" />
            <SimpleGrid cols={1} spacing={0}>
              <Tech label="Solana" icon="/assets/technologies/solana.svg" />
              <Tech label="NEAR Protocol" icon="/assets/technologies/near.svg" />
            </SimpleGrid>
          </Box>
        </Grid.Col>

        <Grid.Col span={12} xs={7} sm={8}>
          <Box>
            <Text align="left" size="xs" weight={600}>
              Tools
            </Text>
            <Divider size={2} my="xs" />
            <SimpleGrid cols={2} spacing={0}>
              <Tech label="Cloudflare" icon="/assets/technologies/cib-cloudflare.svg" />
              <Tech label="Postman" icon="/assets/technologies/cib-postman.svg" />
              <Tech label="Figma" icon="/assets/technologies/cib-figma.svg" />
            </SimpleGrid>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
