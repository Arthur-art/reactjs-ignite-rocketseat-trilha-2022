import Image from 'next/future/image'
import shirt1 from '../assets/1.png'
import shirt2 from '../assets/2.png'
import shirt3 from '../assets/3.png'
import shirt4 from '../assets/4.png'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

type ProductsType = {
  id: string
  name: string
  imageUrl: string
  url: string
  price: number
}

interface HomeProps {
  products: ProductsType[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image
              width={520}
              height={480}
              src={product.imageUrl}
              alt="shirt"
            />
            <footer>
              <strong>{product.name}</strong>
              <span> R$ {product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
