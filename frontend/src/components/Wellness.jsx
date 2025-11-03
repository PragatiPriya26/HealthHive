import React, { useState } from "react";

// Motivational messages
const motivationalMessages = [
  "Keep going, you're doing great! 💪",
  "Every small step counts – you got this! 🌟",
  "Take a deep breath, and start fresh 🌿",
  "Believe in yourself, you are stronger than you think 💖",
  "Challenges are just opportunities in disguise ✨"
];

// Slideshow images (5 images)
const slideshowImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1526676032263-f53a81f1db20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  "https://images.unsplash.com/photo-1554284126-8f5f2d1cba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
];

const Wellness = () => {
  const [mood, setMood] = useState("");
  const [motivation, setMotivation] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMoodChange = (e) => {
    const value = e.target.value;
    setMood(value);

    if (value.trim() !== "") {
      const msg = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setMotivation(msg);
    } else {
      setMotivation("");
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);

  return (
    <section id="wellness" className="py-16 bg-gradient-to-r from-green-100 via-yellow-50 to-pink-50">
      <h2 className="text-3xl font-bold text-center mb-10">Mental Wellness & Motivation</h2>

      {/* Mood Tracker */}
      <div className="max-w-md mx-auto mb-12 p-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">How are you feeling today?</h3>
        <input
          type="text"
          placeholder="Enter your mood..."
          value={mood}
          onChange={handleMoodChange}
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {mood && (
          <>
            <p className="text-green-700 font-medium mb-2">Your mood today: {mood}</p>
            <p className="text-blue-600 font-semibold animate-pulse">{motivation}</p>
          </>
        )}
      </div>

      {/* Slideshow */}
      <div className="max-w-3xl mx-auto mb-12 relative">
        <img
          src={slideshowImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="rounded-lg shadow-lg mx-auto"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Next
          </button>
        </div>
        <p className="text-center text-gray-600 mt-2">Slide {currentSlide + 1} of {slideshowImages.length}</p>
      </div>
    </section>
  );
};

export default Wellness;
