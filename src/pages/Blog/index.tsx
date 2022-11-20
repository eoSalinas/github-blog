import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostCard, PostContainer } from './style'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchForm />

      <PostContainer>
        <PostCard>
          <span>
            <h2>JavaScript data types and data structures</h2>
            <p>Há 1 dia</p>
          </span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostCard>
        <PostCard>
          <span>
            <h2>JavaScript data types and data structures</h2>
            <p>Há 1 dia</p>
          </span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostCard>
        <PostCard>
          <span>
            <h2>JavaScript data types and data structures</h2>
            <p>Há 1 dia</p>
          </span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </PostCard>
        <PostCard>
          <span>
            <h2>JavaScript data types and data structures</h2>
            <p>Há 1 dia</p>
          </span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </PostCard>
      </PostContainer>
    </>
  )
}
