import React, { useState } from "react";

// Sample leaderboard and groups
const initialLeaderboard = [
  { id: 1, name: "Alice", xp: 120 },
  { id: 2, name: "Bob", xp: 110 },
  { id: 3, name: "Charlie", xp: 95 },
];

const initialChallenges = [
  { id: 1, title: "7-Day Step Challenge", joined: false },
  { id: 2, title: "Hydration Hero Week", joined: false },
  { id: 3, title: "Mindful Meditation Marathon", joined: false },
];

const initialGroups = [
  { id: 1, name: "Morning Runners", joined: false },
  { id: 2, name: "Yoga Enthusiasts", joined: false },
  { id: 3, name: "Healthy Eaters Club", joined: false },
];

const Community = () => {
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);
  const [challenges, setChallenges] = useState(initialChallenges);
  const [groups, setGroups] = useState(initialGroups);

  const toggleJoinChallenge = (id) => {
    setChallenges(challenges.map(c => c.id === id ? { ...c, joined: !c.joined } : c));
  };

  const toggleJoinGroup = (id) => {
    setGroups(groups.map(g => g.id === id ? { ...g, joined: !g.joined } : g));
  };

  return (
    <section id="community" className="py-16 bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-50">
      <h2 className="text-3xl font-bold text-center mb-10">Community & Social Challenges</h2>

      {/* Leaderboard */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-4">Leaderboard</h3>
        <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
          {leaderboard.map(user => (
            <li key={user.id} className="flex justify-between px-6 py-3 hover:bg-gray-50 transition">
              <span>{user.name}</span>
              <span className="font-semibold text-purple-600">{user.xp} XP</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Team Challenges */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-4">Team Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map(c => (
            <div key={c.id} className={`p-6 rounded-lg shadow-lg transition ${
              c.joined ? "bg-green-100 border-2 border-green-400" : "bg-white border border-gray-200"
            }`}>
              <h4 className="text-lg font-semibold mb-2">{c.title}</h4>
              <button
                onClick={() => toggleJoinChallenge(c.id)}
                className={`w-full py-2 rounded text-white transition ${
                  c.joined ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {c.joined ? "Joined" : "Join Challenge"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Social Groups */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Social Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map(g => (
            <div key={g.id} className={`p-6 rounded-lg shadow-lg transition ${
              g.joined ? "bg-green-100 border-2 border-green-400" : "bg-white border border-gray-200"
            }`}>
              <h4 className="text-lg font-semibold mb-2">{g.name}</h4>
              <button
                onClick={() => toggleJoinGroup(g.id)}
                className={`w-full py-2 rounded text-white transition ${
                  g.joined ? "bg-gray-400 hover:bg-gray-500" : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {g.joined ? "Joined" : "Join Group"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
