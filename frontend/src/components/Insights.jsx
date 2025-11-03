import React, { useState, useEffect } from "react";

// Function to generate mock health data
const generateMockData = (days = 7) => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.push({
      date: date.toISOString().slice(0, 10),
      steps: Math.floor(Math.random() * 10000 + 5000),
      calories: Math.floor(Math.random() * 500 + 2000),
      heartRate: Math.floor(Math.random() * 20 + 60),
    });
  }
  return data.reverse();
};

const Insights = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [healthData, setHealthData] = useState([]);

  const handleLogin = () => {
    if (!userName || !userId) {
      alert("Please enter both your name and User ID.");
      return;
    }

    // Generate random mock data for any user
    const data = generateMockData(14); // 2 weeks of data
    setHealthData(data);
    setLoggedIn(true);
  };

  // Summary metrics
  const totalSteps = healthData.reduce((acc, day) => acc + day.steps, 0);
  const avgCalories = healthData.length
    ? Math.round(healthData.reduce((acc, day) => acc + day.calories, 0) / healthData.length)
    : 0;
  const avgHeartRate = healthData.length
    ? Math.round(healthData.reduce((acc, day) => acc + day.heartRate, 0) / healthData.length)
    : 0;

  return (
    <section id="insights" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Health Insights</h2>

      {!loggedIn ? (
        // Login Form
        <div className="max-w-md mx-auto bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 text-center">Enter Your Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Your User ID"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            View My Health Data
          </button>
        </div>
      ) : (
        // Display Health Insights
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Overview */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Welcome, {userName}!</h3>
            <p className="text-gray-700">
              Here’s a summary of your health journey since you started using our app.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded shadow text-center">
              <h4 className="font-semibold text-gray-700 mb-2">Total Steps</h4>
              <p className="text-2xl font-bold text-blue-600">{totalSteps.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow text-center">
              <h4 className="font-semibold text-gray-700 mb-2">Average Calories</h4>
              <p className="text-2xl font-bold text-blue-600">{avgCalories} kcal</p>
            </div>
            <div className="bg-blue-50 p-6 rounded shadow text-center">
              <h4 className="font-semibold text-gray-700 mb-2">Average Heart Rate</h4>
              <p className="text-2xl font-bold text-blue-600">{avgHeartRate} bpm</p>
            </div>
          </div>

          {/* Historical Data Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Steps</th>
                  <th className="px-6 py-3 text-left">Calories</th>
                  <th className="px-6 py-3 text-left">Heart Rate</th>
                </tr>
              </thead>
              <tbody>
                {healthData.map((day, index) => (
                  <tr key={index} className="border-t hover:bg-blue-50 transition">
                    <td className="px-6 py-3">{day.date}</td>
                    <td className="px-6 py-3">{day.steps.toLocaleString()}</td>
                    <td className="px-6 py-3">{day.calories}</td>
                    <td className="px-6 py-3">{day.heartRate} bpm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default Insights;
