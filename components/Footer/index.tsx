import { Fragment } from 'react'
import Image from 'next/image'

import { Box, Text, createStyles, Divider } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 80,

    background: theme.colors.bgDark,
    borderColor: 'black',

    textAlign: 'center',
    color: theme.colors.bgLight,

    ...theme.other.userSelect.none,
  },
  icon: {
    verticalAlign: 'sub',

    marginLeft: '4px',
    marginRight: '4px',
  },
  link: {
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.colors.orenji,
      color: 'white',
    },
  },
}))

export default function Footer() {
  const { classes } = useStyles()

  return (
    <Fragment>
      <Divider />
      <Box className={classes.container} py="md">
        <footer>
          <Text>
            Made with
            <Box component="span" className={classes.icon}>
              <Image src="/assets/chocolate-bar.webp" alt="chocolate bar" width={20} height={20} />
            </Box>
            by
            <Text
              component="a"
              className={classes.link}
              weight={600}
              px={4}
              href="https://github.com/zkorra"
              target="_blank"
              rel="noreferrer"
            >
              zkorra.
            </Text>
          </Text>
        </footer>
      </Box>
    </Fragment>
  )
}
