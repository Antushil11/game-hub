import React from "react";
import Slider from "react-slick";
import spiderman from "../assets/spider 2.jpg";
import godfall from "../assets/god fall.jpg";
import godwar from "../assets/god of war.jpg";
import MyContainer from "./MyContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      img: spiderman,
      title: "Spider-Man 2",
      desc: "Swing through the city and fight epic villains in a stunning open world.",
      btn: "Play Now",
    },
    {
      id: 2,
      img: godfall,
      title: "Godfall",
      desc: "Unleash divine power and conquer realms in this breathtaking action RPG.",
      btn: "Play Now",
    },
    {
      id: 3,
      img: godwar,
      title: "God of War",
      desc: "Join Kratos and Atreus on a journey of myth, vengeance, and redemption.",
      btn: "Play Now",
    },
  ];

  return (
    <MyContainer className="mt-2 ">
      <div className="w-full overflow-hidden rounded-2xl shadow-2xl ">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-10 md:px-20">
                <h2 className="text-3xl md:text-6xl font-extrabold text-gray-400  mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400  mb-6 max-w-2xl">
                  {slide.desc}
                </p>
                <button className="bg-primary hover:bg-amber-800 text-text-gray-100 cursor-pointer  px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 w-fit">
                  {slide.btn}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </MyContainer>
  );
};

export default Banner;

