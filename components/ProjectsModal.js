import Link from 'next/link'
import styled from 'styled-components'
import { LinkedinWithCircle } from '@styled-icons/entypo-social'
import { Pills } from './fragments/pills'
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

export const Project1 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/medium/tv.jpg'}></ProjectImage>
          <About>
            <Title>Usability Evaluation of HBO Nordic</Title>
            <Paragraph>
              In a group of three, we conducted a comparative usability
              evaluation of the HBO Nordic website and mobile application.
            </Paragraph>

            <Pills
              skills={[
                'Comparative usability testing',
                'Thematic analysis',
                'Observations',
                'Satisfaction questionnaire',
                'Optimal path',
                'PSSUQ',
              ]}
            />

            <Paragraph>
              After a critical inspection of the HBO Nordic video streaming
              service we found that the usability of the service was lacking.
              Specifically, we hypothesized that the HBO Nordic smartphone
              applications performed worse than the website.
            </Paragraph>
            <Paragraph>
              We conducted a mixed-methods, comparative usability evaluation of
              the website and app focusing on effectiveness and satisfaction.
              Qualitative was collected through observations and open-ended
              questions. The evaluation was conducted remotely, using a
              between-group design with 10 participants. The qualitative data
              was analysed through thematic analysis.
            </Paragraph>
            <Paragraph>
              We found that, overall, the usability of both the website and the
              app was high but that certain tasks and dimensions scored lower.
              Therefore, ruining the experience of the service. In line with our
              hypothesis the application performed worse with regards to both
              satisfaction and effectiveness. From both the quantitative and
              qualitative data we could pinpoint four specific changes that
              would drastically improve the usability of the service, on both
              website and app.
            </Paragraph>
          </About>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}
export const Project2 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/medium/news.jpg'}></ProjectImage>
          <About>
            <Title> Master Thesis: The News Tips Process at BT</Title>I am
            conducting a user research and design project with the aim of
            gaining insight into readers relationship to providing Bergens
            Tidende with news tip and improving the design of the digital news
            tip function.
            <Pills
              skills={[
                'Semi-structured interviews',
                'Usability testing',
                'Affinity Diagramming',
                'Personas',
                'User Journey Mapping',
              ]}
            />
          </About>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

