import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content, Menu, PostContainer, PostHeader, PostInfo } from './style'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <Menu>
          <a href="/">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>Voltar</span>
          </a>
          <a href="">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
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
      </PostHeader>

      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Content>
    </PostContainer>
  )
}
