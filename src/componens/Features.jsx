// import React from "react";

// const features = [
//   {
//     title: "Western Integrative",
//     items: [
//       "It blends modern physical training methods (e.g., functional training, breathwork, fitness metrics) with psychological tools like emotional intelligence and intention-setting — common in Western personal development circles.",
//       " The focus on self-awareness, transformation, and integration into daily life mirrors Western coaching models, somatic therapy practices, and mindfulness-based fitness trends.",
//       "Elements like customization for all levels and personal growth tracking are rooted in Western wellness programming, emphasizing individual agency and progression.",

//     ],
//   },
//   {
//     title: " Lorem, ipsum.",
//     items: [
//       " Lorem ipsum dolor sit amet.",
//       " Lorem ipsum dolor sit amet.",
//       "Lorem ipsum dolor sit.",
//       "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       " Lorem ipsum dolor sit.",
//       " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//       "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores.",
//     ],
//   },
//   {
//     title: " Lorem, ipsum dolor.",
//     items: [
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, atque?",
//     ],
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-red-900 py-12 px-4   md:px-16 lg:px-32">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
//           Key Features
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white/90 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:shadow-xl"
//             >
//               <h3 className="text-xl font-semibold text-red-700 mb-4">
//                 {feature.title}
//               </h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-800">
//                 {feature.items.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;
import React from "react";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="bg-gradient-to-b from-white to-red-900 py-16 px-4 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-red-800 mb-4 tracking-tight">WORKOUTS</h1>
        <p className="text-lg text-gray-700 mb-12">Choose a workout that nourishes both your body and spirit.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Dumbbell className="text-red-500 w-6 h-6 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{workout.title}</h2>
              </div>
              <p className="text-gray-600 flex-grow">{workout.description}</p>
              <span className="text-sm text-gray-500 mt-3 mb-5">⏱ Duration: {workout.duration}</span>
              <Link to="/workouts" className="w-full">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                  Begin Session
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
