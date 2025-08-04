import dashboardIcon from "@/assets/icons/dashboard.png";
import monitoringIcon from "@/assets/icons/monitoring.png";
import threatsIncidentsIcon from "@/assets/icons/threats-incidents.png";
import devicesIcon from "@/assets/icons/devices.png";
import vulnerabilitiesIcon from "@/assets/icons/vulnerabilities.png";
import firewallIcon from "@/assets/icons/firewall.png";
import logsIcon from "@/assets/icons/logs.png";
import reportsIcon from "@/assets/icons/reports.png";
import accessControlIcon from "@/assets/icons/access-control.png";
import settingsIcon from "@/assets/icons/settings.png";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Dashboard",
    iconSrc: dashboardIcon,
    iconAlt: "Dashboard",
  },
  {
    label: "Threats & Incidents",
    iconSrc: threatsIncidentsIcon,
    iconAlt: "Threats & Incidents",
  },
  {
    label: "Real-Time Monitoring",
    iconSrc: monitoringIcon,
    iconAlt: "Real-Time Monitoring",
  },
  {
    label: "Devices & Endpoints",
    iconSrc: devicesIcon,
    iconAlt: "Devices & Endpoints",
  },
  {
    label: "Vulnerabilities",
    iconSrc: vulnerabilitiesIcon,
    iconAlt: "Vulnerabilities",
  },
  {
    label: "Firewall & IDS",
    iconSrc: firewallIcon,
    iconAlt: "Firewall & IDS",
  },
  {
    label: "SIEM Logs",
    iconSrc: logsIcon,
    iconAlt: "SIEM Logs",
  },
  {
    label: "Reports & Analytics",
    iconSrc: reportsIcon,
    iconAlt: "Reports & Analytics",
  },
  {
    label: "User Access Control",
    iconSrc: accessControlIcon,
    iconAlt: "User Access Control",
  },
  {
    label: "Settings",
    iconSrc: settingsIcon,
    iconAlt: "Settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white min-h-screen shadow py-6 flex flex-col gap-1">
      {menuItems.map((item, idx) => (
        <div
          key={item.label}
          className={cn(
            "flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-colors",
            idx === 0 ? "text-violet-500 font-semibold" : "text-gray-500 "
          )}
        >
          <div
            className={cn(
              "shrink-0 size-10  rounded flex items-center justify-center",
              idx === 0 ? "bg-violet-500" : "bg-gray-100"
            )}
          >
            <img
              src={item.iconSrc}
              alt={item.iconAlt}
              className={cn("max-h-7 max-w-7", {
                "invert brightness-0": idx === 0,
              })}
            />
          </div>
          <span className="">{item.label}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
