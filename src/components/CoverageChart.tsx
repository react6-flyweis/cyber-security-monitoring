import coverageChartImage from "@/assets/images/coverage-chart.svg";
import { Card, CardContent, CardHeader } from "./ui/card";

export function CoverageChart() {
  return (
    <Card>
      <CardHeader>
        <div className="font-semibold text-lg text-[#3d3772]">
          Coverage &amp; issues by Security Control
        </div>
        <div className="flex gap-4 text-sm text-[#7c6cf7]">
          <div className="flex items-center">
            <div className="size-2.5 rounded bg-[#edeafd] mr-1 align-middle" />
            Uncovered
          </div>
          <div className="flex items-center">
            <div className="size-2.5 rounded border border-[#7c6cf7] mr-1 align-middle" />
            Covered
          </div>
          <div className="flex items-center">
            <div className="size-2.5 rounded-full bg-[#7c6cf7] opacity-70 mr-1 align-middle" />
            Issues
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <img
          src={coverageChartImage}
          alt="Coverage Chart"
          className="w-full block mx-auto"
        />
      </CardContent>
    </Card>
  );
}
