import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { Menu, PostHeaderContainer, PostInfo } from './style'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <Menu>
        <NavLink to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Voltar</span>
        </NavLink>
        <NavLink to="">
          <span>Ver no Github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </Menu>
      <h1>Javascript data types and structures</h1>

      <PostInfo>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </PostInfo>
    </PostHeaderContainer>
  )
}
