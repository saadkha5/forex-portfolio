export default function StatCard({ title, value, change, positive }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start min-w-[200px]">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
      <span className={`mt-2 text-sm ${positive ? "text-green-500" : "text-red-500"}`}> 
        {positive ? "+" : "-"}{change}%
      </span>
    </div>
  );
}
