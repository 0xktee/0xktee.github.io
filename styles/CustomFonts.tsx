import { Global } from '@mantine/core'

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'RedHat Text',
            src: `url('/assets/fonts/RedHatText-Regular.woff2') format("woff2")`,
            fontWeight: 400,
          },
        },
        {
          '@font-face': {
            fontFamily: 'RedHat Text',
            src: `url('/assets/fonts/RedHatText-Medium.woff2') format("woff2")`,
            fontWeight: 500,
          },
        },
        {
          '@font-face': {
            fontFamily: 'RedHat Text',
            src: `url('/assets/fonts/RedHatText-Bold.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
        {
          '@font-face': {
            fontFamily: 'RedHat Display',
            src: `url('/assets/fonts/RedHatDisplay-Medium.woff2') format("woff2")`,
            fontWeight: 500,
          },
        },
        {
          '@font-face': {
            fontFamily: 'RedHat Display',
            src: `url('/assets/fonts/RedHatDisplay-Bold.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
      ]}
    />
  )
}
