export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Forex Portfolio Dashboard</h1>
      <p className="text-lg mb-8">Welcome to your Forex portfolio tracker!</p>
      <table className="min-w-[400px] border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Pair</th>
            <th className="px-4 py-2 border">Position</th>
            <th className="px-4 py-2 border">P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">EUR/USD</td>
            <td className="px-4 py-2 border">Buy</td>
            <td className="px-4 py-2 border text-green-600">+$120</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">GBP/JPY</td>
            <td className="px-4 py-2 border">Sell</td>
            <td className="px-4 py-2 border text-red-600">-$80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
