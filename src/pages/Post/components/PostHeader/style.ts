import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  padding: 2rem;
  margin-top: -88px;
  margin-bottom: 40px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  h1 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    &:first-child {
      svg {
        margin-right: 0.5rem;
      }
    }

    &:last-child {
      svg {
        margin-left: 0.5rem;
      }
    }

    &:hover {
      border-color: ${(props) => props.theme['blue']};
      transition: border-color 0.2s;
    }
  }
`

export const PostInfo = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
