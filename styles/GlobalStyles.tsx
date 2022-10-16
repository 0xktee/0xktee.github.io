import { Global, MantineTheme } from '@mantine/core'
import { NOISE } from './keyframes'

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme: MantineTheme) => ({
        body: {
          position: 'relative',

          margin: 0,

          backgroundColor: theme.colors.bgLight,

          textRendering: 'geometricPrecision',
          WebkitFontSmoothing: 'subpixel-antialiased',
          MozOsxFontSmoothing: 'grayscale',

          scrollBehavior: 'smooth',

          '&::before': {
            content: '""',
            zIndex: 50,
            backgroundImage: `url(${'/assets/background-noise.png'})`,
            minHeight: '100%',
            width: '100%',

            position: 'absolute',
            top: 0,
            left: 0,

            animation: `0.2s infinite ${NOISE}`,
            pointerEvents: 'none',
          },
        },

        '::selection': {
          background: theme.colors.orenji,
          color: 'white',
        },
      })}
    />
  )
}
