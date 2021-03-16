import Link from 'next/link'
import styled from 'styled-components'
import { Cross } from '@styled-icons/entypo/Cross'
import screenSizes from '../../utils/screen-sizes'

export const Container = styled.div`
  min-height: 100%;
  color: ${({ theme }) => theme.colors.black};
  width: 84%;
  margin: 0 auto;
  /* padding: 50px 0px; */
`

const ContactIcon = styled.a`
  background-color: transparent;
  border: none;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 50px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
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

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 30px;
  }
`

export const Back = () => (
  <Link href={`/`}>
    <ContactIcon>
      <StyledIcon as={Cross}></StyledIcon>
    </ContactIcon>
  </Link>
)

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProjectInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 50px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProjectImage = styled.img`
  width: 50%;
  margin-right: 25px;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 0;
    width: 80%;
  }
`

export const Video = styled.div`
  width: 50%;
  border-radius: 20px;
  margin-right: 25px;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 0;
    width: 100%;
  }
`

export const About = styled.div`
  width: 50%;
  margin-left: 25px;
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    margin: 0;
    width: 100%;
    margin-top: 20px;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: -8px;
  margin-top: ${(props) => (props.margin ? '40px ' : '-8px;')};
`

export const Paragraph = styled.p`
  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 100%;
  }
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBlue};
  }
`

export const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`

export const Image = styled.img`
  width: 20%;
  display: flex;
  flex: 1 100px;
  border-radius: 20px;
  border: ${(props) => (props.border ? 'solid 1px lightgray ' : 'none')};
  /* border-radius: ${(props) => (props.border ? '0px ' : '20px')}; */
  /* box-shadow: ${({ theme }) => theme.boxShadow.light}; */
  margin: 10px;

  @media screen and (max-width: ${screenSizes.tablet.max}) {
  }

  @media screen and (max-width: ${screenSizes.phone.max}) {
    width: 100%;
    flex: 1 0 auto;
    margin: 0;
    margin-top: 10px;
  }
`
