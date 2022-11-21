import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GithubContextType {
  user: user
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

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState({} as user)

  async function fetchGithub() {
    const response = await api.get('')
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

  useEffect(() => {
    fetchGithub()
  }, [])

  return (
    <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
  )
}
