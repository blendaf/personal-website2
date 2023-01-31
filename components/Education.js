import styled from 'styled-components'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import screenSizes from '../utils/screen-sizes'

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const ProjectTitle = styled.h3`
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow.regular};
  padding: 0px 2px;
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
    color: ${({ theme }) => theme.colors.hoverGreen};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.colors.activeGreen};
  }
`

export const EducationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px;
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

export const Education = () => (
  <ScrollAnimation
    animateIn="animate__fadeIn"
    animateOnce={true}
    duration={1}
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
        MSc: ICT Innovation &amp; Human-Computer Interaction
      </StyledLink>
      <StyledLink href="https://www.ntu.edu.sg/Pages/home.aspx">
        Exchange semester at NTU SingaporeMCs: ICT Innovation &amp;
        Human-Computer Interaction
      </StyledLink>
    </EducationWrapper>
  </ScrollAnimation>
)
