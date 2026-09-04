import type { ReactNode } from "react";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";

import { cn } from "../../lib/cn";

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
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/70 px-4 py-6 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className={cn(
          "max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sr-only">
          <h2 id={titleId}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
    , portalRoot,
  );
}
