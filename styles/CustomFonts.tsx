import { Global } from '@mantine/core'

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/assets/fonts/GeneralSans-Regular.woff2') format("woff2")`,
            fontWeight: 400,
          },
        },
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/assets/fonts/GeneralSans-Medium.woff2') format("woff2")`,
            fontWeight: 500,
          },
        },
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/assets/fonts/GeneralSans-Semibold.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/assets/fonts/GeneralSans-Bold.woff2') format("woff2")`,
            fontWeight: 700,
          },
        },
        {
          '@font-face': {
            fontFamily: 'ZillaSlab',
            src: `url('/assets/fonts/ZillaSlab-SemiBold.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
      ]}
    />
  )
}
