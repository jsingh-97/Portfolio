import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jaswinder Singh's | Portfolio</title>
      </Head>
      <Header />
      </div>
      
  )
}
