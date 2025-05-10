import React from "react";

const features = [
  {
    title: "Western Integrative",
    items: [
      "Blends modern physical training (e.g., functional training, breathwork, fitness metrics) with psychological tools like emotional intelligence and intention-setting.",
      "Focuses on self-awareness, transformation, and integration into daily life, mirroring Western coaching and mindfulness-based practices.",
    ],
  },
  {
    title: "Mindful Strength",
    items: [
      "Combines bodyweight training with mindful breathing.",
      "Prioritizes control over intensity.",
      "Builds core strength and balance.",
      "Emphasizes present-moment awareness.",
      "Improves posture and joint stability.",
    ],
  },
  {
    title: "Energy Alignment",
    items: [
      "Focuses on aligning physical effort with energetic flow.",
      "Incorporates breath, intention, and visualization.",
      "Enhances emotional resilience and nervous system balance.",
    ],
  },
];

const FeatureSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-100 via-white to-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">
          Explore Your Inner Power
        </h1>
        <p className="text-lg text-black mb-10">
          Choose a workout that nourishes both your body and spirit.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-left">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
