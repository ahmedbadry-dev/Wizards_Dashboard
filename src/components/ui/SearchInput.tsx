import type { InputHTMLAttributes } from "react";

import { IconSearch } from "../icons";
import { cn } from "../../lib/cn";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <label className={cn("flex w-full items-center gap-3  border border-border bg-surface px-4 py-2 text-sm text-muted", className)}>
      <IconSearch className="h-3 w-3 shrink-0 text-secondary-light" />
      <input
        type="search"
        className={"w-full bg-transparent text-text outline-0"}
        {...props}
      />
    </label>
  );
}
