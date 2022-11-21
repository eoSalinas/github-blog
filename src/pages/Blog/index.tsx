import { useGithub } from '../../hooks/useGithub'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostCard, PostsContainer } from './style'

export function Blog() {
  const { issues } = useGithub()

  return (
    <>
      <Profile />
      <SearchForm />

      <PostsContainer>
        {issues.map((issue) => {
          return (
            <PostCard key={issue.number}>
              <span>
                <h2>{issue.title}</h2>
                <p>{issue.created_at}</p>
              </span>
              <p>{issue.body}</p>
            </PostCard>
          )
        })}
      </PostsContainer>
    </>
  )
}
