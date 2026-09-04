import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"


type TDashboardLayoutProps = {
    children: React.ReactNode
}

export function DashboardLayout({ children }: TDashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-bg text-text">
            <Topbar />
            <div className="flex items-start">
                <Sidebar />
                <main className="
                            min-h-[calc(100vh-64px)]
                            min-w-0
                            max-w-7xl
                            m-auto
                            flex-1
                            space-y-6
                            px-6
                            py-8
                            lg:px-10
                        ">
                    {children}
                </main>
            </div>
        </div>
    )
}