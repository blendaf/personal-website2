import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`

const EducationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`

const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`

const ExperienceTitle = styled.h3`
  margin-bottom: 10px;
`

const ExperienceDescription = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const ExperienceLine = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.black};
  height: 40px;
`

const Experience = () => (
  <>
    <Navbar />
    <Container>
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
      <ExperienceWrapper>
        <Title>Work Experience</Title>
        <ExperienceTitle>Schibsted Media Group</ExperienceTitle>
        <ExperienceDescription>
          January 2021 - June 2021 <br />
          Master thesis student
        </ExperienceDescription>
        <ExperienceDescription>Some text</ExperienceDescription>
        <ExperienceLine />
      </ExperienceWrapper>
    </Container>
  </>
)

export default Experience
