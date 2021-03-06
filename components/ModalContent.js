import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
} from './ProjectsModal'

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
    default:
      return <p>{id}</p>
  }
}

export default ModalContent
