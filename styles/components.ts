import type { MantineThemeOverride } from '@mantine/core'

const customComponents: MantineThemeOverride['components'] = {
  Button: {
    defaultProps: {
      radius: 'xl',
    },
  },
  Divider: {
    defaultProps: {
      color: 'gray.3',
    },
  },
}

export default customComponents
