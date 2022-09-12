import { Global } from '@mantine/core'

export default function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Airbnb Cereal',
            src: `url('/assets/fonts/AirbnbCerealBook.woff') format("woff")`,
            fontWeight: 400,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Airbnb Cereal',
            src: `url('/assets/fonts/AirbnbCerealMedium.woff') format("woff")`,
            fontWeight: 500,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Airbnb Cereal',
            src: `url('/assets/fonts/AirbnbCerealBold.woff') format("woff")`,
            fontWeight: 600,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Airbnb Cereal',
            src: `url('/assets/fonts/AirbnbCerealExtraBold.woff') format("woff")`,
            fontWeight: 700,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lora',
            src: `url('/assets/fonts/Lora-SemiBold.woff2') format("woff2")`,
            fontWeight: 600,
          },
        },
      ]}
    />
  )
}
