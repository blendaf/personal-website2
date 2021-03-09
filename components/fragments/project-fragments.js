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
  padding: 50px 0px;
`

export const ProjectInfoWrapper = styled.div`
  display: flex;
  align-items: start;
`

export const ProjectImage = styled.img`
  width: 50%;
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
  margin-top: -8px;
  margin-top: ${(props) => (props.margin ? '40px ' : '-8px;')};
`

export const Paragraph = styled.p``

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
`
