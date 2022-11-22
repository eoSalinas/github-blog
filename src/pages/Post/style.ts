import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 864px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  color: ${(props) => props.theme['base-text']};

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }
`
