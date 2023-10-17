import Link from 'next/link'
import { Container, createStyles, Text, Space } from '@mantine/core'

import ButtonCustom from '../components/ButtonCustom'

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - ${theme.other.menuHeight})`,

    ...theme.other.flexCenter,
    alignItems: 'center',
    textAlign: 'center',
  },
}))

export default function NotFoundPage() {
  const { classes } = useStyles()

  return (
    <Container className={classes.container} size="xs">
      <Text size={90} weight={600}>
        404
      </Text>
      <Text size="md">Oh no! Somethings gone missing...</Text>

      <Space h="xl" />

      <Link href="/" passHref>
        <ButtonCustom>Back to Home</ButtonCustom>
      </Link>
    </Container>
  )
}
