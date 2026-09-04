import { IconBook, IconDashboardGrid, IconFlask, IconHelpCircle, IconPlus, IconSettings, IconSparkles, IconUsers } from "../icons"
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
        <aside className="hidden h-[calc(100vh-64px)] w-20 shrink-0 overflow-y-auto border-r border-white/10 bg-surface px-3 py-6 md:sticky md:top-16 md:flex md:flex-col lg:w-64 lg:px-4">
            <div className=" px-0 py-5 text-center lg:p-5 lg:mb-10">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-secondary-soft to-primary p-px lg:h-16 lg:w-16">
                    <div className="flex h-full w-full items-center justify-center rounded-[calc(0.75rem-1px)] bg-surface">
                        <IconSparkles />
                    </div>
                </div>
                <p className="hidden font-black text-primary-dark lg:block">Registry</p>
                <p className="mt-1 hidden font-medium text-xs text-muted lg:block">Ministry of Alchemical Records</p>
            </div>

            <nav className="space-y-2 flex-1">
                {navItems.map(({ navLabel, icon }) => (
                    <a
                        key={navLabel}
                        href="#"
                        title={navLabel}
                        aria-label={navLabel}
                        onClick={(e) => e.preventDefault()}
                        className={`flex w-full items-center justify-center rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors lg:justify-start lg:px-4 ${activeItem == navLabel
                            ? "bg-primary/20 text-primary border-r-2 border-primary"
                            : "text-secondary-light hover:bg-white/10"
                            }`}
                    >
                        <span className="lg:mr-4">{icon}</span>
                        <span className="hidden lg:inline">{navLabel}</span>
                    </a>
                ))}
            </nav>

            <div className=" space-y-2 ">
                <Button variant="secondary" className="mb-6 h-11 w-full px-0 shadow-elixir lg:h-auto lg:px-3" aria-label="New Elixir" title="New Elixir">
                    <IconPlus className="h-3 w-3 lg:mr-2" />
                    <span className="hidden lg:inline">New Elixir</span>
                </Button>

                <a
                    href="#"
                    title="Settings"
                    aria-label="Settings"
                    onClick={(e) => e.preventDefault()}
                    className="flex w-full justify-center rounded-lg px-3 py-2 text-left text-sm font-semibold text-secondary-light hover:bg-white/10 lg:justify-start lg:px-4"
                >
                    <span className="lg:mr-4"><IconSettings className="h-5 w-5 text-secondary-light" /></span>
                    <span className="hidden lg:inline">Settings</span>
                </a>
                <a
                    href="#"
                    title="Support"
                    aria-label="Support"
                    onClick={(e) => e.preventDefault()}
                    className="flex w-full justify-center rounded-lg px-3 py-2 text-left text-sm font-semibold text-secondary-light hover:bg-white/10 lg:justify-start lg:px-4"
                >
                    <span className="lg:mr-4"><IconHelpCircle className="h-5 w-5 text-secondary-light" /></span>
                    <span className="hidden lg:inline">Support</span>
                </a>

            </div>
        </aside>
    )
}
