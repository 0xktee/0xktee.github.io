import { Container, createStyles, Space, Text, Title } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    ...theme.other.flexCenter,
  },
}))

export default function About() {
  const { classes } = useStyles()

  return (
    <Container className={classes.container} size="xs">
      <Title order={2}>About myself</Title>

      <Space h="xl" />

      <Text size="md">
        I&apos;m a developer with a keen interest in learning new technologies and gaining
        experience in the industry. I&apos;m capable of working with various programming languages
        and tools. My technical skills include web development, decentralized application
        development, and machine learning.
      </Text>

      <Space h="md" />
      <Text size="md">
        I&apos;m passionate about following the best practices to ensure I&apos;m building stuff
        correctly and providing the best solutions possible. Also, loving following industry trends
        to adapt myself and catch up on cool stuff.
      </Text>

      <Space h="md" />
      <Text size="md">
        Always looking for the opportunities to challenge myself and expand my knowledge.
      </Text>
    </Container>
  )
}
