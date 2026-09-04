
import { IconFilter } from "../../../components/icons";
import { SearchInput } from "../../../components/ui/SearchInput";

type WizardTableToolbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const WizardTableToolbar = ({
  searchValue,
  onSearchChange,
}: WizardTableToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="heading-2">Master Wizard Registry</h2>

      <div className="flex w-full  max-w-md overflow-hidden rounded-lg border border-border/30 bg-surface">
        <SearchInput
          aria-label="Search wizards"
          className="min-w-0 flex-1 border-0 bg-transparent p-4 "
          placeholder="Search wizards..."
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <span className="h-6 w-px shrink-0 self-center bg-border/30" />        <button
          className="ml-2 flex shrink-0 items-center gap-2  px-4 text-[16px] text-secondary-light transition-colors hover:bg-white/5"
          type="button"
        >
          <IconFilter className="h-4 w-4 " />
          Filter
        </button>
      </div>
    </div>
  );
};
