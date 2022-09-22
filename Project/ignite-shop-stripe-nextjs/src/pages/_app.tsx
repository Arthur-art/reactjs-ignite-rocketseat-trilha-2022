import { globalStyles } from '../styles/global'
import Image from 'next/future/image'
import logoSvg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image width={200} height={200} src={logoSvg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
