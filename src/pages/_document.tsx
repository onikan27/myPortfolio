import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

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
          <meta property="og:description" content="Akino's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://onikan.com/" />
          <meta
            property="og:image"
            content="https://onikan-portfolio.s3-ap-northeast-1.amazonaws.com/portfolio.png"
          />
          <meta
            name="twitter:url"
            content="https://onikan-portfolio.s3-ap-northeast-1.amazonaws.com/portfolio.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:site_name" content="Portfolio-Onikan" />
          <meta name="twitter:site" content="@1027_onikan" />
          <meta name="twitter:title" content="Portfolio-Onikan" />
          <meta name="twitter:description" content="I'm Akino" />
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
