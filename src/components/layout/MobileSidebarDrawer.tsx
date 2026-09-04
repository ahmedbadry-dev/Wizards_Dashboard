import {
    IconBook,
    IconClose,
    IconDashboardGrid,
    IconFlask,
    IconHelpCircle,
    IconSettings,
    IconSparkles,
    IconUsers,
} from "../icons";
import { Button } from "../ui/Button";

type MobileSidebarDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const navItems = [
    { navLabel: "Dashboard", icon: <IconDashboardGrid className="h-5 w-5" /> },
    { navLabel: "Wizards", icon: <IconUsers className="h-5 w-5 text-secondary-light" /> },
    { navLabel: "Elixirs", icon: <IconFlask className="h-5 w-5 text-secondary-light" /> },
    { navLabel: "Archives", icon: <IconBook className="h-5 w-5 text-secondary-light" /> },
];

const activeItem = "Dashboard";

export function MobileSidebarDrawer({ isOpen, onClose }: MobileSidebarDrawerProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-40 lg:hidden">
            <button
                className="absolute inset-0 h-full w-full bg-bg/70 backdrop-blur-sm"
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
            />

            <aside className="relative z-50 flex h-screen w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-white/10 bg-surface px-4 py-5 shadow-elixir">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm font-black text-primary-dark">Wizarding Registry</p>
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full text-secondary-light transition-colors hover:bg-white/10 hover:text-text"
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={onClose}
                    >
                        <IconClose className="h-4 w-4" />
                    </button>
                </div>

                <div className="mb-10 p-5 text-center">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-secondary-soft to-primary p-px">
                        <div className="flex h-full w-full items-center justify-center rounded-[calc(0.75rem-1px)] bg-surface">
                            <IconSparkles />
                        </div>
                    </div>
                    <p className="font-black text-primary-dark">Registry</p>
                    <p className="mt-1 font-medium text-xs text-muted">Ministry of Alchemical Records</p>
                </div>

                <nav className="space-y-2 flex-1">
                    {navItems.map(({ navLabel, icon }) => (
                        <a
                            key={navLabel}
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                onClose();
                            }}
                            className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${activeItem == navLabel
                                ? "bg-primary/20 text-primary border-r-2 border-primary"
                                : "text-secondary-light hover:bg-white/10"
                                }`}
                        >
                            <span className="mr-4">{icon}</span>
                            {navLabel}
                        </a>
                    ))}
                </nav>

                <div className="space-y-2">
                    <Button variant="secondary" className="mb-6 w-full shadow-elixir" onClick={onClose}>
                        + New Elixir
                    </Button>

                    <a
                        href="#"
                        onClick={(event) => {
                            event.preventDefault();
                            onClose();
                        }}
                        className="flex w-full px-4 py-2 text-left text-sm font-semibold text-secondary-light"
                    >
                        <span className="mr-4"><IconSettings className="h-5 w-5 text-secondary-light" /></span>
                        Settings
                    </a>
                    <a
                        href="#"
                        onClick={(event) => {
                            event.preventDefault();
                            onClose();
                        }}
                        className="flex w-full px-4 py-2 text-left text-sm font-semibold text-secondary-light"
                    >
                        <span className="mr-4"><IconHelpCircle className="h-5 w-5 text-secondary-light" /></span>
                        Support
                    </a>
                </div>
            </aside>
        </div>
    );
}
