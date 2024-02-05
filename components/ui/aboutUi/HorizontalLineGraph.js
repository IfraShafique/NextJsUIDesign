import React from "react";

export default function HorizontalLineGraph() {
  return (
    <>
      <div className="mt-10 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Economic & Employment Landscape</h1>
            <div className="mt-10  text-center  rounded-[10px]">
        <div className="flex items-center justify-center lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto px-4">
          {/* numbering */}
          <div className="">
            <ul className="">
              <li className="my-4 font-semibold">10</li>
              <li className="my-4 font-semibold">20</li>
              <li className="my-4 font-semibold">30</li>
              <li className="my-4 font-semibold">40</li>
            </ul>
          </div>
          {/* bars */}
          <div className="">
            <ul className="ml-4">
              <li className="xl:w-[30rem]  md:w-[20rem] sm:w-[18rem] w-[12rem] h-[5px] bg-gray-400 my-8">
                <p className="w-[8%] absolute bg-[#FF8A36] h-[5px]"></p>
                <span className="flex justify-center items-center ml-[7%] -mt-1  md:w-[15px] md:h-[15px] h-[10px] w-[10px] bg-[#FF8A36] absolute rounded-full"></span>
              </li>

              <li className="xl:w-[30rem]   md:w-[20rem] sm:w-[18rem] w-[12rem] h-[5px] bg-gray-400 my-8">
                <p className="w-[20%] absolute bg-[#FFB742] h-[5px]"></p>
              <span className="flex justify-center items-center ml-[19%] -mt-1  md:w-[15px] md:h-[15px] h-[10px] w-[10px] bg-[#FF8A36] absolute rounded-full"></span>
              </li>

              <li className="xl:w-[30rem]   md:w-[20rem] sm:w-[18rem] w-[12rem] h-[5px] bg-gray-400 my-8">
                <p className="w-[25%] absolute bg-[#DE6615] h-[5px]"></p>
                <span className="flex justify-center items-center ml-[24%] -mt-1  md:w-[15px] md:h-[15px] h-[10px] w-[10px] bg-[#DE6615] absolute rounded-full"></span>
              </li>

              <li className="xl:w-[30rem] md:w-[20rem] sm:w-[18rem] w-[12rem] h-[5px] bg-gray-400 my-8">
                <p className="w-[5%] absolute bg-[#FEA72F] h-[5px]"></p>
                <span className="flex justify-center items-center ml-[4%] mx-auto -mt-1   md:w-[15px] md:h-[15px] h-[10px] w-[10px] bg-[#FEA72F] absolute rounded-full"></span>
              </li>

            </ul>
          </div>
        </div>
      </div>
        </div>
    </>
  );
}
