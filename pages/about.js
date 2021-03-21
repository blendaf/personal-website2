import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import screenSizes from '../utils/screen-sizes'

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
  height: 70vh;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    width: 80%;
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 80%;
  }
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const Text = styled.div``

const Experience = () => (
  <>
    <Navbar />
    <Container>
      <Title>About Me</Title>
      <Text>
        In my last year of my master's, I am learning everything I can about UX,
        innovation, and front-end development. I hope to combine user research
        and creating through front-end development. Being able to create new
        things in an awesome, diverse teamiswhat drives me forward.
      </Text>
    </Container>
    <Footer />
  </>
)

export default Experience
