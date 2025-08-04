import Users from "@/assets/icons/user.png";
import Mail from "@/assets/icons/mail.png";
import Cloud from "@/assets/icons/drive.png";
import Globe from "@/assets/icons/internet.png";
import Devices from "@/assets/icons/device.png";
import Browser from "@/assets/icons/browser.png";
import { Card } from "@/components/ui/card";
import { Triangle } from "lucide-react";

const systemStats = [
  {
    label: "Users",
    value: 11,
    change: 7,
    icon: Users,
    alt: "Users",
  },
  {
    label: "Devices",
    value: 9,
    change: 3.3,
    icon: Devices,
    alt: "Devices",
  },
  {
    label: "Mails",
    value: 10,
    change: 5,
    icon: Mail,
    alt: "Mail",
  },
  {
    label: "Browsers",
    value: 11,
    change: 7,
    icon: Browser,
    alt: "Browsers",
  },
  {
    label: "Cloud Drivers",
    value: 18,
    change: 31,
    icon: Cloud,
    alt: "Cloud Drivers",
  },
  {
    label: "Internet assets",
    value: 10,
    change: 5.5,
    icon: Globe,
    alt: "Internet assets",
  },
];

export function SystemStatsCard() {
  return (
    <Card className="p-6 gap-2 border-0">
      <div className="font-semibold mb-4">System</div>
      <div className="grid grid-cols-3 gap-8">
        {systemStats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 ">
            <div className="flex items-center justify-center p-3 bg-slate-50 rounded">
              <img src={stat.icon} alt={stat.alt} className="max-h-7 max-w-7" />
            </div>
            <div>
              <div className="font-semibold text-lg">{stat.value}</div>
              <div className="flex items-center text-xs font-semibold text-nowrap  text-gray-500">
                {stat.label}
                <Triangle className="ml-1 size-2 text-red-500" />
                <span className="text-red-500 text-xs ml-1">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
