import Head from 'next/head'
import Content from '../components/content/Content'
import NavBar from '../components/Nav/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <NavBar/>
      <Content/>
    </>
  )
}
