import { Card } from "./ui/card";
import { Button } from "./ui/button";

const insights = [
  {
    type: "Operations",
    title: "Cloud Directory Setup Required",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: "Activate",
    highlight: true,
  },
  {
    type: "Tips",
    title: "Add Your First Customer",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
  },
  {
    type: "Tips",
    title: "New Prospecting Reports",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
  },
  {
    type: "Tips",
    title: "Add Your First Customer",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for",
    action: null,
    highlight: false,
  },
];

export function Insights() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-semibold text-lg">Insights (11)</h2>
        <div className="flex gap-2 ml-auto">
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
            Security
          </span>
          <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-medium">
            Tips
          </span>
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
            Operations
          </span>
          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-medium">
            Ignored
          </span>
        </div>
      </div>
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
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
              <span className="text-yellow-400">
                {/* Icon placeholder, replace with actual icon if needed */}
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 0 1 1 1v1.382a1 1 0 0 0 .553.894l.894.447a1 1 0 0 1 .553.894V8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6.618a1 1 0 0 1 .553-.894l.894-.447A1 1 0 0 0 9 4.382V3a1 1 0 0 1 1-1zm-1 10a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z" />
                </svg>
              </span>
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
