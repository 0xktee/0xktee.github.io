import { FC, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../styles/theme'

import { SplashProvider } from '../contexts/splashcontext'
import { DefaultLayout } from '../components/DefaultLayout'

import '../styles/index.scss'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Korrawich Developer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="A developer portfolio website of Korrawich Khosripetch."
        />
      </Head>

      <SplashProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </SplashProvider>
    </>
  )
}

export default MyApp
