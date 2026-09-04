
import { IconEye } from "../../../components/icons";
import { Badge } from "../../../components/ui/Badge";
import type { Wizard } from "../types/wizard";

type WizardTableRowProps = {
  wizard: Wizard;
};

const formatWizardId = (id: string) => {
  if (id.length <= 16) {
    return id;
  }

  return `${id.slice(0, 8)}...${id.slice(-6)}`;
};

const getNameParts = (wizard: Wizard) => ({
  firstName: wizard.firstName?.trim() || "(None)",
  lastName: wizard.lastName?.trim() || "Unknown",
});

export const WizardTableRow = ({ wizard }: WizardTableRowProps) => {
  const { firstName, lastName } = getNameParts(wizard);
  const elixirs = wizard.elixirs ?? [];

  return (
    <tr className="border-b border-border/40 transition-colors hover:bg-white/3">
      <td className="whitespace-nowrap px-6 py-5 text-sm font-medium text-secondary-soft">
        {formatWizardId(wizard.id)}
      </td>
      <td className="px-6 py-5 text-sm text-text">{firstName}</td>
      <td className="px-6 py-5 text-sm font-semibold text-text">{lastName}</td>
      <td className="px-6 py-5">
        {elixirs.length > 0 ? (
          <div className="flex max-w-xl flex-wrap gap-2">
            {elixirs.slice(0, 3).map((elixir) => (
              <Badge
                key={elixir.id}
                tone={elixirs.length > 1 ? "neutral" : "warning"}
                className="max-w-full truncate font-medium"
                title={elixir.name}
              >
                {elixir.name}
              </Badge>
            ))}
            {elixirs.length > 3 ? (
              <Badge tone="neutral">+{elixirs.length - 3} more</Badge>
            ) : null}
          </div>
        ) : (
          <span className="text-sm text-muted">None registered</span>
        )}
      </td>
      <td className="px-6 py-5 text-right">
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary-light transition-colors hover:bg-white/10 hover:text-text"
          type="button"
          aria-label={`View ${firstName} ${lastName}`}
        >
          <IconEye className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};
