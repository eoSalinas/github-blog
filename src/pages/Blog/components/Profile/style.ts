import styled from 'styled-components'

export const ProfileContainer = styled.section`
  padding: 2rem;
  max-width: 864px;
  display: flex;
  gap: 2rem;
  margin-top: -88px;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const Bio = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const NameHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const GoToGit = styled.a`
  height: fit-content;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue']};
    margin-right: 0.5rem;
  }

  svg {
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue']};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['blue']};
    transition: border-bottom 0.2s;
  }
`

export const Details = styled.ul`
  display: flex;
  gap: 1.5rem;

  list-style: none;

  li {
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
