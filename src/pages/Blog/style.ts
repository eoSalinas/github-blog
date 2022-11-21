import styled from 'styled-components'

export const PostsContainer = styled.main`
  max-width: 864px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 234px;
`

export const PostCard = styled.div`
  width: 26rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  span {
    display: flex;
    justify-content: space-between;

    h2 {
      max-width: 17.6875rem;
      margin-bottom: 1.25rem;

      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
