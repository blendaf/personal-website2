import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Education } from '../components/Education'
import { WorkExperience } from '../components/WorkExperience'
import Footer from '../components/Footer'
import 'animate.css/animate.min.css'
import screenSizes from '../utils/screen-sizes'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    widht: 100%;
  }
`

const Experience = () => {
  return (
    <>
      <Navbar />
      <Container>
        <WorkExperience />
        <Education />
      </Container>
      <Footer />
    </>
  )
}

export default Experience
