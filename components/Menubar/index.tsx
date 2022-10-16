import { Container, createStyles, Group, Header, useMantineTheme, Button } from '@mantine/core'

import { IconArrowUpRight } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  outer: {
    transition: 'background 0.1s, padding 0.3s, box-shadow 0.5s',

    position: 'relative',
    background: 'transparent',

    border: 'none',
  },
  inner: {
    height: theme.other.menuHeight,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    ...theme.other.userSelect.none,

    'a, img': { ...theme.other.userDrag.none },
  },
  button: {
    transition: 'background 0.2s, color 0.1s',

    background: 'transparent',

    fontWeight: 500,
    border: 'none',

    ':hover': {
      background: theme.colors.orenji,
      color: 'white',
    },
  },
  buttonLogo: {
    background: 'transparent',

    ...theme.other.font.serif,
    fontSize: '1.5rem',
    color: theme.colors.orenji,

    border: 'none',
    borderRadius: 0,

    pointerEvents: 'none',
  },
}))

export default function MenuBar() {
  const { classes } = useStyles()
  const { other } = useMantineTheme()

  const ButtonNavigator = (props: any) => {
    const { children, href } = props

    return (
      <Button
        className={classes.button}
        variant="default"
        component="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        rightIcon={<IconArrowUpRight size={15} />}
      >
        {children}
      </Button>
    )
  }

  return (
    <Header className={classes.outer} height={other.menuHeight} pt="md">
      <Container className={classes.inner} size="md">
        <Button className={classes.buttonLogo} variant="default">
          zkorra.
        </Button>

        <Group spacing="xs" px={0}>
          <ButtonNavigator href="https://linkedin.com/in/korrawichk">LinkedIn</ButtonNavigator>

          <ButtonNavigator href="https://github.com/zkorra">Github</ButtonNavigator>
        </Group>
      </Container>
    </Header>
  )
}
