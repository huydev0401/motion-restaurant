import React from "react";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import LogoWhite from "../assets/img/header/logo-white.png";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";
import { useState } from "react";
import { useEffect } from "react";

const headerVariants = {
  hidden: { padding: "84px 0 84px 0", background: "none" },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const scroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="fixed w-full max-w-[1800px] z-50"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate="show"
        className="container mx-auto"
      >
        <div className="relative flex items-center justify-between px-4 text-white lg:px-0">
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            onClick={() => setNav(!nav)}
            className={`${
              nav ? "gap-y-0" : "gap-y-2"
            } flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="order-1 lg:order-none lg:ml-[11rem]"
          >
            <a href="/">
              <img
                className={`${
                  isActive ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
                }`}
                src={LogoWhite}
                alt="logo"
              />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : ""}
            className="absolute right-0 top-[120px] bottom-0 z-[50] h-[400px] w-[310px] lg:left-0 bg-accent shadow-xl rounded-lg"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
