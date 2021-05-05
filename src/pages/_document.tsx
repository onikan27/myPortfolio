import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

// interface Props {}
class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <title>Portfolio-Onikan</title>
          <meta property="og:title" content="Portfolio-Onikan" />
          <meta
            property="og:description"
            content="秋野のポートフォリオです。"
          />
          <meta property="og:type" content="blog" />
          <meta property="og:url" content="https://onikan.com/" />
          <meta property="og:image" content="/portfolio.png" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:site_name" content="Portfolio-Onikan" />
          <meta name="twitter:site" content="@1027_onikan" />
          <meta name="twitter:title" content="Portfolio-Onikan" />
          <meta
            name="twitter:description"
            content="秋野のポートフォリオです。"
          />
          <meta name="twitter:image" content="/portfolio.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
