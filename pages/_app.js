import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    @media screen and (max-width: 1007px) {
    }

    @media screen and (max-width: 640px) {
      font-size: 15px;
    }
  }
  

  h1 {
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 1007px) {
    }

    @media screen and (max-width: 640px) {
      font-size: 20px;
    }
  }


  h2 {
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 1007px) {
    }

    @media screen and (max-width: 640px) {
      font-size: 20px;
    }
  }


  h3 {
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 1007px) {

    }

    @media screen and (max-width: 640px) {
      font-size: 15px;
    }
  }

  p {
    @media screen and (max-width: 1007px) {
    }

    @media screen and (max-width: 640px) {
      font-size: 12px;
    }
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>Blenda Fröjdh</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
