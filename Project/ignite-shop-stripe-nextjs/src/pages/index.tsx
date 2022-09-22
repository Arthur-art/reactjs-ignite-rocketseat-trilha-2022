import { styled } from '../styles'

const Button = styled('button', {
  background: '$gray100',
  border: 'none',
  borderRadius: '5px',
  width: '5rem',
  height: '2rem',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.8',
  },
  transition: '0.3s',
})

export default function Home() {
  return (
    <div>
      <Button>Click</Button>
    </div>
  )
}
