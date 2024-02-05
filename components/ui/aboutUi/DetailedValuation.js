import React from "react";
import Image from "next/image";
import HorizontalLineGraph from "./HorizontalLineGraph";

export default function DetailedValuation() {
    const source = [
        {src: "/assets/Images/p2.png", alt: "75%"},
        {src: "/assets/Images/p1.png", alt: "50%"},
        {src: "/assets/Images/p3.png", alt: "80%"},
    ]

   
  return (
    
    <>
    <div className="sm:mt-[4rem] mt-[1rem]">
      <div className="text-white text-center lg:w-[70%] sm:[80%] w-[60%] mx-auto max-sm:px-2">
        <p className="sm:text-6xl text-3xl md:text-7xl font-bold">
          Detailed AI Valuation <br /> Breakdown
        </p>
      </div>
    </div>

    <div className="mt-10 flex flex-col justify-center items-center">
        {/* local market dynamics */}
        <div className="lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Local Market Dynamics</h1>
            <Image
            src="/assets/Images/graph1.png"
            alt="Accessibility"
            className="max-sm:w-32 py-3 mx-auto"
            width={200}
            height={105.41}
            priority
          />
        </div>

        {/* Neighbourhood & Surroundings */}
        <div className="mt-10 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Neighbourhood & Surroundings</h1>
            <Image
            src="/assets/Images/graphicChart.png"
            alt="Accessibility"
            className="max-sm:w-48 py-3 mx-auto"
            width={400}
            height={105.41}
            priority
          />
        </div>

        {/* Home Characteristics & Condition */}
        <div className="mt-10 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Home Characteristics & Condition</h1>
            <Image
            src="/assets/Images/lineChart.png"
            alt="Accessibility"
            className="max-sm:w-48 py-3 mx-auto"
            width={400}
            height={105.41}
            priority
          />
        </div>

        {/* Future Development & Infrastructure */}
        <div className=" mt-10 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Future Development & Infrastructure</h1>
           
           <div className="flex py-5 items-center justify-around">

          
            {source.map((fields, index) => (
          <div key={index} className="flex  items-center">
            <Image
              src={fields.src}
              alt={fields.alt}
              className="max-sm:w-12 mx-auto flex"
              width={100}
              height={1}
              priority
            />
          </div>
        ))}
         </div>
        </div>

        
        {/* Economic & Employment Landscape */}
        <HorizontalLineGraph/>
        
           {/*Comparative Sales & Listings */}
        <div className="mt-10 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto text-center border-2 rounded-[10px]">
            <h1 className="w-full py-2 bg-white text-[#1A2E77] rounded-lg md:text-4xl sm:text-3xl text-base font-bold" >Comparative Sales & Listings</h1>
            <Image
            src="/assets/Images/salesChart.png"
            alt="Accessibility"
            className="max-sm:w-48 py-3 mx-auto"
            width={400}
            height={105.41}
            priority
          />
        </div>

    </div>

    </>
  );
}
