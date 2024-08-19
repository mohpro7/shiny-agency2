import homeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
    display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding top: 60px;
  background-color: #f9f9f9;
  max-width: 90%;
  margin: 0 auto;
`
const TextContainer = styled.div`
  max-width: 500px;
`
const TextLine = styled.p`
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 5px 0;
  color: #2f2e41;
`
 
const Illustration = styled.img`
  max-width: 100%;
  height: auto;
`

function Home() {
  return (
    <HomeContainer>
      <TextContainer>
        <TextLine>Repérez vos besoins,</TextLine>
        <TextLine>on s'occupe du reste,</TextLine>
        <TextLine>avec les meilleurs</TextLine>
        <TextLine>talents</TextLine>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </TextContainer>
      <Illustration src={homeIllustration} alt='Illustration de la page daccueil' />
    </HomeContainer>
  )
}

export default Home
