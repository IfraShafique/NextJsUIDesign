import React from 'react'

export default function Button({buttonText}) {
  return (
    <div>
      {/* button */}
      <div className="flex items-center justify-center  sm:mt-10 -mt-6">
        <button className="xl:w-[25%] lg:w-[35%] sm:w-[40%] w-[65%] h-[8vh]  bg-[#FF8A36] rounded-lg border-black border-2 xl:text-2xl sm:text-[25px] text-normal font-semibold ">{buttonText}</button>
      </div>
    </div>
  )
}
