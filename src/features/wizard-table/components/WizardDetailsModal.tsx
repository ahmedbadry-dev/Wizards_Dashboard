
import { IconChevronRight, IconEdit, IconFlaskFilled, IconMagicWand } from "../../../components/icons";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Modal } from "../../../components/ui/Modal";
import type { Wizard } from "../types/wizard";

type WizardDetailsModalProps = {
    wizard: Wizard;
    isOpen: boolean;
    onClose: () => void;
};

export const WizardDetailsModal = ({
    wizard,
    isOpen,
    onClose
}: WizardDetailsModalProps) => {
    const firstName = wizard.firstName?.trim() || "Unknown";
    const lastName = wizard.lastName?.trim() || "Unknown";
    const elixirs = wizard.elixirs ?? [];

    const fullName = [wizard.firstName?.trim(), wizard.lastName?.trim()]
        .filter(Boolean)
        .join(" ") || "Unknown";

    const registryId = wizard.id
        ? `WR-${wizard.id.slice(0, 4).toUpperCase()}-${lastName.slice(0, 2).toUpperCase()}`
        : "WR-0000-UN";

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`${fullName} profile`}
        >
            <div className="max-h-[90vh] overflow-y-auto scrollbar-themed">
                <header className="flex items-start justify-between gap-6 border-b border-border/30 px-6 py-5 sm:px-8">
                    <div>
                        <p className="heading-3 font-normal text-[16px] text-secondary-soft uppercase">Member Profile</p>
                        <h2 className="mt-1 text-3xl font-semibold leading-10 text-text ">{fullName}</h2>
                    </div>

                    <div className="text-right">
                        <p className="text-[16px] text-secondary-light">Registry ID</p>
                        <p className="mt-1  text-primary heading-2">{registryId}</p>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8 px-6 py-6 sm:px-8">
                    <aside className="col-span-4">
                        <div className="relative mx-auto flex h-54 w-54 items-center justify-center">
                            <div className="absolute inset-0 rounded-full  bg-linear-to-br from-secondary-soft/20 to-primary/20 opacity-50 blur-2xl" />
                            <div className="absolute inset-3 rounded-full border-2 border-secondary-soft/30" />
                            <div className="relative h-46 w-46 overflow-hidden rounded-full border border-primary/30 bg-bg/70 ">
                                <img
                                    src="/images/member-demo-profile.jpg"
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            <Badge tone="neutral" className="text-[16px] font-normal">Class A Citizen</Badge>
                            <Badge tone="warning">High Council</Badge>
                        </div>
                    </aside>

                    <section className="min-w-0 col-span-8">
                        <div className="grid gap-6 rounded-lg bg-bg/45 p-6 sm:grid-cols-2">
                            <div>
                                <p className=" text-secondary-light">First Name</p>
                                <p className="mt-2 font-semibold text-text">{firstName}</p>
                            </div>
                            <div>
                                <p className=" text-secondary-light">Last Name</p>
                                <p className="mt-2 font-semibold text-text">{lastName}</p>
                            </div>
                            <div>
                                <p className="text-secondary-light">Registry Status</p>
                                <p className="mt-2 flex items-center gap-2 font-semibold text-primary">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    Active
                                </p>
                            </div>
                            <div>
                                <p className="text-secondary-light">Primary Specialty</p>
                                <p className="mt-2 font-semibold text-text">
                                    Domestic Alchemy & Cleaning Charms
                                </p>
                            </div>
                        </div>

                        <div className="mt-7">
                            <h3 className="flex items-center gap-2 text-xl leading-8 text-text ">
                                <IconFlaskFilled className="h-5 w-5 text-secondary-soft" />
                                Associated Elixirs
                            </h3>
                            <div className="mt-3 border-t border-border/30 pt-5">
                                {elixirs.length > 0 ? (
                                    <div className="max-h-48 space-y-3 overflow-y-auto pr-1">
                                        {elixirs.map((elixir) => (
                                            <div
                                                key={elixir.id}
                                                className="flex items-center gap-4 rounded-lg bg-card-light/40 p-3"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-secondary-soft/20 bg-secondary-soft/10">
                                                    <IconMagicWand className="h-5 w-5 text-secondary-soft" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate font-medium text-text" title={elixir.name}>
                                                        {elixir.name}
                                                    </p>
                                                    <p className="text-sm text-secondary-light">Inventory: 142 Units</p>
                                                </div>
                                                <span className="text-2xl text-secondary-light"><IconChevronRight /></span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-lg bg-card-light/35 p-4 text-sm text-muted">
                                        No elixirs registered.
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="flex items-center justify-end gap-6 border-t border-border/30 px-6 py-5 sm:px-8">
                    <Button variant="ghost" onClick={onClose}>
                        Close
                    </Button>
                    <Button className="gap-2 px-6 shadow-elixir" >
                        <IconEdit className="h-4 w-4" />
                        Edit Record
                    </Button>
                </footer>
            </div>
        </Modal>
    );
};
