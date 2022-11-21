import { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export function useGithub() {
  return useContext(GithubContext)
}
