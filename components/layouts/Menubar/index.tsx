import {
  Container,
  createStyles,
  Group,
  Header,
  useMantineTheme,
  Text,
  Divider,
  Button,
} from '@mantine/core'
import { IconArrowUpRight } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  outer: {
    background: 'transparent',

    border: 'none',

    position: 'sticky',
    top: 0,
  },
  inner: {
    height: theme.other.menuHeight,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    background: theme.colors.bgLight,

    border: '1px solid black',
    boxShadow: '0px 4px 0px black',

    ...theme.other.userSelect.none,

    'a, img': { ...theme.other.userDrag.none },
  },
  logo: {
    ...theme.other.font.serif,
    fontSize: '1.9rem',
  },
  divider: {
    height: theme.other.menuHeight,
  },
  button: {
    height: theme.other.menuHeight,

    fontWeight: 500,

    border: '1px solid black',
    borderRight: 'none',
    borderRadius: 0,

    '&:hover': {
      background: theme.colors.lime,
    },
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
    <Header className={classes.outer} height={other.menuHeight} pt="lg" mx="lg">
      <Container className={classes.inner} size="xl" px={0}>
        <Group spacing="md" px="md">
          <Text className={classes.logo}>k.</Text>
          <Divider className={classes.divider} orientation="vertical" color="black" />
        </Group>

        <Group spacing={0} px={0} sx={{ background: 'green' }}>
          <ButtonNavigator href="https://linkedin.com/in/knwch">LinkedIn</ButtonNavigator>

          <ButtonNavigator href="https://github.com/knwch">Github</ButtonNavigator>
        </Group>
      </Container>
    </Header>
  )
}
