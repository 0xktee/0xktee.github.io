import {
  ActionIcon,
  Container,
  CopyButton,
  createStyles,
  Grid,
  Group,
  Space,
  Text,
  Title,
  Tooltip,
} from '@mantine/core'
import { IconCheck, IconCopy, IconArrowUpRight } from '@tabler/icons-react'

import ButtonCustom from '../../ButtonCustom'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    ...theme.other.flexCenter,
  },
  button: {
    height: '56px',

    '.mantine-Button-inner': {
      justifyContent: 'space-between',
    },
  },
}))

export default function Contact() {
  const { classes } = useStyles()

  return (
    <Container className={classes.container} size="md">
      <Title order={2}>Get in touch.</Title>

      <Space h="xs" />

      <Text size="md">
        If you have something to discuss, please feel free to contact me at any time.
      </Text>

      <Space h={32} />

      <Grid grow>
        <Grid.Col span={12} xs={4} sm={4}>
          <ButtonCustom
            className={classes.button}
            rightIcon={<IconArrowUpRight size={20} />}
            fullWidth
            component="a"
            href="https://linkedin.com/in/korrawich-khosripetch"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </ButtonCustom>
        </Grid.Col>

        <Grid.Col span={12} xs={4} sm={4}>
          <ButtonCustom
            className={classes.button}
            rightIcon={<IconArrowUpRight size={20} />}
            fullWidth
            component="a"
            href="https://github.com/zkorra"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </ButtonCustom>
        </Grid.Col>

        <Grid.Col span={12} xs={4} sm={4}>
          <ButtonCustom
            className={classes.button}
            rightIcon={<IconArrowUpRight size={20} />}
            fullWidth
            component="a"
            href="https://zkorra.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </ButtonCustom>
        </Grid.Col>
      </Grid>

      <Space h={32} />

      <Text size="sm" weight={600}>
        Email
      </Text>

      <Group align="flex-end" spacing="xs">
        <Text size="xl">korrawich.kho@gmail.com</Text>
        <CopyButton value="korrawich.kho@gmail.com" timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Container>
  )
}