import { IconBook, IconDashboardGrid, IconFlask, IconHelpCircle, IconSettings, IconSparkles, IconUsers } from "../icons"
import { Button } from "../ui/Button";

// const navItems = ["Dashboard", "Wizards", "Elixirs", "Archives"]
const navItems = [
    { navLabel: 'Dashboard', icon: <IconDashboardGrid className="h-5 w-5" /> },
    { navLabel: 'Wizards', icon: <IconUsers className="h-5 w-5 text-secondary-light" /> },
    { navLabel: 'Elixirs', icon: <IconFlask className="h-5 w-5 text-secondary-light" /> },
    { navLabel: 'Archives', icon: <IconBook className="h-5 w-5 text-secondary-light" /> },
]
export function Sidebar() {

    const activeItem = "Dashboard";
    return (
        <aside className="hidden w-64 h-[calc(100vh-64px)] shrink-0 overflow-y-auto border-r border-white/10 bg-surface px-4 py-6 lg:sticky lg:top-16 lg:flex lg:flex-col">
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
                        onClick={(e) => e.preventDefault()}
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

            <div className=" space-y-2 ">
                <Button variant="secondary" className="mb-6 w-full shadow-elixir">
                    + New Elixir
                </Button>

                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex w-full px-4 py-2 text-left text-sm font-semibold text-secondary-light "
                >
                    <span className="mr-4"><IconSettings className="h-5 w-5 text-secondary-light" /></span>
                    Settings
                </a>
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex w-full px-4 py-2 text-left text-sm font-semibold text-secondary-light "
                >
                    <span className="mr-4"><IconHelpCircle className="h-5 w-5 text-secondary-light" /></span>
                    Support
                </a>

            </div>
        </aside>
    )
}
