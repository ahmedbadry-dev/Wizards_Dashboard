import { fetchWizards } from '../services/wizardApi'
import { useDebouncedValue } from './useDebouncedValue'
import { useQuery } from '@tanstack/react-query'

export const useWizards = (searchValue: string) => {
  const debouncedSearch = useDebouncedValue(searchValue, 400)

  const {
    data: wizards = [],
    error,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['wizards', debouncedSearch],
    queryFn: () => fetchWizards(debouncedSearch),
  })

  return {
    wizards,
    error,
    isError,
    isFetching,
    isLoading,
    debouncedSearch,
  }
}
