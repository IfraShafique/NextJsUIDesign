import React from 'react'
import Button from './Button'

export default function Title() {
  return (
    <div>
      <div className="text-center max-md:flex max-md:items-center max-md:justify-center">
        <h1 className="sm:text-[82.74px] text-3xl mx-auto md:w-[35%] w-[60%] font-bold text-[#FF8A36]">
          Instant
          <span className="block text-white max-lg:-mx-5 sm:pt-10">
            Property
            <span className="block -mx-10 sm:py-10">Valuations</span>
          </span>
        </h1>
      </div>

      {/* para */}
      <div className="mt-10 mx-auto sm:w-[476px] h-[144px] font-medium sm:text-[30px] text-normal ">
        <p className="text-center sm:leading-[36.31px]">
          Cutting edge AI merges with comprehensive property
          insights to provide instant, market-reflective
          appraisals
        </p>
      </div>

      <Button buttonText="Start Valuation"/>
    </div>
  )
}
