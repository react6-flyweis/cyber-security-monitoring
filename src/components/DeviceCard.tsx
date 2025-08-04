import React from "react";
import { Button } from "./ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ArrowUpIcon, ChevronRightIcon } from "lucide-react";

interface DeviceCardProps {
  name: string;
  user: string;
  ip: string;
  os: string;
  status: string;
  risk: string;
  threats: number;
  lastSeen: string;
  compliance: string;
}

const statusIcon = {
  Active: "✅",
};
const riskIcon = {
  High: "🟠",
};
const complianceIcon = {
  "Non-Compliant": "❌",
};

const DeviceCard: React.FC<DeviceCardProps> = ({
  name,
  user,
  ip,
  os,
  status,
  risk,
  threats,
  lastSeen,
  compliance,
}) => {
  return (
    <Card className="py-3 gap-2 border-0 shadow">
      <CardHeader className="px-3 flex items-center justify-between">
        <div className="text-sm text-gray-500 mb-1">Device Name:</div>
        <CardTitle className="font-bold  text-lg mb-2">{name}</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        {/* User Section */}
        <div className="bg-gray-100 text-muted-foreground text-sm rounded p-3 mb-3 font-medium space-y-0.5">
          <div className="flex justify-between items-center mb-1 space-y-">
            <span className="text-sm ">User</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-orange-500 flex items-center gap-1"
            >
              Edit
              <div className="size-5 bg-orange-500 rounded-full flex justify-center items-center">
                <ArrowUpIcon className="size-4 rotate-45 text-white" />
              </div>
            </Button>
          </div>
          <div className="font-semibold text-base text-foreground mb-2">
            {user}
          </div>
          <div className="">IP Address: {ip}</div>
          <div className="">OS & Version: {os}</div>
          <div className="flex items-center gap-1">
            Status:{" "}
            <span>{(statusIcon as Record<string, string>)[status] || ""}</span>{" "}
            <span>{status}</span>
          </div>
          <div className="flex items-center gap-1">
            Risk Level:
            <span>{(riskIcon as Record<string, string>)[risk] || ""}</span>{" "}
            <span>{risk}</span>
          </div>
          <div className="">Threats Detected: {threats}</div>
          <div className="">Last Seen: {lastSeen}</div>
          <div className=" flex items-center gap-1">
            Compliance Status:
            <span>
              {(complianceIcon as Record<string, string>)[compliance] || ""}
            </span>
            <span>{compliance}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-3">
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button variant="ghost" size="sm" className="gap-0!">
            <span>⏹</span>
            <span>Isolate</span>
            <ChevronRightIcon className="text-orange-500 size-5" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-0!">
            <span>&#x1F504;</span>
            <span>Scan</span>
            <ChevronRightIcon className="text-orange-500 size-5" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-0!">
            <span>&#x1F50D;</span>
            <span>Details</span>
            <ChevronRightIcon className="text-orange-500 size-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DeviceCard;
