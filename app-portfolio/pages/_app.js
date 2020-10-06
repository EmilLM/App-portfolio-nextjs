import '../styles/globals.css'
import "../styles/main.scss"
import {useState} from 'react';
// required import to prevent prerendered icon before css loads
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from "next/head"
import MiscContext from "../components/MiscContext.jsx"


function MyApp({ Component, pageProps }) {

  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState(false);
  return (<>
    <Head>
      <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>
    <MiscContext.Provider value={{animate, setAnimate, theme, setTheme}}>
      <Component {...pageProps} />
    </MiscContext.Provider>
  </>)
}

export default MyApp
