import Image from 'next/future/image'
import shirt1 from '../assets/1.png'
import shirt2 from '../assets/2.png'
import shirt3 from '../assets/3.png'
import shirt4 from '../assets/4.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image width={520} height={480} src={shirt1} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image width={520} height={480} src={shirt2} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image width={520} height={480} src={shirt3} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image width={520} height={480} src={shirt4} alt="shirt" />
        <footer>
          <strong>Camiseta X</strong>
          <span> R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
