import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { relativeDateFormatter } from '../../util/formatter'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostCard, PostsContainer } from './style'

interface issue {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Blog() {
  const [issues, setIssues] = useState<issue[]>([])

  async function fetchIssues(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`
    )

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <>
      <Profile />
      <SearchForm fetchIssues={fetchIssues} />

      <PostsContainer>
        {issues.map((issue) => {
          const formattedDate = relativeDateFormatter(issue.created_at)
          return (
            <PostCard key={issue.number}>
              <span>
                <h2>{issue.title}</h2>
                <p>{formattedDate}</p>
              </span>
              <p>{issue.body}</p>
            </PostCard>
          )
        })}
      </PostsContainer>
    </>
  )
}
