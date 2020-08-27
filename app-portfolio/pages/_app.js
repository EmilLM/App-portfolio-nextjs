import '../styles/globals.css'
import "../styles/main.scss"
// required import to prevent prerendered icon before css loads
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
