import { RegistryActivityChart } from "./RegistryActivityChart"
import { SpecialtyDonutChart } from "./SpecialtyDonutChart"

const DashboardCharts = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <RegistryActivityChart />
            <SpecialtyDonutChart />
        </div>
    )
}

export default DashboardCharts