export const Project3 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
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

          <About>
            <Title>Konstruct: AR city-wide outdoor gallery app</Title>

            <Paragraph>
              In a project group of four we studied and critiqued a number of
              interaction design methodologies. We then applied these
              methodologies to the different stages of our design process to
              create a concept design.
            </Paragraph>
            <Pills
              skills={[
                'Ethnographic observation',
                'Semi-structured interviews',
                'Bodystorming',
                'Personas',
                'Scenarios',
                'Affinity diagram',
                '6-3-5 brainwriting',
                'Interface sketching',
                'Interactive prototyping',
                'Figma',
                'Video prototyping',
                'Focus group',
              ]}
            />

            <Paragraph>
              As a design team, we were given the assignment to focus on
              creating a solution around the issue of “Weaving the Threads
              within the Social Fabric,”. We started by following the double
              diamond model to direct our design process before observing
              existing communities that surrounded us; specifically, ones that
              we felt lacked connection. Through bodystorming, we refined this
              design problem and realised that art was an important yet
              underutilised social connectivity tool. Specifically, we found
              that while there were multiple free art galleries throughout
              Stockholm City they were hidden away and unapproachable.
            </Paragraph>
            <Paragraph>
              Through ethnographic observations, semi-structured interviews with
              art students, and affinity diagramming, we could define the
              primary and secondary personas that we would be designing for. We
              then used an adapted version of 6-3-5 brainwriting together with
              interface sketching to individually and collaboratively come up
              with a variety of solutions. We then consolidated our ideas into a
              conceptual model. Based on our conceptual model we created an
              interactive prototype in Figma that was then used in a video
              prototype. The Finally, to evaluate our design and concept, we
              conducted a focus group evaluation on our interactive prototype
              with art students from The Swedish Royal Institute of Art.
            </Paragraph>
          </About>
        </ProjectInfo>

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
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/speak.png'}></ProjectImage>
          <About>
            <Title>Speak.Exchange: A Bilingual Dictionary</Title>
            <Paragraph>
              In a group of four we developed speak.exchange which is an online
              bilingual dictionary, that offers a spaced-repetition system(SRS)
              for learning new words in a foreign language. We received the
              course award for Best UX Design out of 800 students. Found at
              speak.exchange.
            </Paragraph>

            <Pills
              skills={[
                'React ',
                'Next.js',
                'Node.js',
                'styled-components',
                'Firebase',
                'Wordreference API',
                'Usability Evaluation',
                'Github',
                'Adobe XD',
              ]}
            />
            <Paragraph>
              In an interaction programming course we were tasked with building
              a web application using React. The application had to persist
              data, use a front-end framework, have several views of the same
              data and have interaction on the data. The design and usability of
              the web application was also an important factor. After an
              individual and collaborative brainstorming session we decided to
              create an app that is based on the online dictionary.
            </Paragraph>
            <Paragraph>
              After we decided on the concept of a bilingual (French and
              English) online dictionary that also supports a user saving decks
              with words we created a prototype usign Adobe XD. We then
              conducted a usability evaluation of the prototype and changed it
              accordingly. We developed the website using React for our
              front-end framework, Node.js for our runtime environment, Next.js
              for server-side rendering, Firebase for data persistance, Firebase
              Authentication for user authentication, styled-components for CSS
              and wordreference-api for dictionary data from WordReference.
              Mid-development we conducted another usability evaluation, this
              time with a bilingual speaker of French and English, and fixed the
              found problems.
            </Paragraph>
            <Paragraph>
              Methods &amp; Tools: React, Next.js, Node.js, styled-components,
              Firebase, Firebase authentication, Wordreference API, Usability
              Evaluation, Github, Adobe XD
            </Paragraph>
          </About>
        </ProjectInfo>

        <Images>
          <Image border src={'/Repeat.png'} />
          <Image border src={'/Review-Deck.png'} />
        </Images>
        <Images>
          <Image border src={'/Review-Deck2.png'} />
          <Image border src={'/Search.png'} />
        </Images>
        <Images>
          <Image border src={'/See-Deck.png'} />
        </Images>
      </ProjectWrapper>
    </Container>
  )
}

export const Project5 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/Furhat.png'}></ProjectImage>
          <About>
            <Title>Teaching A Robot How To Cook: A Study of Embodiment</Title>
            <Paragraph>
              In a group of four we evaluated the effects of robot embodiment on
              grounding in HRI. We implemented two versions of a visual robot
              interface that would receive cooking instructions from users using
              the Furhat SDK. A user study was then performed to explore how the
              two versions were perceived by test participants.
            </Paragraph>
            <Pills skills={['Kotlin', 'Furhat SDK', 'User Study']} />
            <Paragraph>
              We attempted to explore how combinations of modalities, more
              specifically speech and facial gestures, affect the perception of
              common ground in Human-Robot interaction (HRI). We tried to answer
              the question: Does multimodal implementations of robot interfaces
              improve the perception of common ground in Human-Robot
              communication compared to unimodal implementations? The hypothesis
              was that the multimodal robot interaction would increase the
              perception of common ground compared to the unimodal robot
              interaction.
            </Paragraph>
            <Paragraph>
              We tried to answer the research questions through a mixed-methods
              study design where five participants were asked to remotely teach
              a virtual robot how to cook a specific recipe under two conditions
              and then evaluate their experiences though several questionnaires.
              The two implementations of the Robot was developed using the
              Furhat SDK in Kotlin.
            </Paragraph>
            <Paragraph>
              The results indicated that a multimodal representations of a
              robotic interface might positively increase the perceived common
              ground of users in relation to a unimodal representation However,
              the results were inconclusive so no clear conclusion could be
              drawn. Overall, the results showed that test participants
              perceived that the multimodal representation of the robot had a
              number of advantages such as increased naturalness, easier
              turn-taking and a more human-human-like interaction, when compared
              to the unimodal representation.
            </Paragraph>
          </About>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

