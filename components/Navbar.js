import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import screenSizes from '../utils/screen-sizes'

const NavWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  cursor: default;
  margin: 50px auto;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 80%;
    margin: 20px auto;
    margin-top: 40px;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  color: ${(props) =>
    props.active ? props.theme.colors.hoverGreen : props.theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.hoverGreen};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.colors.activeGreen};
  }
`

const Navbar = () => {
  const router = useRouter()

  return (
    <NavWrapper>
      <Link href="/">
        <StyledLink active={router.pathname === '/'}>ABOUT</StyledLink>
      </Link>
      <Link href="/experience">
        <StyledLink active={router.pathname === '/experience'}>
          EXPERIENCE
        </StyledLink>
      </Link>
      <Link href="/myProjects">
        <StyledLink active={router.pathname === '/myProjects'}>
          PROJECTS
        </StyledLink>
      </Link>
    </NavWrapper>
  )
}

export default Navbar
