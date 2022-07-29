import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LayoutContainer } from './DefaultLayout.styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
