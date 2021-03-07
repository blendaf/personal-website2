import Link from 'next/link'
import styled from 'styled-components'
import { LinkedinWithCircle } from '@styled-icons/entypo-social'
import {
  Container,
  Back,
  ProjectWrapper,
  ProjectInfoWrapper,
  ProjectInfo,
  ProjectImage,
  Tools,
  About,
  Title,
  Images,
  Image,
  Video,
} from './fragments/project-fragments'

const ContactIcon = styled.a`
  background-color: transparent;
  border: none;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 50px;
`

const StyledIcon = styled.svg`
  color: ${({ theme }) => theme.colors.black};
  width: 40px;

  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  display: inline-block;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }
`

export const Project1 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/medium/tv.jpg'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>Usability Evaluation of HBO Nordic</Title>
              In a group of three, we conducted a comparative usability
              evaluation of the HBO Nordic website and mobile application. In a
              between-group and mixed-method study both quantitative and
              qualitative data was collected and analysed. The main focus of the
              study was the efficiency and satsifaction of the streaming
              service.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}
export const Project2 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/medium/news.jpg'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title> Master Thesis: The News Tips Process at BT</Title>I am
              conducting a user research and design project with the aim of
              gaining insight into readers relationship to providing Bergens
              Tidende with news tip and improving the design of the digital news
              tip function.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

export const Project3 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <Video>
            <iframe
              width="100%"
              height="357"
              src="https://www.youtube.com/embed/T9W_QpR2fsA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Video>

          <ProjectInfo>
            <About>
              <Title>Konstruct: An Outdoor Art Gallery</Title>In a project group
              of four we studied and critiqued a number of interaction design
              methodologies. We then applied these methodologies to the
              different stages of our design process to create a concept design.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
        <Images>
          <Image src={'/konstructFigma.png'} />
        </Images>
      </ProjectWrapper>
    </Container>
  )
}

export const Project4 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/speak.png'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>Speak.Exchange: A Bilingual Dictionary</Title>In a group of
              four we developed speak.exchange which is an online bilingual
              dictionary, that offers a spaced-repetition system(SRS)
              forlearning new words in a foreign language. Found at
              speak.exchange.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

export const Project5 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/Furhat.png'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>Teaching A Robot How To Cook: A Study of Embodiment</Title>
              Evaluated the effects of robot embodiment on grounding in HRI.
              Implemented two versions of a robot interface that would receive
              cooking instructions from users using the Furhat SDK. A user study
              was then performed to explore how the two versions were perceived
              by test participants.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

export const Project6 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/medium/ewallet.jpg'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>Usability Of An E-wallet</Title>Designed and usability
              tested a crypto currency mobile payment applications as my
              bachelor thesis.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

export const Project7 = () => {
  return (
    <Container>
      <Back />
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/medium/commuter.jpg'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>STHLM Commuter</Title>Further developed an android app, in
              java, for public transportation in a team. Used scrum as the
              development method.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

export const Project8 = () => {
  return (
    <Container>
      <ProjectWrapper>
        <ProjectInfoWrapper>
          <ProjectImage src={'/pepp.jpg'}></ProjectImage>
          <ProjectInfo>
            <About>
              <Title>Pepp: PR and Graphics Manager</Title>PR and Graphics
              Manager Stockholm Project Group. Pepp is a six month long
              mentorship program with the goal to encourage more girls to pursue
              a career in the field of tech.
            </About>
          </ProjectInfo>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </Container>
  )
}

// export const Project9 = () => {
//   return (
//     <Container>
//       <ProjectWrapper>
//         <ProjectInfoWrapper>
//           <ProjectImage src={'/ewallet.jpg'}></ProjectImage>
//           <ProjectInfo>
//             <About>
//               <Title>IXDA Interaction Week 2020</Title>
//               Worked as the sponsor liason volunteer at IxDA's Interaction Week
//               2020 in Milan, Italy. IxDA's Interaction Week is one of the
//               largest events dedicated to interaction design featuring speakers
//               presenting the latest and future visions in the industry.
//             </About>
//           </ProjectInfo>
//         </ProjectInfoWrapper>
//       </ProjectWrapper>
//     </Container>
//   )
// }

// export const Project10 = () => {
//   return (
//     <Container>
//       <ProjectWrapper>
//         <ProjectInfoWrapper>
//           <ProjectImage src={'/ewallet.jpg'}></ProjectImage>
//           <ProjectInfo>
//             <About>
//               <Title>Usability Of An E-wallet</Title>Designed and usability
//               tested a crypto currency mobile payment applications as my
//               bachelor thesis.
//             </About>
//           </ProjectInfo>
//         </ProjectInfoWrapper>
//       </ProjectWrapper>
//     </Container>
//   )
// }
