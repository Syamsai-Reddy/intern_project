"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["", "", "", "", "", "", ""],
  datasets: [
    {
      data: [20, 40, 35, 50, 45, 60, 55],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.2)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};

export default function StatCard1() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full h-full flex flex-col justify-around">
      <h3 className="text-gray-500 text-sm">current Knowledge</h3>
      <p className="text-2xl font-bold">86%</p>
      <div className="h-10">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
