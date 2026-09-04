import { Button } from "../../../components/ui/Button"

type PaginationProps = {
    safeCurrentPage: number,
    pageCount: number,
    onPageChange: (page: number) => void
}


export const Pagination = ({
    safeCurrentPage,
    pageCount,
    onPageChange
}: PaginationProps) => {


    const start = Math.max(1, safeCurrentPage - 2)
    const end = Math.min(pageCount, safeCurrentPage + 2)

    const visiblePages: number[] = []

    for (let i = start; i <= end; i++) {
        visiblePages.push(i)
    }

    const showFirstPage = !visiblePages.includes(1)
    const showLastPage = !visiblePages.includes(pageCount)
    const showStartDots = start > 2
    const showEndDots = end < pageCount - 1


    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                className="h-8 min-w-8 px-2"
                disabled={safeCurrentPage <= 1}
                onClick={() => onPageChange(safeCurrentPage - 1)}
            >
                Prev
            </Button>

            {
                showFirstPage && (
                    <Button
                        variant={1 === safeCurrentPage ? "secondary" : "ghost"}
                        className="h-8 min-w-8 px-2"
                        onClick={() => onPageChange(1)}
                    >
                        1
                    </Button>
                )
            }

            {showStartDots && <span>...</span>}


            {visiblePages.map((page) => (
                <Button
                    key={page}
                    variant={page === safeCurrentPage ? "secondary" : "ghost"}
                    className="h-8 min-w-8 px-2"
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Button>
            ))}

            {showEndDots && <span>...</span>}

            {
                showLastPage && (
                    <Button
                        variant={pageCount === safeCurrentPage ? "secondary" : "ghost"}
                        className="h-8 min-w-8 px-2"
                        onClick={() => onPageChange(pageCount)}
                    >
                        {pageCount}
                    </Button>
                )
            }


            <Button
                variant="ghost"
                className="h-8 min-w-8 px-2"
                disabled={safeCurrentPage >= pageCount}
                onClick={() =>
                    onPageChange(safeCurrentPage + 1)
                }
            >
                Next
            </Button>
        </div>
    )
}
