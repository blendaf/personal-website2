import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  cursor: default;
  margin: 50px 0;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 20px 0;
  }
`

const Copyright = styled.p`
  text-align: center;
`

const Photocredit = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    font-size: 8px;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
  margin: 0px 2px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition-duration: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>Copyright Blenda Fröjdh 2021</Copyright>

      <Photocredit>
        Photographs by
        <StyledLink href="https://unsplash.com/@mattiasdiesel">
          Mattias Diesel,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@adigold1">
          Adi Goldstein,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@hush52">
          Hush Naidoo,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@neonbrand">
          NeONBRAND,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@jonasleupe">
          Jonas Leupe,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@fixelgraphy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Fixelgraphy,{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@hejohnnyme">
          Nikola Johnny Mirkovic, and{' '}
        </StyledLink>
        <StyledLink href="https://unsplash.com/@pinho">Pinho </StyledLink> on{' '}
        Unsplash. Favicon made by
        <StyledLink href="https://www.freepik.com">
          Freepik
        </StyledLink> from{' '}
        <StyledLink href="https://www.flaticon.com/">flaticon.com</StyledLink>
      </Photocredit>
    </Wrapper>
  )
}

export default Footer
