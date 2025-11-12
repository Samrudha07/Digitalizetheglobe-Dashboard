import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import calendar from "../../Images/calendar-img-2.png";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Profit",
        data: [32000, 7000, 9000, 15000],
        backgroundColor: "#3b82f6", // Tailwind blue-500
        borderRadius: 6,
        barThickness: 25,
      },
      {
        label: "Loss",
        data: [14000, 18000, 20000, 6000],
        backgroundColor: "#93c5fd", // Tailwind blue-300
        borderRadius: 6,
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 12, family: "Inter, sans-serif" },
          color: "#6b7280", // gray-500
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        displayColors: false,
        padding: 10,
        callbacks: {
          title: () => "3 March 2025",
          label: () => "$16,356",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10000,
          callback: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          color: "#9ca3af", // gray-400
          font: { size: 12 },
        },
        grid: {
          color: "#f3f4f6", // gray-100
          drawBorder: false,
        },
      },
      x: {
        ticks: { color: "#9ca3af", font: { size: 12 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-3xl p-6  w-full h-[420px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Revenue</h2>
        <button className="flex items-center gap-1 text-sm bg-[#B5D8FB61] text-gray-600 px-3 py-1 rounded-md ">
          Month
          <span >
            <img src={calendar} alt="calendar" className="w-[12px] h-[12px] " />
          </span>
        </button>
      </div>

      {/* Total Revenue */}
      <div className="mb-4 flex items-baseline gap-2">
        <p className="text-2xl text-left font-semibold text-gray-900">
          $86,400.12
        </p>
        <p className="text-green-600 text-sm font-medium">+10%</p>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
