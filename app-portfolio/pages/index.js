import Head from 'next/head'
import Content from '../components/Content/Content.jsx'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import projects from "../projectsData"


export default function Home({projects}) {
  
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <Content projects={projects}/>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
    return {props: {projects}}
}
