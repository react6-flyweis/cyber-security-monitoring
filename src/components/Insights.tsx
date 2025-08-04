import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Lightbulb, SettingsIcon, Shield } from "lucide-react";

const insights = [
  {
    type: "Operations",
    title: "Cloud Directory Setup Required",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: "Activate",
    highlight: true,
    ignored: false,
  },
  {
    type: "Tips",
    title: "Add Your First Customer",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
    ignored: false,
  },
  {
    type: "Tips",
    title: "New Prospecting Reports",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
    ignored: false,
  },
  {
    type: "Tips",
    title: "Add Your First Customer",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
    ignored: true,
  },
];

export function Insights() {
  // Icon mapping by type
  const getIcon = (type: string) => {
    switch (type) {
      case "Security":
        return <Shield className="text-pink-500" size={20} />;
      case "Tips":
        return <Lightbulb className="text-yellow-400" size={20} />;
      case "Operations":
        return <SettingsIcon className="text-yellow-500" size={20} />;
      default:
        return <Lightbulb className="text-yellow-400" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md h-[26rem] w-full max-w-md mx-auto">
      <div className="flex gap-2 mb-4 max-w-full">
        <h2 className="font-semibold text-lg text-nowrap">Insights (11)</h2>
        <div className="flex gap-2 ml-auto flex-wrap">
          <span className="border  p-0.5 rounded text-xs font-medium flex items-center gap-1">
            <Shield className="w-4 h-4 text-red-600" /> Security
          </span>
          <span className="border  p-0.5 rounded text-xs font-medium flex items-center gap-1">
            <Lightbulb className="w-4 h-4 text-yellow-600" /> Tips
          </span>
          <span className="border  p-0.5 rounded text-xs font-medium flex items-center gap-1">
            <SettingsIcon className="w-4 h-4 text-yellow-600" /> Operations
          </span>
          <span className=" text-gray-500  text-xs font-medium flex items-center gap-1">
            <Switch
              checked={true}
              className="ml-1"
              aria-label="Ignore insight"
              disabled
            />
            ignored
          </span>
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 max-h-[20rem]">
        {insights.map((item, idx) => (
          <Card
            key={idx}
            className={
              item.highlight
                ? "border-2 border-yellow-300 bg-yellow-50 p-4 flex flex-col gap-2"
                : "p-4 flex flex-col gap-2"
            }
          >
            <div className="flex items-center gap-2">
              <span>{getIcon(item.ignored ? "Ignored" : item.type)}</span>
              <span className="font-semibold text-xs flex-1">{item.title}</span>
              {item.action && (
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs px-3 py-1 border-blue-500 text-blue-600"
                >
                  {item.action}
                </Button>
              )}
            </div>
            <div className="text-gray-500 text-xs">{item.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
