import { SearchFormContainer } from './style'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <span>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </span>

      <input type="text" placeholder="Busca conteúdo" />
    </SearchFormContainer>
  )
}
