import type { MantineThemeOverride } from '@mantine/core'

const customComponents: MantineThemeOverride['components'] = {
  Button: {
    defaultProps: {
      radius: 'xl',
    },
  },
  Divider: {
    defaultProps: {
      color: '#333333',
    },
  },
}

export default customComponents
