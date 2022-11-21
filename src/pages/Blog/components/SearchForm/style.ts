import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;
  min-width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 48px;

  span {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    flex: 1;
    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    outline: 0;
    border: 1px solid ${(props) => props.theme['base-border']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
