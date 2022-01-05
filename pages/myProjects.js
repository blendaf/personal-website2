import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import screenSizes from '../utils/screen-sizes'
import ModalContent from '../components/ModalContent'
import Projects from '../components/Projects'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

const Container = styled.div`
  width: 90%;
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
    width: 250px;
    height: 250px;
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
  width: 80%;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 100%;
  }
`

Modal.setAppElement('#__next')

const MyProjects = () => {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <Modal
        isOpen={!!router.query.postId}
        onRequestClose={() => {
          console.log('this happens')
          router.push('/myProjects')
        }}
        contentLabel="Post modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(193, 198, 199, 0.8)',
          },
          content: {
            borderRadius: '4px',
            padding: '0px',
            top: '60px',
            left: '50px',
            right: '50px',
            bottom: '60px',
            border: '1px solid rgba(193, 198, 199, 0.8)',
          },
        }}
      >
        <ModalContent id={router.query.postId} pathname={router.pathname} />
      </Modal>
      <Projects />
      <Container>
        <VolunteerWrapper>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOnce={true}
            duration={1}
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
                  collaborated with companies such as Atlas Copco, NCC,
                  Accenture, Accando, MT-ledarskap, Netlight, and Tritech.
                </VolunteerInfo>
                <VolunteerInfo>
                  Pepp is a six month long mentorship program with the goal to
                  encourage more girls to pursue a career in the field of tech.
                  High School girls are given a female student at KTH as a
                  mentor, which in turn are given a mentor that is working in
                  the tech field. During the six months they have regular
                  meet-ups and can also attend inspiring events sponsored by our
                  company partners.
                </VolunteerInfo>
              </VolunteerProject>
              <VolunteerProject>
                <VolunteerImage
                  href="https://interaction20.ixda.org/"
                  background={'/ixda.JPG'}
                >
                  <VolunteerTitle>
                    IxDA Sponsor liaison volunteer
                  </VolunteerTitle>
                </VolunteerImage>
                <VolunteerInfo>
                  Volunteered at IxDA's Interaction Week 2020 in Milan, Italy.
                  IxDA's Interaction Week is one of the largest events dedicated
                  to interaction design featuring speakers presenting the latest
                  and future visions in the industry. As a sponsor liaison, I
                  was responsible for the sponsor booths and making sure that
                  any problems were resolved. Luckily I was also able to attend
                  several talks and workshops on everything from data privacy to
                  inclusive design.
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
                  In the program, I attended workshops lectures, and had weekly
                  mentorship meetings with an Engineering Manager. During the
                  meetings, I worked mainly on my leadership and teamwork skills
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
                  Female Student Acceleration Program is an exclusive network
                  for talented women studying in the fields Information
                  Technology, Management Consulting, Business and Service
                  Design. Over the period of a year, through workshops,
                  presentations and challenges, Acando provides a set of tools,
                  hands on experience and practical insights for the students to
                  use during their remaining time at the university as well as a
                  kick start to their career.
                </VolunteerInfo>
              </VolunteerProject>
            </VolunteerProjectsWrapper>
          </ScrollAnimation>
        </VolunteerWrapper>
      </Container>
      <Footer photocredit={true} />
    </>
  )
}
export default MyProjects
