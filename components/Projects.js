import Link from 'next/link'
// import { useContext } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
// import profile from './profile.jpg'

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

  transform: translateZ(0);
  transition-duration: 0.8s;
  transition-property: transform;
  box-shadow: 0px 2px 39px 2px ${({ theme }) => theme.colors.hoverBlack};
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 39px 10px ${({ theme }) => theme.colors.hoverBlack};
  }
`

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`

const Header = () => {
  return (
    <Container>
      <Projects>
        <ProjectsColumn>
          <ProjectImage background={'news.jpg'}>
            <Link key={1} href="/article/[articleId]" as={`/article/${1}`}>
              <ProjectTitle>Project Title</ProjectTitle>
            </Link>
          </ProjectImage>
          <ProjectImage background={'Furhat.png'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
          <ProjectImage background={'construct.jpeg'}>
            <Link key={4} href="/article/[articleId]" as={`/article/${4}`}>
              <ProjectTitle>Project Title</ProjectTitle>
            </Link>
          </ProjectImage>
        </ProjectsColumn>
        <ProjectsColumnMiddle>
          <ProjectImage background={'commuter.jpg'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
          <ProjectImage background={'ewallet.jpg'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
          <ProjectImage background={'event.jpg'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
          <ProjectImage background={'construct.jpeg'}>
            <Link key={3} href={`/?postId=${3}`} as={`/post/${3}`}>
              <ProjectTitle>Project Title</ProjectTitle>
            </Link>
          </ProjectImage>
        </ProjectsColumnMiddle>
        <ProjectsColumn>
          <ProjectImage background={'construct.jpeg'}>
            <Link key={2} href={`/?postId=${2}`} as={`/post/${2}`}>
              <ProjectTitle>Project Title</ProjectTitle>
            </Link>
          </ProjectImage>
          <ProjectImage background={'construct.jpeg'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
          <ProjectImage background={'construct.jpeg'}>
            <ProjectTitle>Project Title</ProjectTitle>
          </ProjectImage>
        </ProjectsColumn>
      </Projects>
    </Container>
  )
}

export default Header
