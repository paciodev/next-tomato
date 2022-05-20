import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <Head>
        <title>Tomato Search Engine</title>
        <meta name="description" content="Tomato search engine made by Pacio with Next.js" />
        <link rel="icon" href="/tomato.png" />
      </Head>

      <Header />
      <Body />
      <Footer />
    </div>
  )
}
