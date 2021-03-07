import styled from 'styled-components'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import ModalContent from '../components/ModalContent'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Head from 'next/head'

Modal.setAppElement('#__next')

const Home = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
// 1. Compress project images
// 2. Add text to experience and education
// 3. Add bubble effect to projects
// 4. Fix mailto
// 5. Fix active link/page in navbar
// 6. Add text to projects
// 7.
