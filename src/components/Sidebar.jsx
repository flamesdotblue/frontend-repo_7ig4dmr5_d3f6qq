import { Home, Users, Briefcase, CheckSquare, BarChart2, Settings, Plus } from "lucide-react";

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-indigo-50 text-indigo-700"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-200">
        <button className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium shadow hover:opacity-95">
          <Plus className="h-4 w-4" />
          New Deal
        </button>
      </div>
      <nav className="p-3 space-y-1">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={Briefcase} label="Deals" />
        <NavItem icon={Users} label="Contacts" />
        <NavItem icon={CheckSquare} label="Tasks" />
        <NavItem icon={BarChart2} label="Reports" />
      </nav>
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50">
          <p className="text-sm font-medium text-gray-900">Quarter Goal</p>
          <p className="text-xs text-gray-500 mt-1">Close $120k new revenue</p>
          <div className="mt-3 h-2 bg-white rounded-full overflow-hidden border border-indigo-100">
            <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
          <p className="text-xs text-gray-600 mt-2">67% reached</p>
        </div>
        <button className="mt-3 w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </div>
    </aside>
  );
}
