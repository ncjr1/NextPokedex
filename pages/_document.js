// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
           href="../assets/Fonts/Pokemon.ttf"
           rel="stylesheet"
         />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}