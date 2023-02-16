import { motion } from 'framer-motion'
import { createStyles, Button, Navbar, Text, Box } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  navbar: {
    // overflow: 'hidden',
    backgroundColor: theme.colors.bgDark,
    borderColor: 'black',

    color: 'white',
    fontSize: '18px',

    ...theme.other.userSelect.none,
  },
  logo: {
    position: 'absolute',
    top: theme.spacing.xl,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'rotate(-90deg) translate(-50%,-50%)',
    transformOrigin: '0 0',

    ...theme.other.font.display,
    fontWeight: 600,

    whiteSpace: 'nowrap',
  },
  button: {
    transition: 'background 0.2s, color 0.1s',

    position: 'absolute',
    bottom: theme.spacing.xl,
    left: '50%',
    transform: 'rotate(-90deg) translateY(50%)',
    transformOrigin: 'bottom left',

    borderColor: 'rgba(255, 255, 255, 0.35)',
    color: 'white',
    fontWeight: 500,

    ':hover': {
      backgroundColor: theme.colors.orenji,
      borderColor: theme.colors.orenji,

      color: 'white',
    },

    ':active': {
      transform: 'rotate(-90deg) translateY(50%)',
    },
  },
}))

export default function LeftBar() {
  const { classes } = useStyles()

  return (
    <Navbar
      className={classes.navbar}
      width={{ base: 0, xs: 0, sm: 72 }}
      height="100vh"
      hiddenBreakpoint="sm"
      hidden={true}
    >
      <Box component="span" className={classes.logo}>
        <motion.div
          style={{
            height: 28,
            originY: 0.6,
          }}
          whileHover={{
            rotate: 360,
            transition: { repeat: Infinity, duration: 1, ease: 'linear' },
          }}
        >
          <Image src="/assets/chocolate-bar.webp" alt="chocolate bar" width={28} height={28} />
        </motion.div>
      </Box>
      <Text className={classes.text}>korrawich khosripetch</Text>
      <Button
        className={classes.button}
        variant="outline"
        component="a"
        href="https://github.com/zkorra"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Button>
    </Navbar>
  )
}
