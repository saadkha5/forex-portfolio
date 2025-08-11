export const stats = [
  { title: "Balance", value: "$12,500", change: 2.5, positive: true },
  { title: "Equity", value: "$13,120", change: 1.2, positive: true },
  { title: "Open Trades", value: "4", change: 0, positive: true },
  { title: "Win Rate", value: "62%", change: 1.0, positive: true }
];

export const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Equity Curve",
      data: [12000, 12250, 12100, 12500, 12800, 13000, 13120],
      borderColor: "#00d09c",
      backgroundColor: "rgba(0,208,156,0.08)",
      tension: 0.3
    }
  ]
};

export const trades = [
  { pair: "EUR/USD", type: "Buy", size: "1.2", profit: 120, date: "2025-08-10" },
  { pair: "GBP/JPY", type: "Sell", size: "0.8", profit: -80, date: "2025-08-09" },
  { pair: "AUD/USD", type: "Buy", size: "2.0", profit: 230, date: "2025-08-08" },
  { pair: "USD/JPY", type: "Sell", size: "1.0", profit: 50, date: "2025-08-07" }
];