import Header from '../components/Header'
import Head from 'next/head'
import Script from 'next/script'
import Sidenav1 from '../components/Sidenav1'
import Sidenav2 from '../components/Sidenav2'
import '@/styles/animateCharacter.css'
import { Nunito_Sans } from '@next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Analytics } from '@vercel/analytics/react';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return <main className={nunito.className}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="refresh" /> 
      <title>Aditya Patel</title>
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    <Header />
    <Sidenav1 />
    <Sidenav2 />
    <Component {...pageProps} />
    <Analytics />
  </main>
}
