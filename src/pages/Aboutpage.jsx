import React from "react";
import About from "../componens/About"; // ✅ Fixed typo from "componens" to "components"

export default function Aboutpage() {
  return (
    <>
<About />
      
      <div className="min-h-screen bg-gradient-to-b px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-6">
            About Transpersonal Workout
          </h1>
          <p className="text-lg text-black mb-8">
            A fusion of mind, body, and spirit — Transpersonal Workout is more than fitness. It's a journey into holistic empowerment, connecting physical movement with mental clarity and spiritual presence.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {/* Mind Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
              <img src="public/images/mind.jpg" alt="Mind" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-black mb-2">Mind</h2>
              <p className="text-black">
                Practices rooted in mindfulness and cognitive awareness help cultivate resilience, reduce stress, and enhance focus through movement.
              </p>
            </div>

            {/* Body Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
              <img src="public/images/body.jpg" alt="Body" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-black mb-2">Body</h2>
              <p className="text-black">
                A dynamic blend of strength training, breathwork, and flexibility that honors the body's wisdom and capacity for transformation.
              </p>
            </div>

            {/* Spirit Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-rose-100">
              <img src="public/images/spirit.jpg" alt="Spirit" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-black mb-2">Spirit</h2>
              <p className="text-black">
                Inspired by transpersonal psychology, our sessions include reflective rituals and intentional movement to awaken inner purpose.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-black max-w-2xl mx-auto">
              We empower individuals to go beyond the ego, integrate self-awareness, and awaken their highest potential — physically, mentally, and spiritually.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
