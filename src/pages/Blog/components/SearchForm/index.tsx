import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useGithub } from '../../../../hooks/useGithub'
import { SearchFormContainer } from './style'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  const { fetchIssues } = useGithub()

  function handleSearchIssue(data: SearchFormInputs) {
    fetchIssues(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
      <span>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </span>

      <input
        type="text"
        placeholder="Busca conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
