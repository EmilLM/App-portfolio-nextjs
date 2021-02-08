import Head from 'next/head';
import globalStyle from '../components/v5/global.module.scss';
import Header from '../components/v5/Header/Header.jsx';
import About from '../components/v5/About/About.jsx';

import {useRef} from 'react';

export default function Waves() {

  const aboutRef = useRef(null);
  const scrollToRef = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Head>
        <title>Glassmorphism</title>
      </Head>
      <main className={globalStyle.v2}>
        <Header scrollToRef={scrollToRef}/>
        {/* <About aboutRef={aboutRef}/> */}
      </main>
    </>
  )
}
