import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  )
}
