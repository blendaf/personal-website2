import styled from 'styled-components'
import {
  Project1,
  Project2,
  Project3,
  // Project4,
  // Project5,
} from './ProjectsModal'

const PostStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: darkcyan;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = ({ id }) => {
  switch (id) {
    case '1':
      return <Project1 />
      break
    case '2':
      return <Project2 />
      break
    case '3':
      return <Project3 />
      break
    case '4':
      return <Project4 />
      break
    case '5':
      return <Project5 />
      break
    case '6':
      return <Project6 />
      break
    case '7':
      return <Project7 />
      break
    case '8':
      return <Project8 />
      break
    case '9':
      return <Project9 />
      break
    case '10':
      return <Project10 />
      break
    default:
      return <p>{id}</p>
  }
}

export default ModalContent
