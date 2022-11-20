import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tempAvatar from '../../../../assets/avatar.jpg'
import { Bio, Details, GoToGit, NameHeader, ProfileContainer } from './style'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={tempAvatar} alt="" />
      <Bio>
        <NameHeader>
          <h1>Cameron Williamson</h1>
          <GoToGit href="">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GoToGit>
        </NameHeader>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Details>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </li>
        </Details>
      </Bio>
    </ProfileContainer>
  )
}
