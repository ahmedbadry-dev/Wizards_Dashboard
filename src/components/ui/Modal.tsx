import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { Button } from "./Button";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  className?: string;
};

export function Modal({
  children,
  isOpen,
  title,
  onClose,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 px-4 backdrop-blur-sm">
      <div
        className={cn(
          "w-full max-w-xl rounded-lg border border-border bg-card p-6 shadow-elixir",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-xl font-bold text-text">
            {title}
          </h2>
          <Button variant="ghost" className="px-2 py-1" onClick={onClose}>
            Close
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
