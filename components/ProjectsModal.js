import styled from 'styled-components'
import {
  Container,
  ProjectWrapper,
  ProjectInfo,
  ProjectImage,
  Tools,
  About,
  Title,
  Images,
  Image,
  Video,
} from './fragments/project-fragments'

export const Project1 = () => {
  return (
    <Container>
      <ProjectWrapper>
        <ProjectImage src={'/tv.jpg'}></ProjectImage>
        <ProjectInfo>
          <About>
            <Title>About</Title>
            In a group of three, we conducted a comparative usability evaluation
            of the HBO Nordic website and mobile application. In a between-group
            and mixed-method study both quantitative and qualitative data was
            collected and analysed. The main focus of the study was the
            efficiency and satsifaction of the streaming service.
          </About>
          <Tools>
            <Title>Tools</Title>
            Some text, some text some text
          </Tools>
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

export const Project2 = () => {
  return (
    <Container>
      <ProjectWrapper>
        <ProjectImage src={'/news.jpg'}></ProjectImage>
        <ProjectInfo>
          <About>
            <Title>About</Title>I am conducting a user research and design
            project with the aim of gaining insight into readers relationship to
            providing Bergens Tidendewith news tip and improving the design of
            the digital news tip function.
          </About>
          {/* <Tools>
            <Title>Tools</Title>
            Some text, some text some text
          </Tools> */}
        </ProjectInfo>
      </ProjectWrapper>
    </Container>
  )
}

export const Project3 = () => {
  return (
    <Container>
      <ProjectWrapper>
        {/* <ProjectImage src={'/construct.jpeg'}></ProjectImage> */}
        {/* <ProjectImage>

          <iframe
            width="634"
            height="357"
            src="https://www.youtube.com/embed/T9W_QpR2fsA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ProjectImage> */}
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
            <Title>About</Title>In a project group of four we studied and
            critiqued a number of interaction design methodologies. We then
            applied these methodologies to the different stages of our design
            process to create a concept design.
          </About>
          {/* <Tools>
            <Title>Tools</Title>
            Some text, some text some text
          </Tools> */}
        </ProjectInfo>
      </ProjectWrapper>
      <Images>
        {/* <Image src={'/construct.jpeg'} /> */}
        <Image src={'/konstructFigma.png'} />
      </Images>
    </Container>
  )
}
