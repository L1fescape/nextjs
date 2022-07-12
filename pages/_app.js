import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  throw new Error('oh no')
  return <Component {...pageProps} />
}

export default MyApp
