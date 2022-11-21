import styled from 'styled-components'

export const ProfileContainer = styled.section`
  padding: 2rem 2.5rem;
  max-width: 864px;
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-top: -88px;
  margin-bottom: 72px;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 390px) {
    width: fit-content;
  }
`

export const Bio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  p {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`

export const NameHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    flex: 1;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const GoToGit = styled.a`
  width: max-content;
  height: 1.5rem;

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
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 390px) {
    gap: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
