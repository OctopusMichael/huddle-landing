import React from "react";
import data from "../json/data.json";

const Cards = () => {
  return (
    <section>
      {data &&
        data.map((element) => {
          return (
            <div
              key={element.id}
              className=" md:mt-[0px] md:odd:my-[30px]  p-[30px] rounded-[20px] bg-zinc-50 w-[90%] md:w-[86%]  md:h-auto xl:h-[450px] h-auto mt-10 mx-auto  flex flex-col xl:flex-row xl:odd:flex-row-reverse text-center shadow-lg "
            >
              <div className="md:flex md:items-center md:mx-auto">
                <div className={element.img} />
              </div>

              <div className=" md:flex md:flex-col xl:ps-[100px]   xl:pt-[120px]  text-center  xl:text-start md:w-[100%]  md:order-1">
                <h1 className="my-2 font-bold text-[28px]   ">
                  {element.title}
                </h1>
                <p className=" xl:mt-3 text-black-200 xl:pe-[120px]  xl:text-[18px]   text-grayishBlue ">
                  {element.ph}
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Cards;
