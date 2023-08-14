import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    let y = window.scrollY;
    if (y >= 125) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <nav
        className={`${
          scroll ? "hidden" : "bg-transparent"
        } w-full p-5 md:pt-[50px] md:px-[80px] bg-transparent flex  justify-between items-center fixed font-bold  xl:max-w-[1440px] `}
      >
        <div className="">
          <img src={logo} alt="logo" className="h-5 md:h-[32px]" />
        </div>
        <div>
          <button className=" w-[8rem] md:w-[12.5rem] md:h-[3rem]  p-2 rounded-full  text-sm bg-white   hover:bg-zinc-100 shadow-lg ">
            Try It Free
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
