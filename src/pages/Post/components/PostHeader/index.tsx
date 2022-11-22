import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { PostDetails } from '../..'
import { relativeDateFormatter } from '../../../../util/formatter'
import { Menu, PostHeaderContainer, PostInfo } from './style'

// const username = import.meta.env.VITE_GITHUB_USERNAME
// const repoName = import.meta.env.VITE_GITHUB_REPONAM

// interface PostDetails {
//   number: number
//   url: string
//   title: string
//   comments: number
//   content: string
//   user: string
//   createdAt: string
// }

interface PostHeaderProps {
  postDetails: PostDetails
}

export function PostHeader({ postDetails }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postDetails.createdAt)

  return (
    <PostHeaderContainer>
      <Menu>
        <NavLink to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Voltar</span>
        </NavLink>
        <a href={postDetails.url} target="_blank">
          <span>Ver no Github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </Menu>
      <h1>{postDetails.title}</h1>

      <PostInfo>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {postDetails.user}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formattedDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {postDetails.comments} comentários
        </li>
      </PostInfo>
    </PostHeaderContainer>
  )
}
