import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const categories = [
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

// Each detection now has: message, timestamp, count
type Detection = {
  message: string;
  timestamp: string;
  count: number;
};

const detectionsData: Record<string, Detection[]> = {
  "Phishing Simulations": [
    {
      message: "Suspicious email detected",
      timestamp: "2025-08-04 09:15",
      count: 3,
    },
    {
      message: "User clicked phishing link",
      timestamp: "2025-08-04 10:22",
      count: 1,
    },
  ],
  "Cloud Posture": [
    {
      message: "Misconfigured S3 bucket",
      timestamp: "2025-08-03 16:40",
      count: 2,
    },
    {
      message: "Unencrypted cloud storage",
      timestamp: "2025-08-02 14:10",
      count: 1,
    },
  ],
  "External Footprints": [
    {
      message: "Exposed server IP",
      timestamp: "2025-08-01 11:05",
      count: 4,
    },
    {
      message: "Open port detected",
      timestamp: "2025-08-04 08:30",
      count: 2,
    },
  ],
  "Dark Web": [
    {
      message: "Credential leak found",
      timestamp: "2025-08-03 19:00",
      count: 1,
    },
    {
      message: "Company domain listed",
      timestamp: "2025-08-02 17:45",
      count: 1,
    },
  ],
  "Cloud Data": [
    {
      message: "Sensitive file uploaded",
      timestamp: "2025-08-04 07:55",
      count: 2,
    },
    {
      message: "Data exfiltration attempt",
      timestamp: "2025-08-03 21:10",
      count: 1,
    },
  ],
  "Email Protection": [
    {
      message: "Malware attachment blocked",
      timestamp: "2025-08-04 09:00",
      count: 5,
    },
    {
      message: "Spam email quarantined",
      timestamp: "2025-08-03 13:30",
      count: 2,
    },
  ],
  "Endpoint Security": [
    {
      message: "Malware detected on device",
      timestamp: "2025-08-04 11:20",
      count: 2,
    },
    {
      message: "Unauthorized software installed",
      timestamp: "2025-08-02 15:00",
      count: 1,
    },
  ],
  "Secure Browsing": [
    {
      message: "Unsafe website blocked",
      timestamp: "2025-08-04 10:00",
      count: 3,
    },
    {
      message: "Browser exploit attempt",
      timestamp: "2025-08-03 18:10",
      count: 1,
    },
  ],
  "Security Awareness": [
    {
      message: "User failed awareness test",
      timestamp: "2025-08-01 12:00",
      count: 2,
    },
    {
      message: "Training incomplete",
      timestamp: "2025-08-02 09:30",
      count: 1,
    },
  ],
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DetectionResponse: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const selectedCategory = query.get("category") || "All";

  const handleTabClick = (cat: string) => {
    if (cat === "All") {
      navigate("?", { replace: true });
    } else {
      navigate(`?category=${encodeURIComponent(cat)}`, { replace: true });
    }
  };

  const filteredDetections: [string, Detection[]][] =
    selectedCategory === "All"
      ? Object.entries(detectionsData)
      : [
          [
            selectedCategory,
            Array.isArray(detectionsData[selectedCategory])
              ? detectionsData[selectedCategory]
              : [],
          ],
        ];

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
          <h1 className="text-xl">Detection &amp; Response</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => handleTabClick("All")}
          className={`px-4 py-2 rounded-lg border transition-colors duration-150 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c7cce] ${
            selectedCategory === "All"
              ? "border-[#7c7cce] bg-[#ececff] text-[#3d3772]"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`px-4 py-2 rounded-lg border transition-colors duration-150 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7c7cce] ${
              selectedCategory === cat
                ? "border-[#7c7cce] bg-[#ececff] text-[#3d3772]"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        {filteredDetections.map(([cat, detections]: [string, Detection[]]) => (
          <div key={cat} className="mb-8">
            <h3 className="text-lg font-semibold text-[#7c7cce] mb-4">{cat}</h3>
            {detections.length > 0 ? (
              <div className="flex flex-col gap-6">
                {detections.map((d, i) => (
                  <div
                    key={i}
                    className="bg-white border  rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-[#3d3772] text-lg mb-2">
                        {d.message}
                      </div>
                      <div className="flex flex-col md:flex-row md:gap-6 gap-2">
                        <div className="flex items-center gap-2 bg-[#f0f0ff] px-3 py-1 rounded-full text-xs text-[#7c7cce] font-medium">
                          <span className="material-icons text-base">
                            schedule
                          </span>
                          Detected at: {d.timestamp}
                        </div>
                        <div className="flex items-center gap-2 bg-[#e6e6fa] px-3 py-1 rounded-full text-xs text-[#3d3772] font-medium">
                          <span className="material-icons text-base">
                            repeat
                          </span>
                          Occurrences:{" "}
                          <span className="font-bold">{d.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No detections found.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectionResponse;
