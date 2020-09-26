import Head from 'next/head'
import Content from '../components/content/Content'
import NavBar from '../components/Nav/NavBar'
import projects from "../projectsData"

export default function Home({projects}) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <NavBar/>
      <Content projects={projects}/>
    </>
  )
}

export async function getStaticProps() {
    return {props: {projects}}
}
