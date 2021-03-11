import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 100%;
  }
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`

const ProjectsRow = styled.div`
  display: flex;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
  }
`

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

  transform: ${(props) => (props.middle ? 'none' : 'translateY(200px)')};

  transition-duration: 0.8s;
  transition-property: transform;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  backface-visibility: hidden;

  &:hover {
    transform: ${(props) =>
      props.middle ? 'scale(1.1)' : 'translateY(200px) scale(1.1)'};
    box-shadow: ${({ theme }) => theme.boxShadow.intense};
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    transform: none;
    margin: 10px;
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    transform: none;
    margin: 10px;
    width: 200px;
    height: 200px;
  }
`

const ProjectTitle = styled.h3`
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow.regular};
  padding: 0px 2px;
`

const Header = () => {
  return (
    <Container>
      <Projects>
        <ProjectsRow>
          <ScrollAnimation
            offset={400}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={1} href={`/?postId=${1}`} as={`/post/${1}`}>
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
            delay={2}
          >
            <Link key={2} href={`/?postId=${2}`} as={`/post/${2}`}>
              <ProjectImage middle background={'/news.jpg'}>
                <ProjectTitle>
                  Master Thesis: The News Tips Process at BT
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            offset={400}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={3} href={`/?postId=${3}`} as={`/post/${3}`}>
              <ProjectImage background={'/construct.jpeg'}>
                <ProjectTitle>
                  Konstruct: AR city-wide outdoor gallery app
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectsRow>
        <ProjectsRow>
          <ScrollAnimation
            offset={300}
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
            delay={10}
          >
            <Link key={5} href={`/?postId=${5}`} as={`/post/${5}`}>
              <ProjectImage middle background={'/Furhat.png'}>
                <ProjectTitle>
                  Teaching A Robot How To Cook: A Study of Embodiment
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation
            offset={300}
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
        </ProjectsRow>
        <ProjectsRow>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={7} href={`/?postId=${7}`} as={`/post/${7}`}>
              <ProjectImage middle background={'/commuter.jpg'}>
                <ProjectTitle>STHLM Commuter</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
          {/* <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={8} href={`/?postId=${8}`} as={`/post/${8}`}>
              <ProjectImage middle background={'/commuter.jpg'}>
                <ProjectTitle>STHML Commuter</ProjectTitle>
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
            <Link key={9} href={`/?postId=${9}`} as={`/post/${9}`}>
              <ProjectImage background={'/commuter.jpg'}>
                <ProjectTitle>STHML Commuter</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation> */}
        </ProjectsRow>
      </Projects>
    </Container>
  )
}

export default Header
