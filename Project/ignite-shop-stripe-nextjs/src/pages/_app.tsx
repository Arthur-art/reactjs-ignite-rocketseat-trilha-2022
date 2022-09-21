import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
