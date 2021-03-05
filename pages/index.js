import styled from 'styled-components'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => (
  <>
    <Header />
    <Projects />
    <Footer />
  </>
)

export default Home

// TODO
// 1. Compress project images
// 2.
//
//
//
