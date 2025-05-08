import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-b from-white  to-white text-black min-h-screen py-20 px-6 md:px-24 font-sans transition-all duration-300">
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-wide drop-shadow animate-fadeIn">
        About
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 animate-fadeIn">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
            Lorem ipsum dolor sit amet consectetur <span className="text-red-600">VR</span> & <span className="text-red-600">GUI</span> Lorem, ipsum.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum aliquid quasi quaerat minus a nesciunt optio veniam placeat tenetur odit obcaecati, laboriosam velit, magni, similique voluptates ratione expedita labore sunt rem blanditiis. Voluptatem, perspiciatis.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          <a href='/about'>Read More</a>
    </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./src/uploads/slider1.jpg"
            alt="Person using VR headset"
            className="h-[400px] md:h-[500px] w-auto rounded-3xl shadow-2xl object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
