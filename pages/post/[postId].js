import { useRouter } from 'next/router'
import ModalContent from '../../components/ModalContent'

const PostPage = () => {
  const router = useRouter()
  const { postId } = router.query

  return (
    <>
      <ModalContent id={postId} pathname={router.pathname} />
    </>
  )
}

export default PostPage
