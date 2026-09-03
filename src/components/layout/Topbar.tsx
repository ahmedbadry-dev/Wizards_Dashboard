import { IconBell, IconSearch, IconSettings } from "../icons";


export function Topbar() {
    return (
        <header className="sticky top-0 z-20 flex justify-between h-16 items-center border-b border-white/10 bg-bg/80 px-6 topbar-effect">
            <div className="flex min-w-0 items-center gap-6">
                <div className="heading-2 font-bold text-primary-dark">
                    Wizarding Registry
                </div>

                <div className="ml-10 hidden w-72 items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted md:flex">
                    <IconSearch className="h-3 w-3 shrink-0 text-secondary-light" />
                    <input type="search" className="w-full outline-0 truncate " placeholder="search records..." />
                </div>
            </div>



            <div className=" flex items-center gap-5 text-registry-soft">
                <button className="rounded-full p-2 hover:bg-white/10" aria-label="Notifications">
                    <IconBell className="h-5 w-5 text-secondary-light" />
                </button>
                <button className="rounded-full p-2 hover:bg-white/10" aria-label="Settings">
                    <IconSettings className="h-5 w-5 text-secondary-light" />
                </button>
                {/* <div className="h-9 w-9 rounded-full border border-registry-purple/40 bg-registry-panel-soft" >
                    
                </div> */}
                <div className="h-10 w-10 overflow-hidden rounded-full border border-secondary-strong/50 bg-card-light">
                    <img
                        src="/images/user-avatar.jpg"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}