import Head from 'next/head'
import Content from '../components/Content/Content.jsx'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <Content />
      <Footer/>
    </>
  )
}
