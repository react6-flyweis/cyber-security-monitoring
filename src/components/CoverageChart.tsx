import { RadarChart } from "./RadarChart";
import { Card, CardContent, CardHeader } from "./ui/card";
import radarSector from "@/assets/images/radar-sector.png";
import { useNavigate } from "react-router";

export function CoverageChart() {
  const navigate = useNavigate();
  // Map sector index to category name
  const sectorCategories = [
    "Cloud Posture",
    "External Footprints",
    "Dark Web",
    "Cloud Data",
    "Email Protection",
    "Endpoint Security",
    "Secure Browsing",
    "Security Awareness",
    "Phishing Simulations",
  ];
  const handleSectorClick = (sector: number) => {
    const category = sectorCategories[sector];
    if (category) {
      navigate(`/detection-response?category=${encodeURIComponent(category)}`);
    }
  };
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
        <div className="relative">
          <img
            src={radarSector}
            alt="Coverage Chart"
            className=" inset-0 w-full block mx-auto pt-2"
          />
          <div className="absolute inset-0">
            <RadarChart onSectorClick={handleSectorClick} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
