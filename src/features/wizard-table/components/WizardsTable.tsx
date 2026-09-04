
import { useState } from "react";

import { WizardTableHeader } from "./WizardTableHeader";
import { WizardTableRow } from "./WizardTableRow";
import { WizardTableToolbar } from "./WizardTableToolbar";
import { useWizards } from "../hooks/useWizards";
import { Pagination } from "./Pagination";
import { usePagination } from "../../../hooks/usePagination";


export const WizardsTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const { wizards, isLoading, isFetching, isError, error } = useWizards(searchValue)

  const {
    pageCount,
    pageEndIndex,
    pageStartIndex,
    safeCurrentPage,
    setCurrentPage,
    visibleItems
  } = usePagination(wizards, 10)


  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return (
    <section className="mt-8 overflow-hidden rounded-lg border border-border/30 bg-card card-effect">
      <WizardTableToolbar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />

      <div className="overflow-x-auto">
        <table className="min-w-215 w-full border-collapse">
          <WizardTableHeader />
          <tbody>
            {isLoading ? (
              <tr>
                <td className="px-6 py-14 text-center text-sm text-muted" colSpan={5}>
                  Loading wizard records...
                </td>
              </tr>
            ) : null}

            {isError ? (
              <tr>
                <td className="px-6 py-14 text-center text-sm text-danger" colSpan={5}>
                  {error instanceof Error
                    ? error.message
                    : "Unable to load wizard records"}
                </td>
              </tr>
            ) : null}

            {!isLoading && !isError && visibleItems.length === 0 ? (
              <tr>
                <td className="px-6 py-14 text-center text-sm text-muted" colSpan={5}>
                  No wizard records found.
                </td>
              </tr>
            ) : null}

            {!isLoading && !isError
              ? visibleItems.map((wizard) => (
                <WizardTableRow key={wizard.id} wizard={wizard} />
              ))
              : null}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 border-t border-border/50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-secondary-light">
          Showing{" "}
          {wizards.length > 0
            ? `${pageStartIndex + 1}-${pageEndIndex} of ${wizards.length}`
            : "0"}{" "}
          Records
          {isFetching && !isLoading ? (
            <span className="ml-2 text-muted">Updating...</span>
          ) : null}
        </p>

        <Pagination
          pageCount={pageCount}
          onPageChange={setCurrentPage}
          safeCurrentPage={safeCurrentPage}
        />
      </div>
    </section>
  );
};