export const Project6 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/medium/ewallet.jpg'}></ProjectImage>
          <About>
            <Title>Usability Of An E-wallet</Title>
            <Paragraph>
              Designed and usability tested a crypto currency mobile payment
              applications as my bachelor thesis togheter with Bercis Arslan.
            </Paragraph>
            <Pills skills={['Formative usability testing ']} />
            <Paragraph>
              Centiglobe is a trading company that wanted to develop a mobile
              payment app (specifically an e-wallet), which enables payment with
              cryptocurrency as well as international payments. Since the
              functionality of the app was fairly new the company wanted ensure
              that the app had a design with high usability.
            </Paragraph>
            <Paragraph>
              We investiget how an e-wallet can be designed to provide a high
              level of usability by conforming to best HCI practices and by
              formative usability evaluation. The research process consisted of
              an initial literature study and development of a prototype in
              Figma, which was evaluated iteratively through
              Thinking-aloud-protocol (TAP) and a combination of performance
              measurements and questionnaire by a chosen test group.
            </Paragraph>
            <Paragraph>
              Based on our evaluations we could conclude that the test subjects
              had more trouble understanding the concept of the e-wallet rather
              than navigating and completing tasks. The difficulties lay in
              understanding how currencies were stored and how transactions
              happened. When developing this e-wallet we noticed that the most
              important issue was to make new functions and concepts familiar to
              the user through relating it to recognizable ideas.
            </Paragraph>
          </About>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

export const Project7 = () => {
  return (
    <Container>
      <Back backRef={`/myProjects`} />
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/medium/commuter.jpg'}></ProjectImage>
          <About>
            <Title>STHLM Commuter (STHLM Traveling)</Title>
            <Paragraph>
              In a team we further developed an open source Android app. The
              project was a part of a course in Software Development.
            </Paragraph>

            <Pills skills={['Scrum', 'Android Studio']} />
            <Paragraph>
              The main goal of the course was to apply the agile framework Scrum
              on a software project.
            </Paragraph>
            <Paragraph>
              We decided to further develop the open source app STHLM Traveling.{' '}
              <StyledLink href="http://sthlmtraveling.se/">
                STHLM Traveling{' '}
              </StyledLink>
              is a travel planner application for SL (Public Transportation in
              Stockholm).
            </Paragraph>
            <Paragraph>
              During the four week long project we added features such as
              combining multiple journeys, alarm functionality for departure and
              disembarking, sharing journeys, more parameters to customise
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
      </ProjectWrapper>
    </Container>
  )
}

export const Project8 = () => {
  return (
    <Container>
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectImage src={'/pepp.jpg'}></ProjectImage>
          <About>
            <Title>Pepp: PR and Graphics Manager</Title>PR and Graphics Manager
            Stockholm Project Group. Pepp is a six month long mentorship program
            with the goal to encourage more girls to pursue a career in the
            field of tech.
          </About>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

// export const Project9 = () => {
//   return (
//     <Container>
//       <ProjectWrapper>
//
//           <ProjectInfo>
//           <ProjectImage src={'/ewallet.jpg'}></ProjectImage>
//             <About>
//               <Title>IXDA Interaction Week 2020</Title>
//               Worked as the sponsor liason volunteer at IxDA's Interaction Week
//               2020 in Milan, Italy. IxDA's Interaction Week is one of the
//               largest events dedicated to interaction design featuring speakers
//               presenting the latest and future visions in the industry.
//             </About>
//           </ProjectInfo>
//
//       </ProjectWrapper>
//     </Container>
//   )
// }

// export const Project10 = () => {
//   return (
//     <Container>
//       <ProjectWrapper>
//
//           <ProjectInfo>
//           <ProjectImage src={'/ewallet.jpg'}></ProjectImage>
//             <About>
//               <Title>Usability Of An E-wallet</Title>Designed and usability
//               tested a crypto currency mobile payment applications as my
//               bachelor thesis.
//             </About>
//           </ProjectInfo>
//
//       </ProjectWrapper>
//     </Container>
//   )
// }
