export default function TradeTable({ trades }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-3">Recent Trades</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left">Pair</th>
              <th className="px-3 py-2 text-left">Type</th>
              <th className="px-3 py-2 text-left">Size</th>
              <th className="px-3 py-2 text-left">P/L</th>
              <th className="px-3 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2">{trade.pair}</td>
                <td className="px-3 py-2">{trade.type}</td>
                <td className="px-3 py-2">{trade.size}</td>
                <td className={`px-3 py-2 ${trade.profit >= 0 ? "text-green-600" : "text-red-600"}`}> 
                  {trade.profit >= 0 ? "+" : ""}
                  {trade.profit}
                </td>
                <td className="px-3 py-2">{trade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}