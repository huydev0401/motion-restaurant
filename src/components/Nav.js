import React from "react";
import { navData } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="flex flex-col items-center justify-center h-full gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass="active"
                // spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="text-xl italic capitalize transition-all duration-300 cursor-pointer font-primary hover:text-dark"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
