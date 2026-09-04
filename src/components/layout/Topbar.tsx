import { IconBell, IconMenu, IconSettings } from "../icons";
import { SearchInput } from "../ui/SearchInput";


export function Topbar() {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-bg/80 pr-4 topbar-effect md:px-6">
            <div className="flex min-w-0 items-center gap-6">
                <button
                    className="flex h-16 w-16 items-center justify-center  text-secondary-light transition-colors hover:bg-white/10 hover:text-text md:hidden"
                    type="button"
                    aria-label="Open navigation menu"
                >
                    <IconMenu className="h-4 w-5" />
                </button>

                <div className="heading-2 hidden font-bold text-primary-dark md:block">
                    Wizarding Registry
                </div>

                <div className="ml-10 hidden md:flex">
                    <SearchInput className="w-72 rounded-full" placeholder="Scrying records..." />
                </div>
            </div>



            <div className="flex items-center gap-3 text-registry-soft md:gap-5">
                <button className="rounded-full p-2 hover:bg-white/10" aria-label="Notifications">
                    <IconBell className="h-5 w-5 text-secondary-light" />
                </button>
                <button className="hidden rounded-full p-2 hover:bg-white/10 md:inline-flex" aria-label="Settings">
                    <IconSettings className="h-5 w-5 text-secondary-light" />
                </button>
                <div className="hidden h-10 w-10 overflow-hidden rounded-full border border-secondary-strong/50 bg-card-light md:block">
                    <img
                        src="/images/user-avatar.jpg"
                        alt="User avatar"
                        className="h-10 w-10 object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
