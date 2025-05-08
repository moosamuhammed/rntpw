import React from 'react';

const events = [
  {
    id: 1,
    title: 'Mind-Body Breathwork Journey',
    date: 'June 12, 2025',
    location: 'Sedona, AZ',
    description: 'A guided breathwork experience to awaken consciousness and body awareness.',
  },
  {
    id: 2,
    title: 'Transpersonal Movement Workshop',
    date: 'July 5, 2025',
    location: 'Online',
    description: 'Explore movement as a portal to altered states and inner discovery.',
  },
  {
    id: 3,
    title: 'Sacred Flow in Nature',
    date: 'August 21, 2025',
    location: 'Big Sur, CA',
    description: 'Integrate physical fitness with spiritual grounding in a natural setting.',
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-white">Upcoming Events</h1>
        <p className="text-lg text-gray-300">
          Join our immersive experiences to elevate mind, body, and spirit.
        </p>
      </header>

      {/* Featured Event */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6 md:p-10 mb-12 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-2 text-white">✨ Featured: SoulSync Retreat</h2>
        <p className="text-sm text-gray-400 mb-1">May 25-27, 2025 · Joshua Tree, CA</p>
        <p className="text-gray-200 mb-4">
          A 3-day immersive retreat blending somatic workouts, ecstatic dance, and guided meditations under the desert sky.
        </p>
        <button className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-full transition duration-300 hover:from-red-500 hover:to-red-700 hover:scale-105">
          Reserve Your Spot
        </button>
      </div>

      {/* Other Events */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-white/30"
          >
            <h3 className="text-xl font-semibold text-red-400">{event.title}</h3>
            <p className="text-sm text-gray-400">{event.date} · {event.location}</p>
            <p className="mt-2 text-gray-200">{event.description}</p>
            <button className="mt-4 text-red-300 hover:text-red-400 hover:underline hover:translate-x-1 transition-all duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
