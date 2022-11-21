import styled from 'styled-components'

export const PostsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14.625rem;
`

export const PostCard = styled.div`
  max-width: 864px;
  width: 100%;
  height: 16.25rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 0.2s;
  }

  span {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      flex: 1;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      width: max-content;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    color: ${(props) => props.theme['base-text']};
  }
`
