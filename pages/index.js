import styled from 'styled-components'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import Post from '../components/Post'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Grid from '../components/Grid'

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
      >
        <Post id={router.query.postId} pathname={router.pathname} />
      </Modal>
      {/* <Grid /> */}
      <Projects />
      <Footer />
    </>
  )
}

export default Home

// TODO
// 1. Compress project images
// 2. Add text to experience and education
// 3. Add bubble effect to projects
// 4. Fix mailto
//
