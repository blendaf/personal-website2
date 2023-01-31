import styled from 'styled-components'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import screenSizes from '../utils/screen-sizes'

import Footer from '../components/Footer'

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

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

const Home = () => {
  const router = useRouter()

  return (
    <>
      <Header />
      <Container>
        <Title>About Me</Title>
        <Text>
          I am a software developer experienced in JavaScript and passionate
          about anything UX. I have worked with web and app development using
          technologies such as React, React Native, Node, and Vue. I also have
          experience in user research and interaction design having conducted
          several usability studies, product development, and design projects.
          My greatest strengths and contributions to a team are my strong
          organizational skills, communication skills, and my customer
          obsession.
        </Text>
        <br />
        <Text>
          Currently, I am working as an Engineer at Klarna, exploring the future
          of online shopping in the Klarna app.
        </Text>
      </Container>
      <Footer />
    </>
  )
}

export default Home

// TODO
// 2. Add text to experience and education
// 4. Fix mailto
// 6. Add text to projects
// 7. Make responsive
