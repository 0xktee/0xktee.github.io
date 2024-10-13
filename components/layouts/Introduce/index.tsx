import Image from "next/image";

import { useWindowScroll } from "@mantine/hooks";
import {
  Box,
  Container,
  Title,
  Text,
  Grid,
  createStyles,
  Space,
  Button,
} from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    // paddingBottom: '120%',
    overflow: "hidden",

    borderRadius: "1024px",

    ...theme.other.userSelect.none,

    "svg, img": {
      ...theme.other.userDrag.none,
    },
  },
  button: {
    transition: "background 0.2s, color 0.1s",

    background: theme.colors.bgDark,

    color: "white",

    fontWeight: 400,
    border: "none",

    borderRadius: "0px",

    ":hover": {
      background: "black",
      color: "white",
    },
  },
}));

export default function Introduce() {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Container size="md">
      <Grid columns={24} align="center">
        <Grid.Col span={24} xs={24} sm={24} md={17}>
          <Title order={1}>
            Heya, I&apos;m Tee.
            <br />A <i>Full Stack Developer</i>.
          </Title>

          <Space h="xs" />

          <Text size="md">
            I&apos;m a developer with experienced in both frontend and backend,
            passionate about creating buttery-smooth user experiences and some
            random stuff.
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
        <Grid.Col span={9} xs={8} sm={6} md={6} offsetMd={1}>
          <Box className={classes.wrapper}>
            <Image
              src="/assets/me.webp"
              alt="knwch"
              layout="fill"
              priority={true}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
