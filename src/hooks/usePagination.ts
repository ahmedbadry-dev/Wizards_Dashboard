import { useState } from 'react'

export const usePagination = <T>(data: T[], PAGE_SIZE: number) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pageCount = Math.max(1, Math.ceil(data.length / PAGE_SIZE))
  const safeCurrentPage = Math.min(currentPage, pageCount)
  const pageStartIndex = (safeCurrentPage - 1) * PAGE_SIZE
  const pageEndIndex = Math.min(pageStartIndex + PAGE_SIZE, data.length)

  const visibleItems = data.slice(pageStartIndex, pageEndIndex)

  return {
    pageCount,
    safeCurrentPage,
    pageStartIndex,
    pageEndIndex,
    setCurrentPage,
    visibleItems,
  }
}
