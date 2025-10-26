import { Search, Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <div>
            <h1 className="font-semibold text-gray-900">Flames CRM</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Manage customers, pipeline, and activities</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full max-w-xl mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts, companies, deals..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
          <div className="ml-2 flex items-center gap-2 pl-3 border-l border-gray-200">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600" />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Alex Rivera</p>
              <p className="text-[11px] text-gray-500 -mt-0.5">Account Executive</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
