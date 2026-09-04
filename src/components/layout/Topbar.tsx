import { IconBell, IconSettings } from "../icons";
import { SearchInput } from "../ui/SearchInput";


export function Topbar() {
    return (
        <header className="sticky top-0 z-20 flex justify-between h-16 items-center border-b border-white/10 bg-bg/80 px-6 topbar-effect">
            <div className="flex min-w-0 items-center gap-6">
                <div className="heading-2 font-bold text-primary-dark">
                    Wizarding Registry
                </div>

                <div className="ml-10 hidden  md:flex">
                    <SearchInput className="w-72 rounded-full" placeholder="Scrying records..." />
                </div>
            </div>



            <div className=" flex items-center gap-5 text-registry-soft">
                <button className="rounded-full p-2 hover:bg-white/10" aria-label="Notifications">
                    <IconBell className="h-5 w-5 text-secondary-light" />
                </button>
                <button className="rounded-full p-2 hover:bg-white/10" aria-label="Settings">
                    <IconSettings className="h-5 w-5 text-secondary-light" />
                </button>
                <div className="h-10 w-10 overflow-hidden rounded-full border border-secondary-strong/50 bg-card-light">
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
