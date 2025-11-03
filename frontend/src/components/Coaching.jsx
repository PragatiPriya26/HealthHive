import React from "react";

// Sample health experts data
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    specialization: "Nutrition Specialist",
    email: "sarah.thompson@example.com",
    phone: "+1-555-123-4567",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. James Miller",
    specialization: "Fitness Coach",
    email: "james.miller@example.com",
    phone: "+1-555-987-6543",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Roberts",
    specialization: "Mental Wellness Expert",
    email: "emily.roberts@example.com",
    phone: "+1-555-321-7890",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Coaching = () => {
  return (
    <section id="coaching" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Virtual Coaching</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center"
          >
            <img
              src={expert.photo}
              alt={expert.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p className="text-gray-600 mb-4">{expert.specialization}</p>
            <div className="space-y-2">
              <a
                href={`mailto:${expert.email}`}
                className="block text-blue-600 hover:underline"
              >
                {expert.email}
              </a>
              <a
                href={`tel:${expert.phone}`}
                className="block text-blue-600 hover:underline"
              >
                {expert.phone}
              </a>
            </div>
            <a
              href={`mailto:${expert.email}`}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaching;
