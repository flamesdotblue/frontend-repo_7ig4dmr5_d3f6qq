import { DollarSign, Calendar, ChevronRight } from "lucide-react";

const stages = [
  { key: "qualified", name: "Qualified", color: "from-sky-500 to-cyan-500" },
  { key: "proposal", name: "Proposal", color: "from-indigo-500 to-violet-500" },
  { key: "negotiation", name: "Negotiation", color: "from-amber-500 to-orange-500" },
  { key: "closed", name: "Closed", color: "from-emerald-500 to-teal-500" },
];

const deals = {
  qualified: [
    { id: 1, title: "Acme Inc – Onboarding Suite", amount: 24000, company: "Acme Inc", next: "Fri" },
    { id: 2, title: "Globex – Analytics Upgrade", amount: 18000, company: "Globex", next: "Mon" },
  ],
  proposal: [
    { id: 3, title: "Initech – Platform Expansion", amount: 32000, company: "Initech", next: "Today" },
  ],
  negotiation: [
    { id: 4, title: "Umbrella – Security Suite", amount: 56000, company: "Umbrella Corp", next: "Thu" },
  ],
  closed: [
    { id: 5, title: "Soylent – Renewal", amount: 12000, company: "Soylent", next: "Closed Won" },
  ],
};

function DealCard({ deal }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-medium text-gray-900 leading-tight">{deal.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{deal.company}</p>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
          <DollarSign className="h-4 w-4" />
          {(deal.amount / 1000).toFixed(0)}k
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> Next: {deal.next}
        </span>
        <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
      </div>
    </div>
  );
}

export default function PipelineBoard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stages.map((stage) => (
        <div key={stage.key} className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">
              {stage.name} <span className="text-gray-400 font-normal">({deals[stage.key].length})</span>
            </h3>
            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${stage.color}`} />
          </div>
          <div className="space-y-3">
            {deals[stage.key].map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
