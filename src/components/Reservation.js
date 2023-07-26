import React from "react";
import { reservationData } from "../data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "../timepicker.css";
import { FaUser, FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";
import { useState } from "react";

const Reservation = () => {
  const { btnText, modelImg, subtitle, title } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [clock, setClock] = useState("00:00");
  return (
    <section
      id="reservation"
      className="relative z-30 pb-20 top-96 lg:py-[100px]"
    >
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="capitalize h2"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="mb-8 text-dark"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-8"
          >
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
        <motion.form
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col items-center justify-between mb-8 lg:flex-row gap-y-4">
            <div>
              <div className="flex items-center font-semibold text-dark text-base mb-3 gap-x-[10px]">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <div className="flex items-center font-semibold text-dark text-base mb-3 gap-x-[10px]">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={setClock}
                value={clock}
              />
            </div>
            <div>
              <div className="flex items-center font-semibold text-dark text-base mb-3 gap-x-[10px]">
                <FaUser />
                <div>How many people?</div>
              </div>
              <input className="input" type="text" placeholder="1" />
            </div>
          </div>
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className="w-full capitalize btn lg:w-auto">
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
