import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts"

import { Badge } from "../../../../components/ui/Badge"
import { Card } from "../../../../components/ui/Card"

type ActivityDataPoint = {
    phase: string
    label: string
    registrations: number
}

type RegistryTooltipProps = {
    active?: boolean
    payload?: Array<{
        payload: ActivityDataPoint
        value: number
    }>
}

const activityData: ActivityDataPoint[] = [
    { phase: "Moon Start", label: "Day 01", registrations: 42 },
    { phase: "", label: "Day 04", registrations: 64 },
    { phase: "", label: "Day 07", registrations: 38 },
    { phase: "", label: "Day 10", registrations: 57 },
    { phase: "", label: "Day 13", registrations: 81 },
    { phase: "", label: "Day 16", registrations: 49 },
    { phase: "Full Moon", label: "Day 19", registrations: 72 },
    { phase: "", label: "Day 22", registrations: 94 },
    { phase: "", label: "Day 24", registrations: 68 },
    { phase: "", label: "Day 26", registrations: 44 },
    { phase: "", label: "Day 28", registrations: 32 },
    { phase: "Moon End", label: "Day 30", registrations: 76 },
]

function RegistryTooltip({ active, payload }: RegistryTooltipProps) {
    if (!active || !payload?.length) {
        return null
    }

    const item = payload[0].payload

    return (
        <div className="rounded-lg border border-secondary-light/20 bg-surface px-3 py-2 shadow-elixir">
            <p className="text-xs font-semibold text-text">{item.label}</p>
            <p className="text-xs text-secondary-light">
                {item.registrations} registry entries
            </p>
        </div>
    )
}

export const RegistryActivityChart = () => {
    return (
        <Card className="h-99.5 min-w-0 lg:col-span-2">
            <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                    <h2 className="heading-2">Registry Activity</h2>
                </div>
                <Badge tone="neutral" className="rounded-lg font-semibold text-[14px]">Last 30 Days</Badge>
            </div>

            <div className="h-70">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={activityData}
                        margin={{ top: 8, right: 25, left: 25, bottom: 0 }}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#494454"
                            strokeOpacity={0.22}
                        />
                        <XAxis
                            dataKey="phase"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 700 }}
                            tickMargin={14}
                        />
                        <Tooltip
                            content={<RegistryTooltip />}
                            cursor={{ fill: "rgba(208, 188, 255, 0.08)", radius: 8 }}
                        />
                        <Bar
                            dataKey="registrations"
                            radius={[0, 0, 0, 0]}
                            barSize={40}
                            fill="#D0BCFF33"
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}
