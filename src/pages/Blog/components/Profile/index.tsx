import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGithub } from '../../../../hooks/useGithub'
import { Bio, Details, GoToGit, NameHeader, ProfileContainer } from './style'

export function Profile() {
  const { user } = useGithub()

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
