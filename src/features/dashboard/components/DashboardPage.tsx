import { lazy, Suspense } from "react"

import { DashboardLayout } from "../../../components/layout/DashboardLayout"
import { DashboardHeader } from "./DashboardHeader"
import { KpiCards } from "./KpiCards"
import { WizardsTable } from "../../wizard-table"
import { DashboardChartsSkeleton } from "./charts/DashboardChartsSkeleton"

const DashboardCharts = lazy(
    () => import("./charts/DashboardCharts")
)

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <KpiCards />
            <Suspense fallback={<DashboardChartsSkeleton />}>
                <DashboardCharts />
            </Suspense>
            <WizardsTable />
        </DashboardLayout>
    )
}

export default DashboardPage
