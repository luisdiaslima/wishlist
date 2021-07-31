import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import AppProvider from '../hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>

        <Component {...pageProps} />
      </Layout> 
    </AppProvider>

  )
}
export default MyApp
