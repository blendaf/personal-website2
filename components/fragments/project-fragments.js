import Link from 'next/link'
import styled from 'styled-components'
import { Cross } from '@styled-icons/entypo/Cross'

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
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
`

export const Back = () => (
  <Link href={`/`}>
    <ContactIcon>
      <StyledIcon as={Cross}></StyledIcon>
    </ContactIcon>
  </Link>
)

export const ProjectWrapper = styled.div`
  width: 84%;
  margin: 0 auto;
  padding: 40px 0px;
`

export const ProjectInfoWrapper = styled.div`
  display: flex;
  /* padding-top: 60px; */
`

export const ProjectImage = styled.img`
  width: 50%;
  /* background-image: ${(props) => `url(${props.background})`}; */
  margin: 0px 20px;
  margin-right: 25px;
`

export const Video = styled.div`
  width: 50%;
  border-radius: 20px;
  margin-right: 25px;
`
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-left: 25px;
`

export const Tools = styled.div``

export const About = styled.div``

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`

export const Images = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
`
