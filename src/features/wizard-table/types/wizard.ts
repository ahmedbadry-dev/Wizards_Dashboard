export type Wizard = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  elixirs: { id: string; name: string }[];
};
