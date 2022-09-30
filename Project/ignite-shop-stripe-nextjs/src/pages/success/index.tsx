import Link from 'next/link'
import {
  SuccessContainer,
  SuccessImageContainer,
} from '../../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <SuccessImageContainer></SuccessImageContainer>

      <p>
        A sua camiseta <strong>Beyond the limits</strong> já está à caminho da
        sua casa!
      </p>

      <Link href="/">Voltar à página inicial.</Link>
    </SuccessContainer>
  )
}
