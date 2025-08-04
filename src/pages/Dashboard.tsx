import { CoverageChart } from "@/components/CoverageChart";
import { Insights } from "@/components/Insights";
import IssuesByRisk from "@/components/IssuesByRisk";
import { LiveThreatMap } from "@/components/LiveThreatMap";
import { SystemStatsCard } from "@/components/SystemStatsCard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <SystemStatsCard />
        </div>
        <div className="col-span-2">
          <LiveThreatMap />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <CoverageChart />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <IssuesByRisk />
          <Insights />
        </div>
      </div>
    </div>
  );
}
