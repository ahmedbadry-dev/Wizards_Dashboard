import { DashboardLayout } from "../../../components/layout/DashboardLayout"
import { DashboardCharts } from "./charts/DashboardCharts"
import { DashboardHeader } from "./DashboardHeader"
import { KpiCards } from "./KpiCards"
import { WizardsTable } from "../../wizard-table"

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <KpiCards />
            <DashboardCharts />
            <WizardsTable />
        </DashboardLayout>
    )
}

export default DashboardPage
