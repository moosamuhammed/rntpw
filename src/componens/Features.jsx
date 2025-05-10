import React from "react";

const features = [
  {
    title: "Western Integrative",
    items: [
      "It blends modern physical training methods (e.g., functional training, breathwork, fitness metrics) with psychological tools like emotional intelligence and intention-setting — common in Western personal development circles.",
      " The focus on self-awareness, transformation, and integration into daily life mirrors Western coaching models, somatic therapy practices, and mindfulness-based fitness trends.",
      "Elements like customization for all levels and personal growth tracking are rooted in Western wellness programming, emphasizing individual agency and progression.",

    ],
  },
  {
    title: " Lorem, ipsum.",
    items: [
      " Lorem ipsum dolor sit amet.",
      " Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing.",
      " Lorem ipsum dolor sit.",
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores.",
    ],
  },
  {
    title: " Lorem, ipsum dolor.",
    items: [
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, minus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, atque?",
    ],
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-red-900 py-12 px-4   md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                {feature.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
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
