import type { Wizard } from '../types/wizard'

const API_URL = 'https://wizard-world-api.herokuapp.com/Wizards'

const normalizeNamePart = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

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

  const nameParts = trimmedSearch.split(/\s+/).map(normalizeNamePart)

  const normalizedFullName = trimmedSearch
    .split(/\s+/)
    .map(normalizeNamePart)
    .join(' ')

  const mergeWizards = (wizardGroups: Wizard[][]) => {
    const wizardsById = new Map<string, Wizard>()

    wizardGroups.flat().forEach((wizard) => {
      wizardsById.set(wizard.id, wizard)
    })

    return Array.from(wizardsById.values())
  }

  if (nameParts.length > 1) {
    const [splitNameMatches, firstNameMatches, lastNameMatches] =
      await Promise.all([
        requestWizards(
          new URLSearchParams({
            FirstName: nameParts[0],
            LastName: nameParts.slice(1).join(' '),
          })
        ),
        requestWizards(new URLSearchParams({ FirstName: normalizedFullName })),
        requestWizards(new URLSearchParams({ LastName: normalizedFullName })),
      ])

    return mergeWizards([splitNameMatches, firstNameMatches, lastNameMatches])
  }

  const [firstNameMatches, lastNameMatches] = await Promise.all([
    requestWizards(new URLSearchParams({ FirstName: normalizedFullName })),
    requestWizards(new URLSearchParams({ LastName: normalizedFullName })),
  ])

  return mergeWizards([firstNameMatches, lastNameMatches])
}
