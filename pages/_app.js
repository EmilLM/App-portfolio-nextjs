import '../styles/globals.css'
import "../styles/main.scss"

import {useState, useEffect} from 'react';
// required import to prevent prerendered icon before css loads
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from "next/head"
import MiscContext from "../components/MiscContext.jsx";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

function MyApp({ Component, pageProps}) {
  
  
  // const {animateCookie, themeCookie} = cookies;
  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState(false);
 

  // Cookies.set('animateCookie', animate);
  // useEffect(()=> {
  //   Cookies.set('animateCookie', animate);
  //   setAnimate(()=> JSON.parse(Cookies.get('animateCookie')))
    
  // }, [animate]);

  // useEffect(()=>{
  //   setAnimate( ()=>JSON.parse(Cookies.get('animateCookie')))
  // }, [])

  // useEffect(()=> {
  //   Cookies.set('themeCookie', theme);
  // }, [theme]);



  return (
    <>
      <Head>
        <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <MiscContext.Provider value={{animate, setAnimate, theme, setTheme}}>
        <Component {...pageProps} />
      </MiscContext.Provider>
    </>
  ) 
}

export default MyApp


// MyApp.getInitialProps = ({ req }) => {
//   const cookies = new Cookies(req.headers.cookie);
  
//   // const cookies = parseCookies(req);

//   return {
//      cookies
//   };
// };