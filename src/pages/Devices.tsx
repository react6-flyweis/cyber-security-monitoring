import React from "react";
import { Button } from "@/components/ui/button";
import DeviceCard from "@/components/DeviceCard";
import { ChevronLeft, PlusCircle, FileUp } from "lucide-react";
import { useNavigate } from "react-router";

const devices = [
  {
    name: "Workstation-021",
    user: "Alice Johnson",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
  {
    name: "Workstation-022",
    user: "John Doe",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
  {
    name: "Workstation-023",
    user: "Pritam Kumar",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
  {
    name: "Workstation-024",
    user: "Alice Johnson",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
  {
    name: "Workstation-025",
    user: "John Doe",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
  {
    name: "Workstation-026",
    user: "Pritam Kumar",
    ip: "192.168.0.12",
    os: "Windows 11 Pro",
    status: "Active",
    risk: "High",
    threats: 3,
    lastSeen: "3 Mins Ago",
    compliance: "Non-Compliant",
  },
];

export default function Devices() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-between mb-6 items-center">
        <div className="flex items-center">
          {/* Back button using Lucide ChevronLeft icon */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Back"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="size-6" />
          </Button>
          <h1 className="text-xl">Devices</h1>
        </div>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2 rounded">
            <PlusCircle size={18} />
            Add Devices
          </Button>
          <Button variant="outline" className="flex items-center gap-2 rounded">
            <FileUp size={18} />
            Export Device Report
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {devices.map((device, idx) => (
          <DeviceCard key={idx} {...device} />
        ))}
      </div>
    </div>
  );
}
