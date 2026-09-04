import type { Wizard } from '../types/wizard'

const API_URL = 'https://wizard-world-api.herokuapp.com/Wizards'

export const fetchWizards = async (searchQuery: string): Promise<Wizard[]> => {
  const trimmedSearch = searchQuery.trim()

  if (!trimmedSearch) {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Unable to load wizard records')
    }

    return (await response.json()) as Wizard[]
  }

  const requestWizards = async (params: URLSearchParams) => {
    const response = await fetch(`${API_URL}?${params.toString()}`)

    if (!response.ok) {
      throw new Error('Unable to load wizard records')
    }

    return (await response.json()) as Wizard[]
  }

  const nameParts = trimmedSearch.split(/\s+/)

  if (nameParts.length > 1) {
    return requestWizards(
      new URLSearchParams({
        FirstName: nameParts[0],
        LastName: nameParts.slice(1).join(' '),
      })
    )
  }

  const [firstNameMatches, lastNameMatches] = await Promise.all([
    requestWizards(new URLSearchParams({ FirstName: trimmedSearch })),
    requestWizards(new URLSearchParams({ LastName: trimmedSearch })),
  ])

  const wizardsById = new Map<string, Wizard>()

  ;[...firstNameMatches, ...lastNameMatches].forEach((wizard) => {
    wizardsById.set(wizard.id, wizard)
  })

  return Array.from(wizardsById.values())
}
