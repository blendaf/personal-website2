import Link from 'next/link'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

const NavWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-evenly;
  cursor: default;
  margin-top: 50px;
  margin-bottom: 80px;
`

const StyledLink = styled.a`
  cursor: pointer;
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }
`

const Navbar = () => {
  return (
    <NavWrapper>
      <Link href="/">
        <StyledLink>BIO</StyledLink>
      </Link>
      <Link href="/experience">
        <StyledLink>EXPERIENCE</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>SKILLS</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>HOME</StyledLink>
      </Link>
    </NavWrapper>

    // <NavWrapper>
    //   <TitleWrapper>
    //     <Link href="/" passHref>
    //       <StyledLink active={pathname === '/'}>
    //         <div>
    //           <Title>speak.</Title>
    //           <Title mutedColor>exchange</Title>
    //         </div>
    //         <Subtitle>bilingual dictionary</Subtitle>
    //       </StyledLink>
    //     </Link>
    //     <Link href={fbContext.user ? '/repeat' : '/all-decks'} passHref>
    //       <StyledLink active={pathname !== '/'}>
    //         <div>
    //           <Title>speak.</Title>
    //           <Title mutedColor>repeat</Title>
    //         </div>
    //         <Subtitle>vocabulary trainer</Subtitle>
    //       </StyledLink>
    //     </Link>
    //   </TitleWrapper>
    //   <LogInButton />
    // </NavWrapper>
  )
}

export default Navbar
