import React, { useState } from "react";

const featuresList = [
  { title: "Personalized Plans", description: "Workouts and nutrition tailored for you." },
  { title: "Real-time Metrics", description: "Track steps, calories, and heart rate." },
  { title: "Gamified Challenges", description: "Earn badges, rewards, and compete in leaderboards." },
];

const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="features" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="border p-6 rounded shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            {openIndex === index && <p className="text-gray-600">{feature.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
