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
`

const StyledLink = styled.a`
  cursor: pointer;
  transform: translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  color: ${(props) =>
    props.active ? props.theme.colors.hoverBlue : props.theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.colors.activeBlue};
  }
`

const Navbar = () => {
  const router = useRouter()

  return (
    <NavWrapper>
      <Link href="/">
        <StyledLink active={router.pathname === '/'}>PROJECTS</StyledLink>
      </Link>
      <Link href="/experience">
        <StyledLink active={router.pathname !== '/'}>EXPERIENCE</StyledLink>
      </Link>
      {/* <Link href="/">
        <StyledLink>SKILLS</StyledLink>
      </Link>
      <Link href="/">
        <StyledLink>HOME</StyledLink>
      </Link> */}
    </NavWrapper>
  )
}

export default Navbar
