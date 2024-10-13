import { motion } from "framer-motion";
import { createStyles, Button, Navbar, Text, Box } from "@mantine/core";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  navbar: {
    // overflow: 'hidden',
    backgroundColor: theme.colors.main,

    borderColor: "black",
    borderWidth: "2px",

    color: "black",

    ...theme.other.userSelect.none,
  },
  logo: {
    position: "absolute",
    top: theme.spacing.xl,
    left: "50%",
    transform: "translateX(-50%)",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "rotate(-90deg) translate(-50%,-50%)",
    transformOrigin: "0 0",

    whiteSpace: "nowrap",
  },
  button: {
    transition: "background 0.2s, color 0.1s",

    position: "absolute",
    bottom: theme.spacing.xl,
    left: "50%",
    transform: "rotate(-90deg) translateY(50%)",
    transformOrigin: "bottom left",

    // borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: "2px",
    color: "black",

    ":hover": {
      backgroundColor: "black",
      color: "white",
    },

    ":active": {
      transform: "rotate(-90deg) translateY(50%)",
    },
  },
}));

export default function LeftBar() {
  const { classes } = useStyles();

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
            transition: { repeat: Infinity, duration: 1, ease: "linear" },
          }}
        >
          <Image
            src="/assets/penguin_1f427.webp"
            alt="penguin"
            width={28}
            height={28}
          />
        </motion.div>
      </Box>
      <Text className={classes.text} weight={600}>
        korrawich khosripetch
      </Text>
      <Button
        className={classes.button}
        variant="outline"
        component="a"
        href="https://github.com/0xktee"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Button>
    </Navbar>
  );
}
