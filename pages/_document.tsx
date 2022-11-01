import { createGetInitialProps } from '@mantine/next'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* Cloudflare Web Analytics */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": ${process.env.CFWA_TOKEN}`}
          />
          {/* End Cloudflare Web Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
