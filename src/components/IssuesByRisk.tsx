import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function IssuesByRisk() {
  return (
    <Card className="gap-0 py-4">
      <CardHeader className="px-4">
        <CardTitle>
          <span className="font-semibold">Issues By Risk (59)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        {/* Horizontal bar with discrete colors */}
        <div className="flex items-center my-4 mb-4 w-full h-4 rounded-full overflow-hidden">
          <div className="h-4" style={{ width: "15%" }}>
            <div className="bg-[#A63A50] w-full h-full" />
          </div>
          <div className="h-4" style={{ width: "19%" }}>
            <div className="bg-[#FF6F91] w-full h-full" />
          </div>
          <div className="h-4" style={{ width: "54%" }}>
            <div className="bg-[#FFB86F] w-full h-full" />
          </div>
          <div className="h-4" style={{ width: "12%" }}>
            <div className="bg-[#FFE066] w-full h-full" />
          </div>
        </div>
        {/* Risk breakdown */}
        <div className="flex justify-between mt-2">
          {/* Critical */}
          <div className="flex items-center w-1/4">
            <div className="h-10 w-1 rounded bg-[#A63A50] mr-2" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">9</div>
              <div className="text-gray-600 text-xs mt-1">Critical</div>
            </div>
          </div>
          {/* High */}
          <div className="flex items-center w-1/4">
            <div className="h-10 w-1 rounded bg-[#FF6F91] mr-2" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">11</div>
              <div className="text-gray-600 text-xs mt-1">High</div>
            </div>
          </div>
          {/* Medium */}
          <div className="flex items-center w-1/4">
            <div className="h-10 w-1 rounded bg-[#FFB86F] mr-2" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">32</div>
              <div className="text-gray-600 text-xs mt-1">Medium</div>
            </div>
          </div>
          {/* Low */}
          <div className="flex items-center w-1/4">
            <div className="h-10 w-1 rounded bg-[#FFE066] mr-2" />
            <div className="flex flex-col">
              <div className="font-semibold text-sm">7</div>
              <div className="text-gray-600 text-xs mt-1">Low</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
