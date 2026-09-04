import { RegistryActivityChart } from "./RegistryActivityChart"
import { SpecialtyDonutChart } from "./SpecialtyDonutChart"

const DashboardCharts = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-3 ">
            <RegistryActivityChart />
            <SpecialtyDonutChart />
        </div>
    )
}

export default DashboardCharts