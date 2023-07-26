import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../slider.css";

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="w-full max-w-[1024px]"
    >
      {slider.map((item, index) => {
        const { image, message, name, occupation } = item;
        return (
          <div
            className="max-w-[840px] mx-auto px-16 lg:px-24 text-white"
            key={index}
          >
            <div className="text-lg leading-snug mb-9 lg:text-2xl">
              {message}
            </div>
            <div className="max-w-[70px] lg:max-w-[100px] mx-auto mb-3">
              <img src={image} alt="" />
            </div>
            <div className="font-bold text-[22px] text-accent">{name}</div>
            <div className="italic font-medium">{occupation}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
