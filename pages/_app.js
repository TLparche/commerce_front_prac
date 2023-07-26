import {createGlobalStyle} from 'styled-components'
import {SessionProvider} from 'next-auth/react'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
`
export default function App({ Component, pageProps: {session, ...pageProps}, }) {
  return(
      <SessionProvider session={session}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
  )
}
