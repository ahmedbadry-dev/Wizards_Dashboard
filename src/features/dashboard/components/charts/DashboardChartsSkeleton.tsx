import { Card } from "../../../../components/ui/Card";

export const DashboardChartsSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card className="col-span-2 h-99.5 animate-pulse">
        <div className="h-full rounded-lg bg-secondary-soft/10" />
      </Card>
      <Card className="h-99.5 animate-pulse">
        <div className="h-full rounded-lg bg-secondary-soft/10" />
      </Card>
    </div>
  );
};
