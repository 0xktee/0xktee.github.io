import { Container, createStyles, Space, Text, Title } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    ...theme.other.flexCenter,

    textAlign: 'justify',
  },
}))

export default function About() {
  const { classes } = useStyles()

  return (
    <Container className={classes.container} size="xs">
      <Title order={2}>About Myself.</Title>

      <Space h="xs" />
      <Text size="md">
        Heya, I&apos;m Tee, a junior developer who loves learning and building cool stuff. My
        journey started in high school with C programming class. I really enjoy problem-solving and
        logical thinking, at that time my journey in tech is just getting started.
      </Text>

      <Space h="sm" />
      <Text size="md">
        After I graduated with a bachelor&apos;s degree in Applied Computer Science in 2021. I&apos;m driven by a passion for Web3 and successfully launched my own NFT project from
        scratch. I also had fun building utility products for users in the space.
      </Text>

      <Space h="sm" />
      <Text size="md">
        In order to grow my career as a developer and fulfilling my passion for technology, Joining
        and learning with a talented team at technology companies that create software solutions
        that positively impact people is perfect for me.
      </Text>
    </Container>
  )
}
