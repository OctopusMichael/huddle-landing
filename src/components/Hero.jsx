import React from "react";
import mockups from "../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <>
      <section
        className="  xl:w-[1440px] px-[57px] md:px-[80px] pt-[100px] text-center lg:text-start flex flex-col xl:flex-row   "
        id="section-hero"
      >
        <div className="  md-w[100px] ">
          <h1 className="md:pt-[160px] md:pe-[50px] font-bold text-2xl md:text-[2.5rem] md:leading-[60px] ">
            Build The Community Your Fans Will Love
          </h1>
          <p className="my-[25px] md:text-[18px] md:pe-[4rem] ">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="hover:bg-pinkLight md:mt-[5px] font-bold rounded-full bg-pink h-10 w-[250px] md:w-[280px] md:h-[58px] text-white  shadow-lg ">
            Get Started For Free
          </button>
        </div>

        <img
          className="mt-[56px] w-full h-full   sm:w-full lg:h-[500px] lg:w-[900px] "
          src={mockups}
          alt="mockups"
        />
      </section>
    </>
  );
};

export default Hero;
