import Link from 'next/link'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 100%;
  }
`

const Projects = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;

  @media screen and (max-width: ${screenSizes.phone.max}) {
    grid-template-columns: 1fr 1fr;
    padding-top: 20px;
  }
`

const ProjectImageWrapper = styled.div`
  display: grid;
  grid-column-start: ${(props) => (props.middle ? '2' : 'auto')};

  @media screen and (max-width: ${screenSizes.phone.max}) {
    grid-column-start: ${(props) => (props.middle ? '1' : 'auto')};
  }
`

const ProjectImage = styled.div`
  display: grid;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 50px;
  background-color: blue;
  align-items: center;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  cursor: pointer;
  transform: ${(props) =>
    props.verticalOffset ? 'translateY(200px)' : 'none'};

  transition-duration: 0.8s;
  transition-property: transform;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  backface-visibility: hidden;

  &:hover {
    transform: ${(props) =>
      props.verticalOffset ? 'translateY(200px) scale(1.1)' : 'scale(1.1)'};
    box-shadow: ${({ theme }) => theme.boxShadow.intense};
  }

  @media screen and (max-width: ${screenSizes.laptop.max}) {
    margin: 30px;
    transform: ${(props) =>
      props.verticalOffset ? 'translateY(155px)' : 'none'};
    width: 280px;
    height: 280px;
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    transform: ${(props) =>
      props.verticalOffset ? 'translateY(90px)' : 'none'};
    margin: 20px;
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    transform: none;
    margin: 10px;
    width: 140px;
    height: 140px;
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
        <ProjectImageWrapper>
          <ScrollAnimation
            offset={400}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={1} href={`/?postId=${1}`} as={`/post/${1}`}>
              <ProjectImage verticalOffset background={'/tv.jpg'}>
                <ProjectTitle>Usability Evaluation of HBO Nordic</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={2} href={`/?postId=${2}`} as={`/post/${2}`}>
              <ProjectImage background={'/news.jpg'}>
                <ProjectTitle>
                  Master Thesis: The News Tips Process at BT
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <ScrollAnimation
            offset={400}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={3} href={`/?postId=${3}`} as={`/post/${3}`}>
              <ProjectImage verticalOffset background={'/construct.jpeg'}>
                <ProjectTitle>
                  Konstruct: AR city-wide outdoor gallery app
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <ScrollAnimation
            offset={300}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={4} href={`/?postId=${4}`} as={`/post/${4}`}>
              <ProjectImage verticalOffset background={'/speak.png'}>
                <ProjectTitle>
                  Speak.Exchange: A Bilingual Dictionary
                </ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
        <ProjectImageWrapper>
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
        </ProjectImageWrapper>
        <ProjectImageWrapper>
          <ScrollAnimation
            offset={300}
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={10}
          >
            <Link key={6} href={`/?postId=${6}`} as={`/post/${6}`}>
              <ProjectImage verticalOffset background={'/ewallet.jpg'}>
                <ProjectTitle>Usability Of An E-wallet</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
        <ProjectImageWrapper middle>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animatePreScroll={false}
            animateOnce={true}
            duration={2}
            delay={2}
          >
            <Link key={7} href={`/?postId=${7}`} as={`/post/${7}`}>
              <ProjectImage background={'/commuter.jpg'}>
                <ProjectTitle>STHLM Commuter</ProjectTitle>
              </ProjectImage>
            </Link>
          </ScrollAnimation>
        </ProjectImageWrapper>
      </Projects>
    </Container>
  )
}

export default Header
