import Link from 'next/link'
import styled from 'styled-components'

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const PostCardGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PostCardGridStyle = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

const PostCard = styled.a`
  width: 150px;
  height: 150px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black solid 1px;
`

export default function PostCardGrid() {
  return (
    <PostCardGridWrapper>
      <PostCardGridStyle>
        {data.map((id, index) => (
          <Link key={index} href={`/?postId=${id}`} as={`/post/${id}`}>
            <PostCard>{id}</PostCard>
          </Link>
        ))}
      </PostCardGridStyle>

      <PostCardGridStyle>
        {data.map((id, index) => (
          <Link key={index} href="/article/[articleId]" as={`/article/${id}`}>
            <PostCard>{id}</PostCard>
          </Link>
        ))}
      </PostCardGridStyle>
    </PostCardGridWrapper>
  )
}
