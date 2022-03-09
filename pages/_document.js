import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-96HW8XQYYP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-96HW8XQYYP');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}