import React from 'react'
import Image from 'next/image'

export default function Content() {
  return (
    <div>
      <div className="mx-auto md:px-2 flex md:flex-row flex-col items-center justify-center sm:mt-8">
    
    {/* mobility */}
    <div className="xl:w-[20%] md:w-[40%] w-[60%] items-center justify-center flex flex-col mt-10">
      
    <Image
            src="/assets/Images/mobility.png"
            alt="Mobillity"
            className="max-sm:w-[3rem] block brightness-110 blur-5"
            width={80}
            height={105.41}
            priority
          />

        <h2 className="text-[#FF8A36] sm:text-3xl text-2xl font-semibold loading-[36.31px] mt-3">MOBILITY</h2>
        <p className="sm:mt-5 sm:text-[25px] text-normal loading-[33.1px] text-center">Migrate from manual to modern, minute-made methods.</p>
    </div>

    {/* accessibility */}
    <div className="xl:w-[20%] md:w-[40%] w-[60%] items-center justify-center flex flex-col mt-10 ">
    <Image
            src="/assets/Images/accessibility.png"
            alt="Accessibility"
            className="max-sm:w-[3rem]"
            width={70}
            height={105.41}
            priority
          />

        <h2 className="text-[#FF8A36] sm:text-3xl text-2xl font-semibold loading-[36.31px] mt-3">ACCESSIBILITY</h2>
        <p className="sm:mt-5 sm:text-[25px] text-normal loading-[33.1px] text-center">Assess assets anywhere, anytime, all the time.</p>
    </div>

    {/* accessibility */}
    <div className="xl:w-[20%] md:w-[40%] w-[60%] items-center justify-center flex flex-col mt-10">
    <Image
            src="/assets/Images/capability.png"
            alt="capability"
            className="max-sm:w-[3rem]"
            width={92}
            height={105.41}
            priority
          />

        <h2 className="text-[#FF8A36]  text-[28px] font-semibold loading-[36.31px] mt-3">CAPABILITY</h2>
        <p className="sm:mt-5 sm:text-[25px] text-normal loading-[33.1px] text-center">Constantly calibrated for current market conditions.</p>
    </div>
    </div>
    </div>
  )
}
