import React, { useState, useEffect } from "react";

const defaultReminders = [
  { id: 1, name: "Morning Jog", time: "07:00", type: "exercise" },
  { id: 2, name: "Drink Water", time: "09:00", type: "hydration" },
  { id: 3, name: "Healthy Breakfast", time: "08:00", type: "nutrition" },
  { id: 4, name: "Meditation", time: "21:00", type: "mental" },
];

const Reminders = () => {
  const [tasks, setTasks] = useState(defaultReminders.map(t => ({ ...t, completed: false, missed: false })));
  const [xp, setXp] = useState(100);
  const [daySummary, setDaySummary] = useState({ completed: 0, missed: 0, pending: defaultReminders.length });

  // Check for due reminders every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5); // HH:MM

      // Auto-reset at midnight
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setTasks(defaultReminders.map(t => ({ ...t, completed: false, missed: false })));
        setDaySummary({ completed: 0, missed: 0, pending: defaultReminders.length });
      }

      // Check for missed tasks
      const updatedTasks = tasks.map(task => {
        if (!task.completed && !task.missed && task.time <= currentTime) {
          alert(`Reminder: ${task.name} is due! XP points deducted.`);
          setXp(prev => Math.max(prev - 5, 0));
          return { ...task, missed: true };
        }
        return task;
      });

      setTasks(updatedTasks);

      // Update summary
      const completedCount = updatedTasks.filter(t => t.completed).length;
      const missedCount = updatedTasks.filter(t => t.missed).length;
      const pendingCount = updatedTasks.length - completedCount - missedCount;
      setDaySummary({ completed: completedCount, missed: missedCount, pending: pendingCount });

    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: true } : task);
    setTasks(updatedTasks);
    setXp(prev => prev + 5); // reward XP

    // Update summary
    const completedCount = updatedTasks.filter(t => t.completed).length;
    const missedCount = updatedTasks.filter(t => t.missed).length;
    const pendingCount = updatedTasks.length - completedCount - missedCount;
    setDaySummary({ completed: completedCount, missed: missedCount, pending: pendingCount });
  };

  return (
    <section id="reminders" className="py-16 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">Daily Health Reminders</h2>
      <p className="text-center text-gray-700 mb-6">XP Points: <span className="font-bold text-blue-600">{xp}</span></p>

      {/* Tasks List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`flex justify-between items-center bg-white p-4 rounded shadow ${
              task.missed ? "bg-red-100" : task.completed ? "bg-green-100" : ""
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{task.name}</h3>
              <p className="text-gray-500">Scheduled at: {task.time}</p>
              <p className="text-sm text-gray-600">Type: {task.type}</p>
              {task.missed && <p className="text-red-600 font-semibold">Missed! XP deducted.</p>}
            </div>
            {!task.completed && !task.missed && (
              <button
                onClick={() => handleComplete(task.id)}
                className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition"
              >
                Complete
              </button>
            )}
            {task.completed && <span className="text-green-600 font-semibold">Done ✅</span>}
          </div>
        ))}
      </div>

      {/* Interactive Day Summary */}
      <div className="max-w-3xl mx-auto mt-12 space-y-4 p-6 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-4 text-center">Today's Progress</h3>
        <div className="space-y-2">
          <div>
            <p className="font-semibold">Completed: {daySummary.completed}</p>
            <div className="w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-green-500 h-4 rounded"
                style={{ width: `${(daySummary.completed / tasks.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Missed: {daySummary.missed}</p>
            <div className="w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-red-500 h-4 rounded"
                style={{ width: `${(daySummary.missed / tasks.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Pending: {daySummary.pending}</p>
            <div className="w-full bg-gray-200 h-4 rounded">
              <div
                className="bg-yellow-400 h-4 rounded"
                style={{ width: `${(daySummary.pending / tasks.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminders;
