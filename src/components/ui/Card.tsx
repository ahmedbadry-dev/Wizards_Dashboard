import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border/30 bg-card/80 p-6 card-effect",
        className,
      )}
    >
      {children}
    </section>
  );
}

