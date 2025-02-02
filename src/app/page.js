"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import BarChart from "@/BarChart";
import StatCard from "./graphcard";
import StatCard1 from "@/second";
import StatCard2 from "@/third";
import Home from "@/app/Home/page";
import Settings from "@/app/Settings/page";
import Profile from "@/app/Profile/page";
import Link from "next/link";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Analytics");

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Textify</h1>
        <button
          className="text-gray-700 text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg p-6 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0 md:w-1/4 z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-blue-800">
            <Link href="#">Textify</Link>
          </h1>
          <button
            className="text-gray-700 text-2xl focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            <RxCross2 />
          </button>
        </div>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              activePage === "Analytics"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
            onClick={() => setActivePage("Analytics")}
          >
            Analytics
          </li>
          <li
            className={`cursor-pointer ${
              activePage === "Home"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${
              activePage === "Settings"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
            onClick={() => setActivePage("Settings")}
          >
            Settings
          </li>
          <li
            className={`cursor-pointer ${
              activePage === "Profile"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
            onClick={() => setActivePage("Profile")}
          >
            Profile
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {activePage === "Home" && <Home />}
        {activePage === "Settings" && <Settings />}
        {activePage === "Profile" && <Profile />}
        {activePage === "Analytics" && (
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold">Summary</h2>
              <div className="flex flex-wrap gap-2">
                <select className="p-2 bg-gray-100 rounded w-full md:w-auto">
                  <option>Timeframe: All Time</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
                <select className="p-2 bg-gray-100 rounded w-full md:w-auto">
                  <option>Project: All</option>
                </select>
                <select className="p-2 bg-gray-100 rounded w-full md:w-auto">
                  <option>Topic: All</option>
                </select>
              </div>
            </div>

            {/* Statistics & Chart Section */}
            <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h3 className="text-sm text-gray-500">Active Users</h3>
                  <p className="text-2xl font-bold">27/80</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h3 className="text-sm text-gray-500">Total Users</h3>
                  <p className="text-2xl font-bold">80</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h3 className="text-sm text-gray-500">Avg Session</h3>
                  <p className="text-2xl font-bold">2m 34s</p>
                </div>
                <div className="bg-white rounded-lg text-center">
                  <StatCard className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg text-center">
                  <StatCard1 className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg text-center">
                  <StatCard2 className="w-full h-full" />
                </div>
              </div>

              {/* Chart Section */}
              <div className="flex-1">
                <h3 className="text-sm text-gray-500 mb-4">Activity</h3>
                <div className="bg-white p-4 rounded-lg">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
