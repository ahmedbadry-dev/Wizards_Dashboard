import { DashboardLayout } from "../../../components/layout/DashboardLayout"
import { DashboardCharts } from "./charts/DashboardCharts"
import { DashboardHeader } from "./DashboardHeader"
import { KpiCards } from "./KpiCards"

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <KpiCards />
            <DashboardCharts />
        </DashboardLayout>
    )
}

export default DashboardPage
