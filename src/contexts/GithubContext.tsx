import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GithubContextType {
  user: user
  issues: issue[]
  fetchIssues: (query: string) => Promise<void>
}

interface GithubProviderProps {
  children: ReactNode
}

interface user {
  avatar: string
  name: string
  followers: number
  company: string | null
  bio: string
  githubLink: string
  socialName: string
}

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

export const GithubContext = createContext({} as GithubContextType)

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState({} as user)
  const [issues, setIssues] = useState<issue[]>([])

  async function fetchGithub() {
    const response = await api.get(`/users/${username}`)
    const { avatar_url, name, company, bio, html_url, followers, login } =
      response.data

    const fetchedUser = {
      avatar: avatar_url,
      githubLink: html_url,
      socialName: login,
      name,
      company,
      bio,
      followers,
    }

    setUser(fetchedUser)
  }

  async function fetchIssues(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`
    )

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchGithub()
    fetchIssues()
  }, [])

  return (
    <GithubContext.Provider value={{ user, issues, fetchIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
