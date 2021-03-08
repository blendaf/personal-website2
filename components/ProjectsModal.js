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
  Paragraph,
  StyledLink,
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
              evaluation of the HBO Nordic website and mobile application.
              <Paragraph>
                After a critical inspection of the HBO Nordic video streaming
                service we found that the usability of the service was lacking.
                Specifically, we hypothesized that the HBO Nordic smartphone
                applications performed worse than the website.
              </Paragraph>
              <Paragraph>
                We conducted a mixed-methods, comparative usability evaluation
                of the website and app focusing on effectiveness and
                satisfaction. Qualitative was collected through observations and
                open-ended questions. The evaluation was conducted remotely,
                using a between-group design with 10 participants. The
                qualitative data was analysed through thematic analysis.
              </Paragraph>
              <Paragraph>
                We found that, overall, the usability of both the website and
                the app was high but that certain tasks and dimensions scored
                lower. Therefore, ruining the experience of the service. In line
                with our hypothesis the application performed worse with regards
                to both satisfaction and effectiveness. From both the
                quantitative and qualitative data we could pinpoint four
                specific changes that would drastically improve the usability of
                the service, on both website and app.
              </Paragraph>
              <Paragraph>
                Methods &amp; Tools: Comparative Usability Testing, Thematic
                analysis, Observations, Satisfaction questionnaire, Optimal
                path, PSSUQ
              </Paragraph>
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
              <Title>STHLM Commuter (STHLM Traveling)</Title>
              <Paragraph>
                In a team we further developed an open source Android app. The
                project was a part of a course in Software Development. The main
                goal of the course was to apply the agile framework Scrum on a
                software project.
              </Paragraph>
              <Paragraph>
                We decided to further develop the open source app STHLM
                Traveling.{' '}
                <StyledLink href="http://sthlmtraveling.se/">
                  STHLM Traveling{' '}
                </StyledLink>
                is a travel planner application for SL (Public Transportation in
                Stockholm).
              </Paragraph>
              <Paragraph>
                During the four week long project we added features such as
                combining multiple journeys, alarm functionality for departure
                and disembarking, sharing journeys, more parameters to customise
                journeys as well as refreshing the design of the UI.
              </Paragraph>
              <Paragraph>
                The application was built in Java using Android Studio. Git was
                used as a version control system and the project is hosted on{' '}
                <StyledLink href="https://github.com/Team-Eight/sthlm-commuter">
                  Github
                </StyledLink>
                .
              </Paragraph>
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
