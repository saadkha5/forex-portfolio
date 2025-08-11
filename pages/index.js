import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ChartWidget from "../components/ChartWidget";
import TradeTable from "../components/TradeTable";
import { stats, chartData, trades } from "../utils/mockData";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f4f7fa]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="p-8 flex flex-col gap-8">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCard key={s.title} {...s} />
            ))}
          </div>
          {/* Chart */}
          <ChartWidget data={chartData} title="Equity Curve" />
          {/* Recent Trades */}
          <TradeTable trades={trades} />
        </div>
      </main>
    </div>
  );
}