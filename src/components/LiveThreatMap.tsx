import { Card, CardContent, CardHeader } from "@/components/ui/card";
import customerIcon from "@/assets/icons/group.png";
import statusIcon from "@/assets/icons/badge.png";
import { cn } from "@/lib/utils";

export type ThreatMapItem = {
  customer: string;
  status: string;
  risk: string;
};

const threatMap: ThreatMapItem[] = [
  {
    customer: "tarik@elitzone.net",
    status: "Unqualified",
    risk: "Critical Risk",
  },
  { customer: "Demo", status: "Unqualified", risk: "High Risk" },
];

export function LiveThreatMap() {
  return (
    <Card className="border-0 shadow py-4 h-full">
      <CardHeader className="border-b px-4 pb-3!">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="font-semibold text-lg">Live Threat Map</div>
            <div className="text-sm text-gray-500">Customers</div>
          </div>
          <div className="bg-slate-50 rounded p-2">
            <img src={customerIcon} alt="Customers" className="w-7 h-7" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 px-4">
        {threatMap.map((item) => (
          <div
            key={item.customer}
            className="grid grid-cols-3 items-center justify-between font-semibold text-xs"
          >
            <div className="text-gray-700">{item.customer}</div>

            <div className="flex items-center gap-2">
              <img
                src={statusIcon}
                alt="Status"
                className="w-5 h-5 opacity-60"
              />
              <span className="text-gray-400">{item.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "shrink-0 size-2 rounded-full",
                  item.risk === "Critical Risk" ? "bg-red-500" : "bg-pink-500"
                )}
              ></div>
              <span>{item.risk}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
