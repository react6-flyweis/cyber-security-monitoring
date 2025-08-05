import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ArrowUpIcon, ChevronRightIcon } from "lucide-react";
import type { IUserListItem } from "@/types/devices";

interface DeviceCardProps {
  data: IUserListItem;
}

const statusIcon = {
  Active: "✅",
};
const riskIcon = {
  High: "🟠",
  Medium: "🟡",
};

// full , partial, none
const complianceIcon = {
  Full: "✅",
  Partial: "⚠️",
  None: "❌",
};

export const DeviceCard: React.FC<DeviceCardProps> = ({
  data: {
    name,
    deviceName,
    ipAddress,
    osVersion,
    riskLevel,
    threatsDetected,
    createdAt,
    complianceStatus,
  },
}) => {
  const status = "Active"; // Assuming status is always "Active" for this example
  return (
    <Card className="py-3 gap-2 border-0 shadow">
      <CardHeader className="px-3 flex items-center justify-between">
        <div className="text-sm text-gray-500 mb-1">Device Name:</div>
        <CardTitle className="font-bold  text-lg mb-2">{deviceName}</CardTitle>
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
            {name}
          </div>
          <div className="">IP Address: {ipAddress}</div>
          <div className="">OS & Version: {osVersion}</div>
          <div className="flex items-center gap-1">
            Status:{" "}
            <span>{(statusIcon as Record<string, string>)[status] || ""}</span>{" "}
            <span>{status}</span>
          </div>
          <div className="flex items-center gap-1">
            Risk Level:
            <span>
              {(riskIcon as Record<string, string>)[riskLevel] || ""}
            </span>{" "}
            <span>{riskLevel}</span>
          </div>
          <div className="">Threats Detected: {threatsDetected}</div>
          <div className="">
            Last Seen: {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className=" flex items-center gap-1">
            Compliance Status:
            <span>
              {(complianceIcon as Record<string, string>)[complianceStatus] ||
                ""}
            </span>
            <span>{complianceStatus}</span>
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

const SkeletonLine = ({ className }: { className?: string }) => (
  <div className={cn("bg-gray-200 animate-pulse rounded h-4", className)} />
);

export const DeviceCardSkeleton: React.FC = () => (
  <Card className="py-3 gap-2 border-0 shadow">
    <CardHeader className="px-3 flex items-center justify-between">
      <div className="text-sm text-gray-500 mb-1">Device Name:</div>
      <SkeletonLine className="w-32 mb-2" />
    </CardHeader>
    <CardContent className="px-3">
      <div className="bg-gray-100 rounded p-3 mb-3 space-y-2">
        <div className="flex justify-between items-center mb-1">
          <SkeletonLine className="w-16" />
          <SkeletonLine className="w-12 h-6" />
        </div>
        <SkeletonLine className="w-24" />
        <SkeletonLine className="w-40" />
        <SkeletonLine className="w-32" />
        <SkeletonLine className="w-28" />
        <SkeletonLine className="w-36" />
        <SkeletonLine className="w-20" />
        <SkeletonLine className="w-32" />
      </div>
    </CardContent>
    <CardFooter className="px-3">
      <div className="grid grid-cols-3 gap-2 w-full">
        <SkeletonLine className="h-8 w-full" />
        <SkeletonLine className="h-8 w-full" />
        <SkeletonLine className="h-8 w-full" />
      </div>
    </CardFooter>
  </Card>
);
