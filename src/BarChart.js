"use client";
import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(30, 136, 229, 0.2)"); // Light blue fade
      gradient.addColorStop(1, "rgba(30, 136, 229, 1)"); // Full blue

      chartRef.current.data.datasets[0].backgroundColor = gradient;
      chartRef.current.update();
    }
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Ju",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Activity",
        data: [100, 150, 200, 250, 300, 250, 100, 270, 330, 360, 380, 420],
        backgroundColor: "rgba(30, 136, 229, 0.8)",
        borderRadius: 6,
        barThickness: 10, // Slim bars
        maxBarThickness: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false, // Ensures all months are shown
          maxRotation: 0, // Keeps labels horizontal
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} height={300} />;
};

export default BarChart;
