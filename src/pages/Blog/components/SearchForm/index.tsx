import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { issue } from '../..'
import { SearchFormContainer } from './style'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

interface SearchFormProps {
  fetchIssues: (query: string) => {}
  issues: issue[]
}

export function SearchForm({ fetchIssues, issues }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleSearchIssue(data: SearchFormInputs) {
    fetchIssues(data.query)
    reset()
  }

  const numberOfPublications = issues.length

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
      <span>
        <h3>Publicações</h3>
        <p>{numberOfPublications} publicações</p>
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
