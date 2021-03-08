import styled from 'styled-components'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import ModalContent from '../components/ModalContent'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

Modal.setAppElement('#__next')

const Home = () => {
  const router = useRouter()

  return (
    <>
      <Header />

      <Modal
        isOpen={!!router.query.postId}
        onRequestClose={() => router.push('/')}
        contentLabel="Post modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(193, 198, 199, 0.8)',
          },
          content: {
            borderRadius: '4px',
            padding: '0px',
            top: '60px',
            left: '100px',
            right: '100px',
            bottom: '60px',
            border: '1px solid rgba(193, 198, 199, 0.8)',
          },
        }}
      >
        <ModalContent id={router.query.postId} pathname={router.pathname} />
      </Modal>
      <Projects />
      <Footer />
    </>
  )
}

export default Home

// TODO
// 2. Add text to experience and education
// 4. Fix mailto
// 6. Add text to projects
// 7. Make responsive
