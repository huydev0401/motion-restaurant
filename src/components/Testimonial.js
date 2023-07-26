import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { testimonialData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Testimonial = () => {
  const { modelImg, slider, subtitle, title } = testimonialData;
  return (
    <section
      id="testimonials"
      className="bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px]"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col items-center text-center capitalize"
        >
          <h2 className="text-white h2">{title}</h2>
          <p className="mb-8 text-white">{subtitle}</p>
          <div className="mb-12">
            <img src={modelImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex items-center justify-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
