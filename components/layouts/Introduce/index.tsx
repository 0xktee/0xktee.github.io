import Image from 'next/image'

import { useWindowScroll } from '@mantine/hooks'
import { Box, Container, Title, Text, Grid, createStyles, Space } from '@mantine/core'

import ButtonCustom from '../../ButtonCustom'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - ${theme.other.menuHeight})`,
    ...theme.other.flexCenter,
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    // paddingBottom: '120%',
    overflow: 'hidden',

    borderRadius: '1024px',

    ...theme.other.userSelect.none,

    'svg, img': {
      ...theme.other.userDrag.none,
    },
  },
}))

export default function Introduce() {
  const { classes } = useStyles()
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Container className={classes.container} size="md" pb="md">
      <Grid columns={24} align="center" px="md">
        <Grid.Col span={9} xs={8} sm={6} md={6}>
          <Box className={classes.wrapper}>
            <Image src="/assets/me.webp" alt="knwch" layout="fill" priority={true} />
          </Box>
        </Grid.Col>
        <Grid.Col span={24} xs={24} sm={24} md={17} offsetMd={1}>
          <Title order={1}>
            Heya, I&apos;m Tee.
            <br />A <i>Web Developer</i>.
          </Title>

          {/* <Space h="lg" />

          <Text size="md" color="dimmed">
            /korrawich khosripetch/
          </Text> */}

          <Space h="xs" />

          <Text size="md">
            I&apos;m a junior developer, who love learning and building stuff. I have a passion to
            bring a wonderful experience for people through technology. I&apos;m based in Thailand.
          </Text>

          <Space h="xl" />

          <ButtonCustom variant="outline" onClick={() => scrollTo({ y: 5000 })}>
            Reach me
          </ButtonCustom>
        </Grid.Col>
      </Grid>

      <Space h={64} />
    </Container>
  )
}
