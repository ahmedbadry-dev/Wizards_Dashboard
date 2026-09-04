import { IconAlert, IconFlask, IconTrendUp } from "../../../components/icons"
import { Card } from "../../../components/ui/Card"

export const KpiCards = () => {
    return (
        <div className="grid gap-6  lg:grid-cols-3 ">
            <Card>
                <p className="heading-3">TOTAL REGISTERED WIZARDS</p>
                <p className="text-[32px] font-semibold text-secondary-soft leading-10 tracking-tight pt-2">1,248</p>
                <div className="flex gap-2 items-center pt-6">
                    <IconTrendUp className="w-3 h-3 text-primary" />
                    <p className="text-primary text-[12px] font-medium leading-4 tracking-wide">+4% from last moon</p>
                </div>
            </Card>
            <Card>
                <p className="heading-3">ACTIVE ELIXIRS</p>
                <p className="text-[32px] font-semibold text-primary leading-10 tracking-tight pt-2">856</p>
                <div className="flex gap-2 items-center pt-6">
                    <IconFlask className="w-3 h-3 text-primary" />
                    <p className="text-primary text-[12px] font-medium leading-4 tracking-wide">24 new formulas registered</p>
                </div>
            </Card>
            <Card>
                <p className="heading-3">PENDING VERIFICATIONS</p>
                <p className="text-[32px] font-semibold text-danger leading-10 tracking-tight pt-2">12</p>
                <div className="flex gap-2 items-center pt-6">
                    <IconAlert className="w-3 h-3 text-danger" />
                    <p className="text-danger text-[12px] font-medium leading-4 tracking-wide">Requires High-Council approval</p>
                </div>
            </Card>
        </div>
    )
}
