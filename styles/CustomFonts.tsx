import { Global } from '@mantine/core'

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'LINE Seed Sans',
            src: `url('/assets/fonts/LINESeedSans_W_Rg.woff2') format("woff2")`,
            fontWeight: 400,
          },
        },
        {
          '@font-face': {
            fontFamily: 'LINE Seed Sans',
            src: `url('/assets/fonts/LINESeedSans_W_Bd.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
        {
          '@font-face': {
            fontFamily: 'LINE Seed Sans',
            src: `url('/assets/fonts/LINESeedSans_W_XBd.woff2') format("woff2")`,
            fontWeight: 700,
          },
        },
      ]}
    />
  )
}
