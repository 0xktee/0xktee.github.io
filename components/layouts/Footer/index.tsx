import { Box, Text, createStyles } from '@mantine/core'
import { IconCup } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.dark[8],

    textAlign: 'center',
    color: 'white',
  },
  icon: {
    verticalAlign: 'text-top',

    marginLeft: '4px',
    marginRight: '4px',
  },
  link: {
    textDecoration: 'none',

    '&:hover': {
      color: 'black',
      backgroundColor: theme.colors.lime,
    },
  },
}))

export default function Footer() {
  const { classes } = useStyles()

  return (
    <Box className={classes.container} py="md">
      <footer>
        <Text>
          Made with
          <IconCup size={18} className={classes.icon} />
          by
          <Text
            component="a"
            className={classes.link}
            weight={600}
            px={4}
            href="https://github.com/knwch"
            target="_blank"
            rel="noreferrer"
          >
            knwch.
          </Text>
        </Text>
      </footer>
    </Box>
  )
}
