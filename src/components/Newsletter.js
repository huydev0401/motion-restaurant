import React from "react";
import { newsletterData } from "../data";

const Newsletter = () => {
  const { btnText, placeholder, subtitle, title } = newsletterData;
  return (
    <div className="bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto">
      <div className="flex flex-col items-center justify-between h-full lg:flex-row">
        <div className="mb-4 text-center lg:text-left">
          <h3 className="text-[26px] font-primary italic text-white capitalize mb-2">
            {title}
          </h3>
          <p>{subtitle}</p>
        </div>
        <form className="flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-4">
          <input
            className="text-white bg-transparent border input placeholder:font-light placeholder:text-white/20 focus:ring-1 focus:ring-accent border-white/20"
            placeholder={placeholder}
            type="text"
          />
          <button className="btn capitalize w-full lg:max-w-[204px]">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
