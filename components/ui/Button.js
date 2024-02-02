import React from 'react'

export default function Button({buttonText}) {
  return (
    <div>
      {/* button */}
      <div className="flex items-center justify-center  sm:mt-10 -mt-6">
        <button className="xl:w-[25%] lg:w-[30%] sm:w-[40%] w-[65%] sm:h-[8vh]  bg-[#FF8A36] rounded-lg border-black border-2 sm:text-[28px] text-normal font-semibold sm:loading-[36.31px]">{buttonText}</button>
      </div>
    </div>
  )
}
