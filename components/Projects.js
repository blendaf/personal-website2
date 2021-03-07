import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
  }
`

const Projects = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`

const ProjectsColumn = styled.div`
  padding-top: 175px;
`

const ProjectsColumnMiddle = styled.div``

const ProjectImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 50px;
  background-color: blue;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition-duration: 0.8s;
  transition-property: transform;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.boxShadow.intense};
  }
`

const ProjectTitle = styled.h3`
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow.regular};
`

const Header = () => {
  return (
    <Container>
      <Projects>
        <ProjectsColumn>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={2} href={`/?postId=${2}`} as={`/post/${2}`}>
              <ProjectImage background={'/tv.jpg'}>
                <ProjectTitle>Usability Evaluation of HBO Nordic</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={5} href={`/?postId=${5}`} as={`/post/${5}`}>
              <ProjectImage background={'/Furhat.png'}>
                <ProjectTitle>
                  Teaching A Robot How To Cook: A Study of Embodiment
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectsColumn>
        <ProjectsColumnMiddle>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={1} href={`/?postId=${1}`} as={`/post/${1}`}>
              <ProjectImage background={'/news.jpg'}>
                <ProjectTitle>
                  Master Thesis: The News Tips Process at BT
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={4} href={`/?postId=${4}`} as={`/post/${4}`}>
              <ProjectImage background={'/speak.png'}>
                <ProjectTitle>
                  Speak.Exchange: A Bilingual Dictionary
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={7} href={`/?postId=${7}`} as={`/post/${7}`}>
              <ProjectImage background={'/commuter.jpg'}>
                <ProjectTitle>STHML Commuter</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectsColumnMiddle>
        <ProjectsColumn>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={3} href={`/?postId=${3}`} as={`/post/${3}`}>
              <ProjectImage background={'/construct.jpeg'}>
                <ProjectTitle>Konstruct: An Outdoor Art Gallery</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={6} href={`/?postId=${6}`} as={`/post/${6}`}>
              <ProjectImage background={'/ewallet.jpg'}>
                <ProjectTitle>Usability Of An E-wallet</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectsColumn>
      </Projects>
    </Container>
  )
}

export default Header
