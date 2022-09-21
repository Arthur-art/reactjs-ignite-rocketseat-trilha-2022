import { globalStyles } from '../styles/global'
import logoSvg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <img src={logoSvg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
