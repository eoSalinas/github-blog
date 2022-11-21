import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    body {
      background: ${(props) => props.theme['base-background']};
      color: ${(props) => props.theme['base-text']};
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1rem 'Nunito', sans-serif;
    }

    h1 {
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
    }

    h3, h4, h5, h6, strong {
      font-weight: 700;
      line-height: 160%;
    }

    p {
      line-height: 160%;
    }

    a {
      text-decoration: none;
      line-height: 160%;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
