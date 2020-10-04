import '../styles/globals.css'
import "../styles/main.scss"
// required import to prevent prerendered icon before css loads
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from "next/head"
import MiscContext from "../components/MiscContext.jsx"


function MyApp({ Component, pageProps }) {

  const [animate, setAnimate] = React.useState(false);
  return (<>
    <Head>
      <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>
    <MiscContext.Provider value={{animate, setAnimate}}>
      <Component {...pageProps} />
    </MiscContext.Provider>
  </>)
}

export default MyApp
