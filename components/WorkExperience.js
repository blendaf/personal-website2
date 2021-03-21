import styled from 'styled-components'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import screenSizes from '../utils/screen-sizes'

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px 0px;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 40px 0px;
  }
`

const ExperienceTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
`

const ExperienceSubtitle = styled.div`
  text-align: center;
  margin-bottom: 5px;
  width: 300px;
`

const ExperienceDescription = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 300px;
`

const ExperienceLine = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.black};
  height: 40px;
`
const WorkExperience = () => (
  <ScrollAnimation
    animateIn="animate__fadeIn"
    animateOnce={true}
    duration={2}
    delay={800}
  >
    <ExperienceWrapper>
      <Title>Work Experience</Title>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceTitle>Schibsted Media Group</ExperienceTitle>
        <ExperienceDescription>
          January 2021 - current <br />
          Master thesis student
        </ExperienceDescription>
        <ExperienceDescription>
          I am conducting a UX research project to explore the motivation and
          needs of tipsters and the needs and challenges of journalists
          regarding news tips at Bergens Tidende. The project includes
          conducting user interviews, usability testing, and qualitative
          analysis.
        </ExperienceDescription>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceLine />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceTitle>Proximion</ExperienceTitle>
        <ExperienceDescription>
          December 2020 - January 2021 <br />
          UX Consultant
        </ExperienceDescription>

        <ExperienceDescription>
          I performed a heuristic usability evaluation and wrote an accompanying
          report on a commercial GUI used for ball bearings measurements.
        </ExperienceDescription>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceLine />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceTitle>Cantemo</ExperienceTitle>
        <ExperienceDescription>
          March 2020 - September 2020 <br />
          Tester
        </ExperienceDescription>
        <ExperienceDescription>
          Cantemo provides a Media Asset Management solution to a range of
          companies and organizations such as BBC, Disney, UNICEF, &amp; NASA. I
          worked part-time with QA. In my role, I worked with a variety of tools
          and frameworks like Jenkins, Cypress, &amp; Docker. Ended due to
          Covid-19.
        </ExperienceDescription>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceLine />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <ExperienceTitle>Hello World!</ExperienceTitle>
        <ExperienceDescription>
          JMarch 2019 - September 2018 <br />
          Programming Teacher
        </ExperienceDescription>
        <ExperienceDescription>
          HelloWorld! is a non-profit organization that makes digital creation
          accessible to all children and young people, regardless of background.
          As a programming teacher, I worked on weekends teaching kids a variety
          of languages.
        </ExperienceDescription>
      </ScrollAnimation>
    </ExperienceWrapper>
  </ScrollAnimation>
)

export default WorkExperience
