import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 80px;
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`

function Header() {
  return (
    <HeaderContainer>
        <LogoContainer>
            <img src={logo} alt='logo shiny' />
        </LogoContainer>
        <NavLinks>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
            Faire le test
        </StyledLink>
        </NavLinks>
    </HeaderContainer>
  )
}

export default Header