import { FC, Fragment } from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { MantineProvider } from '@mantine/core'

import { SplashProvider } from '../contexts/SplashContext'
import { DefaultLayout } from '../components/DefaultLayout'

import CustomFonts from '../styles/CustomFonts'
import theme from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Korrawich Developer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="A developer portfolio website of Korrawich Khosripetch."
        />
      </Head>

      <SplashProvider>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <CustomFonts />
          <GlobalStyles />

          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </MantineProvider>
      </SplashProvider>
    </Fragment>
  )
}

export default MyApp
