import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import screenSizes from '../utils/screen-sizes'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    widht: 100%;
  }
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const EducationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px 0px;
  text-align: center;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 40px 0px;
  }
`

const EducationTitle = styled.h3`
  margin: 5px auto;
  margin-bottom: 15px;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  color: ${({ theme }) => theme.colors.black};
  margin: 5px 0px;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.colors.activeBlue};
  }
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

const ExperienceDescription = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const ExperienceLine = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.black};
  height: 40px;
`

const VolunteerWrapper = styled.div`
  margin: 80px 0px;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 40px 0px;
  }
`

const VolunteerProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    flex-wrap: wrap;
    margin-top: 20px;
  }
`

const VolunteerProject = styled.div`
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 20px 30px;
  }
`

const VolunteerImage = styled.a`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.hoverBlue};
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;

  transform: translateZ(0);
  transition-duration: 0.8s;
  transition-property: transform;
  box-shadow: ${({ theme }) => theme.boxShadow.regular};
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.boxShadow.intense};
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 200px;
    height: 200px;
  }
`
const VolunteerTitle = styled.h3`
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow.regular};
`

const VolunteerInfo = styled.div`
  margin-top: 10px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
  }
`

const Experience = () => (
  <>
    <Navbar />
    <Container>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce={true}
        duration={2}
        delay={10}
      >
        <EducationWrapper>
          <Title>Education</Title>
          <EducationTitle>
            Degree Program in Information and Communication Technology
          </EducationTitle>
          <StyledLink href="https://www.kth.se/utbildning/civilingenjor/informationsteknik/utbildningsbeskrivning-1.4120">
            BSc: Information &amp; Communication Technology
          </StyledLink>
          <StyledLink href="https://www.kth.se/student/kurser/program/TIVNM/20182/mal?l=en">
            MCs: ICT Innovation &amp; Human-Computer Interaction
          </StyledLink>
          <StyledLink href="https://www.ntu.edu.sg/Pages/home.aspx">
            Exchange semester at NTU SingaporeMCs: ICT Innovation &amp;
            Human-Computer Interaction
          </StyledLink>
        </EducationWrapper>
      </ScrollAnimation>

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
              January 2021 - June 2021 <br />
              Master thesis student
            </ExperienceDescription>
            {/* <ExperienceDescription>Some text</ExperienceDescription> */}
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

            {/* <ExperienceDescription>Some text</ExperienceDescription> */}
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
            {/* <ExperienceDescription>Some text</ExperienceDescription> */}
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
            {/* <ExperienceDescription>Some text</ExperienceDescription> */}
          </ScrollAnimation>
        </ExperienceWrapper>
      </ScrollAnimation>
      <VolunteerWrapper>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOnce={true}
          duration={2}
          delay={10}
        >
          <Title>Volunteer Experience &amp; Other Experience </Title>
          <VolunteerProjectsWrapper>
            <VolunteerProject>
              <VolunteerImage
                href="https://www.blipepp.nu/"
                background={'/pepp.jpg'}
              >
                <VolunteerTitle>Pepp</VolunteerTitle>
              </VolunteerImage>
              <VolunteerInfo>
                As the 2018 PR manager, I was responsible for communication on
                social media as well as creating graphic material for
                recruitment and events.
              </VolunteerInfo>
              <VolunteerInfo>
                In Stockholm, we had over 160 participants in our mentorship
                program, which was a 68% increase from the previous year. We
                collaborated with companies such as Atlas Copco, NCC, Accenture,
                Accando, MT-ledarskap, Netlight, and Tritech.
              </VolunteerInfo>
              <VolunteerInfo>
                Pepp is a six month long mentorship program with the goal to
                encourage more girls to pursue a career in the field of tech.
                High School girls are given a female student at KTH as a mentor,
                which in turn are given a mentor that is working in the tech
                field. During the six months they have regular meet-ups and can
                also attend inspiring events sponsored by our company partners.
              </VolunteerInfo>
            </VolunteerProject>
            <VolunteerProject>
              <VolunteerImage
                href="https://interaction20.ixda.org/"
                background={'/ixda.JPG'}
              >
                <VolunteerTitle>IxDA Sponsor liaison volunteer</VolunteerTitle>
              </VolunteerImage>
              <VolunteerInfo>
                Volunteered at IxDA's Interaction Week 2020 in Milan, Italy.
                IxDA's Interaction Week is one of the largest events dedicated
                to interaction design featuring speakers presenting the latest
                and future visions in the industry.
              </VolunteerInfo>
            </VolunteerProject>
          </VolunteerProjectsWrapper>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOnce={true}
          duration={2}
          delay={10}
        >
          <VolunteerProjectsWrapper>
            <VolunteerProject>
              <VolunteerImage
                href="https://www.spotifyjobs.com/students"
                background={'/spotify.jpg'}
              >
                <VolunteerTitle>Spotify Mentorship Program</VolunteerTitle>
              </VolunteerImage>
              <VolunteerInfo>
                In the program I attented workshops and had weekly mentorship
                meetings
              </VolunteerInfo>
            </VolunteerProject>
            <VolunteerProject>
              <VolunteerImage
                href="https://www.cgi.com/se/sv/fsap"
                background={'/women.jpg'}
              >
                <VolunteerTitle>
                  Female Student Acceleration Program
                </VolunteerTitle>
              </VolunteerImage>
              <VolunteerInfo>
                Female Student Acceleration Program is an exclusive network for
                talented women studying in the fields Information Technology,
                Management Consulting, Business and Service Design. Over the
                period of a year, through workshops, presentations and
                challenges, Acando provides a set of tools, hands on experience
                and practical insights for the students to use during their
                remaining time at the university as well as a kick start to
                their career.
              </VolunteerInfo>
            </VolunteerProject>
          </VolunteerProjectsWrapper>
        </ScrollAnimation>
      </VolunteerWrapper>
    </Container>
    <Footer />
  </>
)

export default Experience
