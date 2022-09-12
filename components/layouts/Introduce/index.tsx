import Image from 'next/image'
import { Box, Container, Title, Text, Grid, createStyles, Space } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - ${theme.other.menuHeight})`,
    ...theme.other.flexCenter,
  },
  header: {
    // pointerEvents: 'none',
    // ...theme.other.userSelect.none,
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '120%',

    ...theme.other.userSelect.none,

    'svg, img': {
      ...theme.other.userDrag.none,
    },
  },
}))

export default function Introduce() {
  const { classes } = useStyles()

  return (
    <Container className={classes.container} size="sm">
      <Grid gutter="xl">
        <Grid.Col span={3} xs={3}>
          <Box className={classes.wrapper}>
            <Image src="/assets/stairway.svg" alt="stairway" layout="fill" />
          </Box>
        </Grid.Col>
        <Grid.Col span={12} xs={9}>
          <Title className={classes.header} order={1} size={64}>
            Korrawihc.
          </Title>

          <Space h={2} />

          <Text size="md" color="dimmed">
            /korrawich khosripetch/
          </Text>

          <Space h="lg" />

          <Text size="md">
            I am a front-end developer, passionate about building crazy stuff and bringing a great
            experience to normies.
          </Text>
        </Grid.Col>
      </Grid>

      <Space h={64} />
    </Container>
  )
}
