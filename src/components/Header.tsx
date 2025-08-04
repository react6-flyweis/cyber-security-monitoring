import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Handshake, ClipboardList, Users } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-slate-50 w-full border-b shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="bg-green-500 text-white px-4 py-2 rounded font-semibold">
          Logo
        </div>
        {/* All Customers Button */}
        <Button variant="outline" className="text-purple-600 border-purple-200">
          All Customers
        </Button>
        {/* Single Customers Select */}
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Single Customers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer1">Customer 1</SelectItem>
            <SelectItem value="customer2">Customer 2</SelectItem>
          </SelectContent>
        </Select>
        {/* Show Demo Data Toggle */}
        <div className="flex items-center gap-2">
          <Switch id="demo-data" defaultChecked />
          <label htmlFor="demo-data" className="text-gray-700 text-sm">
            Show Demo Data
          </label>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Handshake className="w-6 h-6 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <ClipboardList className="w-6 h-6 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Users className="w-6 h-6 text-gray-400" />
        </Button>
        <Button className="bg-purple-600 text-white font-semibold px-6">
          <span className="mr-2 text-lg">+</span>New
        </Button>
      </div>
    </header>
  );
}
