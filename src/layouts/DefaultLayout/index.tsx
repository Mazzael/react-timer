import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* espaço para ser inserido um conteúdo específico de uma página */}
    </LayoutContainer>
  )
}
