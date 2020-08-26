import '../styles/globals.css'
import "../styles/main.scss"
// required import to prevent prerendered icon before css loads
import '@fortawesome/fontawesome-svg-core/styles.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
