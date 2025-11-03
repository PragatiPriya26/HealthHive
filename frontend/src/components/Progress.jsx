import React, { useState } from "react";

// Sample milestones and badges
const initialMilestones = [
  { id: 1, title: "First Workout", description: "Complete your first workout", xp: 10, achieved: false, badge: "🏅" },
  { id: 2, title: "Hydration Hero", description: "Drink 2L water daily for a week", xp: 20, achieved: false, badge: "💧" },
  { id: 3, title: "Step Master", description: "Reach 10,000 steps in a day", xp: 30, achieved: false, badge: "👟" },
  { id: 4, title: "Mindful Meditator", description: "Meditate 7 days in a row", xp: 25, achieved: false, badge: "🧘" },
];

const Progress = () => {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [xp, setXp] = useState(0);
  const [recentAchievement, setRecentAchievement] = useState(null);

  const handleAchieve = (id) => {
    const updated = milestones.map(m => {
      if (m.id === id && !m.achieved) {
        setXp(prev => prev + m.xp);
        setRecentAchievement(m.title);
        setTimeout(() => setRecentAchievement(null), 3000); // reset animation after 3s
        return { ...m, achieved: true };
      }
      return m;
    });
    setMilestones(updated);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      setMilestones(initialMilestones);
      setXp(0);
      setRecentAchievement(null);
    }
  };

  return (
    <section id="progress" className="py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-4">Progress & Achievements</h2>
      <p className="text-center text-gray-700 mb-6 text-lg">Total XP: <span className="font-bold text-purple-600">{xp}</span></p>

      {recentAchievement && (
        <p className="text-center text-2xl font-bold text-green-700 animate-pulse mb-6">
          🎉 Achievement Unlocked: {recentAchievement} 🎉
        </p>
      )}

      {/* Reset Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Reset Progress
        </button>
      </div>

      {/* Milestones Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map(m => (
          <div
            key={m.id}
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${
              m.achieved ? "bg-green-100 border-2 border-green-400" : "bg-white border border-gray-200"
            }`}
          >
            <div className="text-4xl text-center mb-4">{m.badge}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{m.title}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">{m.description}</p>
            {!m.achieved ? (
              <button
                onClick={() => handleAchieve(m.id)}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Achieve
              </button>
            ) : (
              <p className="text-center font-semibold text-green-700">Achieved! 🎉</p>
            )}
          </div>
        ))}
      </div>

      {/* XP Progress Bar */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">XP Progress</h3>
        <div className="w-full bg-gray-200 h-6 rounded">
          <div
            className="bg-purple-500 h-6 rounded transition-all duration-500"
            style={{ width: `${Math.min((xp / 100) * 100, 100)}%` }}
          ></div>
        </div>
        <p className="text-center mt-2 font-medium">{xp}/100 XP</p>
      </div>
    </section>
  );
};

export default Progress;
