import React from "react";
import { Dumbbell } from "lucide-react";

const workouts = [
  {
    id: 1,
    title: "Mind-Body Strength",
    description: "A fusion of strength training and mindfulness techniques.",
    duration: "45 mins"
  },
  {
    id: 2,
    title: "Holistic HIIT",
    description: "High-intensity interval training with breathwork and intention setting.",
    duration: "30 mins"
  },
  {
    id: 3,
    title: "Conscious Core",
    description: "Core-strengthening exercises with meditative focus.",
    duration: "40 mins"
  }
];

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 via-white to-black px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-black mb-4">Explore Your Inner Power</h1>
        <p className="text-lg text-black mb-10">Choose a workout that nourishes both your body and spirit.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {workouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 flex flex-col items-start">
              <div className="flex items-center mb-3">
                <Dumbbell className="text-red-500 w-6 h-6 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{workout.title}</h2>
              </div>
              <p className="text-gray-600 mb-3">{workout.description}</p>
              <span className="text-sm text-gray-500 mb-4">⏱ Duration: {workout.duration}</span>
              <button className="mt-auto bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-full">
                Begin Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}