import { cn } from "../../lib/cn";

type BadgeTone = "success" | "warning" | "danger" | "neutral";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const toneClassNames: Record<BadgeTone, string> = {
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  warning: "border-primary/30 bg-primary/10 text-primary",
  danger: "border-danger/30 bg-danger/10 text-danger",
  neutral: "border-secondary-light/30 bg-secondary-light/10 text-secondary-light",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold",
        toneClassNames[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
