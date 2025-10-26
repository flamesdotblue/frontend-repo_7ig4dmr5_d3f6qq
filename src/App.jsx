import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PipelineBoard from "./components/PipelineBoard";
import ContactsTable from "./components/ContactsTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar />

          <main className="flex-1 py-6">
            <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-semibold">Pipeline</h2>
                    <div className="text-sm text-gray-500">This month • 12 deals • $142k</div>
                  </div>
                  <PipelineBoard />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ContactsTable />

                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">Activity Snapshot</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <div>
                          <p className="font-medium">Call scheduled with Globex</p>
                          <p className="text-gray-500 text-xs">Tomorrow 10:30 AM • Daniel Park</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                        <div>
                          <p className="font-medium">Proposal sent to Initech</p>
                          <p className="text-gray-500 text-xs">Today 2:05 PM • Priya Patel</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                        <div>
                          <p className="font-medium">Demo booked for Acme</p>
                          <p className="text-gray-500 text-xs">Thu 3:00 PM • Sarah Chen</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Team Performance</h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-xs text-gray-500">Deals</p>
                      <p className="text-xl font-semibold">12</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-xs text-gray-500">Win Rate</p>
                      <p className="text-xl font-semibold">32%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-xl font-semibold">$142k</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Quick Tips</h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
                    <li>Drag deals across stages to update your pipeline.</li>
                    <li>Tag contacts by persona to personalize outreach.</li>
                    <li>Log calls and emails to keep activity up-to-date.</li>
                  </ul>
                </div>
              </aside>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
