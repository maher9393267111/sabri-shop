
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <title>
            
        Tedili Mermer
            
            </title>
          <link rel="icon" href="/logo.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
