import { Mail, Phone, Building2 } from "lucide-react";

const contacts = [
  { id: 1, name: "Sarah Chen", role: "CTO", company: "Acme Inc", email: "sarah@acme.com", phone: "+1 415 555 0172" },
  { id: 2, name: "Daniel Park", role: "Head of Ops", company: "Globex", email: "daniel@globex.io", phone: "+1 206 555 0139" },
  { id: 3, name: "Priya Patel", role: "VP Sales", company: "Initech", email: "priya@initech.co", phone: "+1 305 555 0118" },
];

export default function ContactsTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Key Contacts</h3>
        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <div className="divide-y divide-gray-100">
        {contacts.map((c) => (
          <div key={c.id} className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">{c.name}</p>
              <p className="text-xs text-gray-500">{c.role} • {c.company}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1 text-xs hover:text-gray-700">
                <Mail className="h-4 w-4" /> {c.email}
              </a>
              <span className="inline-flex items-center gap-1 text-xs">
                <Phone className="h-4 w-4" /> {c.phone}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-2">
        <Building2 className="h-4 w-4" />
        Recently viewed companies: Acme, Globex, Initech
      </div>
    </div>
  );
}
