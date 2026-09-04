
import {
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts"

import { Card } from "../../../../components/ui/Card"

type SpecialtyDataPoint = {
    name: string
    value: number
    color: string
}

type SpecialtyTooltipProps = {
    active?: boolean
    payload?: Array<{
        payload: SpecialtyDataPoint
    }>
}

const specialtyData: SpecialtyDataPoint[] = [
    { name: "Alchemists", value: 45, color: "#D0BCFF" },
    { name: "Transmuters", value: 30, color: "#FFB95F" },
    { name: "Conjurers", value: 25, color: "#BCC7DE" },
]

const totalSpecialists = '1.2k'

function SpecialtyTooltip({ active, payload }: SpecialtyTooltipProps) {
    if (!active || !payload?.length) {
        return null
    }

    const item = payload[0].payload

    return (
        <div className="rounded-lg border border-secondary-light/20 bg-surface px-3 py-2 shadow-elixir">
            <p className="text-xs font-semibold text-text">{item.name}</p>
            <p className="text-xs text-secondary-light">{item.value}% of registry</p>
        </div>
    )
}

export const SpecialtyDonutChart = () => {
    return (
        <Card className="h-99.5 min-w-0 ">
            <div className="mb-6">
                <h2 className="heading-2">Wizard by Specialties</h2>
            </div>

            <div className="relative h-47.5">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip
                            content={<SpecialtyTooltip />}
                            cursor={{ fill: "transparent" }}
                        />
                        <Pie
                            data={specialtyData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={95}
                            stroke="none"
                            fill="#273647"
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="heading-2">
                        {totalSpecialists}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted">
                        Total
                    </span>
                </div>
            </div>

            <div className="mt-6 space-y-1.75">
                {specialtyData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                            <span
                                className="h-3 w-3 shrink-0 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="truncate text-sm font-semibold text-text">
                                {item.name}
                            </span>
                        </div>
                        <span className="text-sm font-semibold text-secondary-light">
                            {item.value}%
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    )
}
