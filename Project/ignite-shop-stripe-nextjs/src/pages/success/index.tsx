import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  SuccessContainer,
  SuccessImageContainer,
} from '../../styles/pages/success'

interface SuccessProps {
  custummerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ custummerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <SuccessImageContainer>
        <Image
          width={120}
          height={110}
          src={product.imageUrl}
          alt="productImage"
        />
      </SuccessImageContainer>

      <p>
        Sucesso <strong> {custummerName}, </strong>o seu produto{' '}
        <strong>{product.name}</strong> já está à caminho da sua casa!
      </p>

      <Link href="/">Voltar à página inicial.</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const custummerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      custummerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
