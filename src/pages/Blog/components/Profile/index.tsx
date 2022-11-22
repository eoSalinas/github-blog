import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Bio, Details, GoToGit, NameHeader, ProfileContainer } from './style'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface User {
  avatar: string
  name: string
  followers: number
  company: string | null
  bio: string
  githubLink: string
  socialName: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

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

  useEffect(() => {
    fetchGithub()
  }, [])

  const userHasCompany = user.company

  return (
    <ProfileContainer>
      <img src={user.avatar} alt="" />
      <Bio>
        <NameHeader>
          <h1>{user.name}</h1>
          <GoToGit href={user.githubLink} target="_blank">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GoToGit>
        </NameHeader>

        <p>{user.bio}</p>
        <Details>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.socialName}</span>
          </li>
          {userHasCompany && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </li>
        </Details>
      </Bio>
    </ProfileContainer>
  )
}
