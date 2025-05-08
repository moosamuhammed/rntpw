import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialPage = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      testimonial:
        "The Transpersonal Workout has transformed my body and mind. The balance between physical activity and spiritual growth is unmatched. It's truly life-changing!",
    },
    {
      name: "Mark Thompson",
      role: "Personal Trainer",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      testimonial:
        "I've tried many workouts, but the Transpersonal approach brings something deeper. I feel more aligned, energized, and connected with my inner self.",
    },
    {
      name: "Emily Davis",
      role: "Fitness Enthusiast",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      testimonial:
        "I never expected a workout to have such a profound impact on my mental clarity. I feel more balanced and centered after each session.",
    },
    {
      name: "John Doe",
      role: "Gym Owner",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      testimonial:
        "The Transpersonal Workout is unlike any program I've seen. It caters to both the mind and body in a way that truly enhances the fitness experience.",
    },
    {
      name: "Ava Brown",
      role: "Wellness Coach",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      testimonial:
        "This workout helped me not just get fit, but also achieve a deeper connection with myself. It’s transformative on every level.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-10 sm:mb-12">
          What Our Clients Say
        </h1>

        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 mx-2 sm:mx-4 bg-gray-100 border border-gray-300 rounded-2xl shadow-md h-full"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-4 border-black object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-black">{testimonial.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">{testimonial.role}</p>
                <p className="text-gray-700 italic text-sm sm:text-base">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <button
            className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg z-10 hover:bg-gray-800 transition hidden md:inline"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg z-10 hover:bg-gray-800 transition hidden md:inline"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
