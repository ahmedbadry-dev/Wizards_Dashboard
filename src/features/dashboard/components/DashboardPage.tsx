import { DashboardLayout } from "../../../components/layout/DashboardLayout"
import { DashboardHeader } from "./DashboardHeader"
import { KpiCards } from "./KpiCards"

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <KpiCards />
        </DashboardLayout>
    )
}

export default DashboardPage
