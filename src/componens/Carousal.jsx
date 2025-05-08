import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    id: 1,
    url: "./src/uploads/website.jpg", // from public folder
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    url: "./src/uploads/slider2.png",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    url: "./src/uploads/slider3.png",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In?",
  },
];

function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <div
              className="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-center bg-cover"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" bg-opacity-50 px-4 py-6 rounded-xl text-black text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%]"
              >
                <motion.h2
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent"
                >
                  {item.title}
                </motion.h2>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal;
