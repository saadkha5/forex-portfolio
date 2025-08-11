import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartWidget({ data, title }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    let chartInstance = new Chart(ctx, {
      type: "line",
      data,
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: "#e5e7eb" } }
        }
      }
    });
    return () => chartInstance.destroy();
  }, [data]);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <canvas ref={canvasRef} height="100" />
    </div>
  );
}
