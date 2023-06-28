import Image from 'next/image'

import { useWindowScroll } from '@mantine/hooks'
import { Box, Container, Title, Text, Grid, createStyles, Space, Button } from '@mantine/core'
import { IconArrowDown } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  outer: {
    background: theme.colors.orenji,

    '::selection': {
      background: 'red',
      color: 'white',
    },
  },
  container: {
    minHeight: `calc(80vh - ${theme.other.menuHeight})`,
    ...theme.other.flexCenter,

    color: 'white',
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
  button: {
    transition: 'background 0.2s, color 0.1s',

    background: theme.colors.bgDark,

    color: 'white',

    fontWeight: 500,
    border: 'none',

    borderRadius: '0px',

    ':hover': {
      background: 'black',
      color: 'white',
    },
  },
}))

export default function Introduce() {
  const { classes } = useStyles()
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box className={classes.outer}>
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

            <Space h="xs" />

            <Text size="md">
              I&apos;m a developer who is always learning things. Experienced in working with both
              frontend and backend. Focused on following the best practices for building stuff.
            </Text>

            <Space h="xl" />

            <Button
              className={classes.button}
              variant="default"
              onClick={() => scrollTo({ y: 5000 })}
              rightIcon={<IconArrowDown size={15} />}
            >
              Get in touch
            </Button>
          </Grid.Col>
        </Grid>

        <Space h={64} />
      </Container>
    </Box>
  )
}
