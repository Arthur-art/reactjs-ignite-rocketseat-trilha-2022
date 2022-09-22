import Image from 'next/future/image'
import shirt1 from '../assets/1.png'
import shirt2 from '../assets/2.png'
import shirt3 from '../assets/3.png'
import shirt4 from '../assets/4.png'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {JSON.stringify(props.list)}
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={shirt1} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={shirt2} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={shirt3} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={shirt4} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    props: {
      list: [1, 2, 3, 4, 5],
    },
  }
}
