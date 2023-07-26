import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, plateVariants } from "../variants";

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section id="about" className="min-h-[620px]">
      <div className="container min-h-[620px] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-center lg:flex-row min-h-[620px]"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="capitalize h2">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="mx-auto capitalize btn lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
