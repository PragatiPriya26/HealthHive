import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">HealthCare+</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#integration" className="hover:text-blue-600">Integration</a></li>
          <li><a href="#insights" className="hover:text-blue-600">Insights</a></li>
          <li><a href="#coaching" className="hover:text-blue-600">Coaching</a></li>
          <li><a href="#reminders" className="hover:text-blue-600">Reminders</a></li>
          <li><a href="#progress" className="hover:text-blue-600">Progress</a></li>
          <li><a href="#community" className="hover:text-blue-600">Community</a></li>
          <li><a href="#wellness" className="hover:text-blue-600">Wellness</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#integration" onClick={toggleMenu}>Integration</a></li>
          <li><a href="#insights" onClick={toggleMenu}>Insights</a></li>
          <li><a href="#coaching" onClick={toggleMenu}>Coaching</a></li>
          <li><a href="#reminders" onClick={toggleMenu}>Reminders</a></li>
          <li><a href="#progress" onClick={toggleMenu}>Progress</a></li>
          <li><a href="#community" onClick={toggleMenu}>Community</a></li>
          <li><a href="#wellness" onClick={toggleMenu}>Wellness</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
