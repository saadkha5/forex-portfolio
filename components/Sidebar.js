import { FaChartBar, FaMoneyBillWave, FaList, FaCog } from "react-icons/fa";
import Link from "next/link";

const nav = [
  { label: "Dashboard", icon: FaChartBar, href: "/" },
  { label: "Trades", icon: FaMoneyBillWave, href: "/trades" },
  { label: "Analytics", icon: FaChartBar, href: "/analytics" },
  { label: "Watchlist", icon: FaList, href: "/watchlist" },
  { label: "Settings", icon: FaCog, href: "/settings" }
];

export default function Sidebar() {
  return (
    <aside className="bg-primary text-white w-64 min-h-screen px-4 py-8 flex flex-col">
      <div className="text-2xl font-bold mb-8 tracking-wide">ForexPro</div>
      <nav className="flex flex-col gap-2 flex-1">
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary hover:text-primary transition"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs text-gray-400">&copy; 2025 ForexPro</div>
    </aside>
  );
}