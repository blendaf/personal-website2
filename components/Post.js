import styled from 'styled-components'

const PostStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: darkcyan;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Post = ({ id, pathname }) => {
  return (
    <PostStyled>
      I am the post {id}; my pathname is: {pathname}
    </PostStyled>
  )
}

export default Post
