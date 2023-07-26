import React from "react";
import { teamData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Team = () => {
  const {
    chefImg,
    name,
    occupation,
    pretitle,
    signatureImg,
    sub1,
    sub2,
    title,
  } = teamData;
  return (
    <section
      id="team"
      className="relative top-96 lg:top-[480px] z-10 min-h-[720px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="capitalize h2">{title}</h2>
            <p className="mb-[60px]">{sub1}</p>
            <p>{sub2}</p>
            <div className="my-[26px]">
              <div className="text-2xl capitalize font-secondary text-accent">
                {name}
              </div>
              <div className="text-[15px] font-semibold capitalize text-grey/70">
                {occupation}
              </div>
              <div className="flex justify-center mb-6 lg:justify-start lg:mb-0">
                <img src={signatureImg} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <img src={chefImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
