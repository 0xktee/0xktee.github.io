import type { MantineThemeOverride } from '@mantine/core'

const customComponents: MantineThemeOverride['components'] = {
  Button: {
    defaultProps: {
      radius: 'xl',
    },
  },
  Divider: {
    defaultProps: {
      color: 'black',
    },
  },
}

export default customComponents
