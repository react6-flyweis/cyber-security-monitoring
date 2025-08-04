import Users from "@/assets/icons/user.png";
import Mail from "@/assets/icons/mail.png";
import Cloud from "@/assets/icons/drive.png";
import Globe from "@/assets/icons/internet.png";
import Devices from "@/assets/icons/device.png";
import Browser from "@/assets/icons/browser.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Triangle } from "lucide-react";
import { Link } from "react-router";

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
    <Card className="py-4 border-0">
      <CardHeader className="px-4">
        <CardTitle>System</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 px-4 relative">
        {systemStats.map((stat, idx) => {
          const link = stat.label === "Devices" ? "/devices" : "#";
          // Add divider classes for vertical and horizontal dividers
          const dividerClasses = [];
          // Add vertical divider except for last column in each row
          if ((idx + 1) % 3 !== 0)
            dividerClasses.push("border-r border-slate-200");
          // Add horizontal divider except for last row
          if (idx < 3) dividerClasses.push("border-b border-slate-200");
          return (
            <Link
              to={link}
              key={stat.label}
              className={`flex items-center gap-3 px-3 py-4 bg-white ${dividerClasses.join(
                " "
              )}`}
              style={{ minHeight: 80 }}
            >
              <div className="flex items-center justify-center p-3 bg-slate-50 rounded">
                <img
                  src={stat.icon}
                  alt={stat.alt}
                  className="max-h-7 max-w-7"
                />
              </div>
              <div>
                <div className="font-semibold text-lg">{stat.value}</div>
                <div className="flex items-center text-xs font-semibold text-nowrap text-gray-500">
                  {stat.label}
                  <Triangle className="ml-1 size-2 text-red-500" />
                  <span className="text-red-500 text-xs ml-1">
                    {stat.change}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
