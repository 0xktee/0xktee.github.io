import { MantineThemeOverride } from '@mantine/core'
import customComponents from './components'

const theme: MantineThemeOverride = {
  // Defines color scheme for all components, defaults to "light"
  colorScheme: 'light',

  // Default border-radius used for most elements
  defaultRadius: '8px',

  // Object of arrays with 10 colors
  colors: {
    lime: ['#d7fe38'],
    main: ['#ffd43d'],
    orenji: ['#0062ff'],
    bgLight: ['#efefef'],
    bgDark: ['#333333'],
  },

  // Should be key of theme.colors, cannot be actual color value
  primaryColor: 'dark',

  // font-family and line-height used in most components
  fontFamily:
    'LINE Seed Sans, Helvetica, Arial, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, sans-serif',
  fontSizes: {
    xs: 14,
    sm: 16,
    md: 18,
  },

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    fontFamily: 'LINE Seed Sans, sans-serif',

    sizes: {
      h1: { fontSize: 48, fontWeight: 600 },
      h2: { fontSize: 36, fontWeight: 400 },
    },
  },

  other: {
    menuHeight: '64px',

    flexCenter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    userDrag: {
      none: {
        WebkitUserDrag: 'none',
        KhtmlUserDrag: 'none',
        MozUserDrag: 'none',
        OUserDrag: 'none',
        userDrag: 'none',
      },
    },

    userSelect: {
      none: {
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none',
      },
    },
  },

  components: customComponents,
}

export default theme
