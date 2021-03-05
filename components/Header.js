import Link from 'next/link'
// import { useContext } from 'react'
// import { useRouter } from 'next/router'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import Navbar from './Navbar'
import { Github } from '@styled-icons/boxicons-logos'
import { AlternateEmail } from '@styled-icons/material'
import { LinkedinWithCircle } from '@styled-icons/entypo-social'
// import profile from './profile.jpg'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

const ProfileImage = styled.div`
  background-color: blue;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 25px;
  background-image: url('profile.jpg');
  background-size: cover;
`

const ProfileInfo = styled.div`
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.h1`
  margin: 10px 0;
  display: contents;
`

const Positions = styled.div`
  margin: 10px 0;
`

const Contact = styled.div`
  display: flex;
  width: 100%;
`

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

const Header = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Profile>
          <ProfileImage></ProfileImage>
          <ProfileInfo>
            <Name>Blenda Fröjdh</Name>
            <Positions>
              UX Researcher • Front-end Developer • Interaction Designer
            </Positions>
            <Contact>
              <ContactIcon href="https://www.linkedin.com/in/blendafrojdh/">
                <StyledIcon as={Github}></StyledIcon>
              </ContactIcon>
              <ContactIcon href="mailto:blendaf@kth.se">
                <StyledIcon as={AlternateEmail}></StyledIcon>
              </ContactIcon>
              <ContactIcon href="https://www.linkedin.com/in/blendafrojdh/">
                <StyledIcon as={LinkedinWithCircle}></StyledIcon>
              </ContactIcon>
            </Contact>
          </ProfileInfo>
        </Profile>
      </Container>
    </>

    //   <NavWrapper>
    //     <TitleWrapper>
    //       <Link href="/" passHref>
    //         <StyledLink active={pathname === '/'}>
    //           <div>
    //             <Title>speak.</Title>
    //             <Title mutedColor>exchange</Title>
    //           </div>
    //           <Subtitle>bilingual dictionary</Subtitle>
    //         </StyledLink>
    //       </Link>
    //       <Link href={fbContext.user ? '/repeat' : '/all-decks'} passHref>
    //         <StyledLink active={pathname !== '/'}>
    //           <div>
    //             <Title>speak.</Title>
    //             <Title mutedColor>repeat</Title>
    //           </div>
    //           <Subtitle>vocabulary trainer</Subtitle>
    //         </StyledLink>
    //       </Link>
    //     </TitleWrapper>
    //     <LogInButton />
    //   </NavWrapper>
  )
}

export default Header
