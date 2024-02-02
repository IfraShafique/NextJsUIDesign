import React from 'react'

export default function howItWorks() {
  return (
    <div className='max-sm:flex sm:mt-16 mt-10 mx-auto xl:w-[65%] sm:w-[90%] w-[80%]'>
      {/* vertical line */}
      <div className='border-l border-dotted border-white -mr-2 mt-24 sm:hidden'>
        <p></p>
      </div>

    {/* content */}
      <div>
      {/* title */}
      <h1 className='sm:text-6xl text-4xl font-semibold loading-[72.61] text-center'>How It Works</h1>

      <div className="flex flex-col sm:flex-row mt-10 ">
      {/* extration */}
        <div className="xl:w-[27%] md:w-[33%]  sm:mr-3 mx-auto  sm:mt-10">
          <h2 className="mx-auto lg:h-[5vh] bg-[#FF8A36] text-[#0E2B84] lg:text-3xl md:text-2xl text-xl font-bold rounded-lg">
            <span className="pr-6 sm:pl-3 pl-2 ">1</span>EXTRACTION</h2>

          <p className="mt-5 max-sm:w-[90%] max-sm:mx-auto sm:text-[25px] text-normal xl:loading-[33.1px] text-center">Our AI proficiently mines your company's database for vital data points.</p>
        </div>

      {/* exploration */}
        <div className="xl:w-[27%] md:w-[33%] sm:mr-3 mx-auto  mt-10">
          <h2 className="mx-auto lg:h-[5vh] bg-[#FF8A36] text-[#0E2B84] lg:text-3xl md:text-2xl text-xl font-bold rounded-lg">
            <span className="pr-6  sm:pl-3 pl-2 ">2</span>EXPLORATION</h2>
          <p className="mt-5 sm:text-[25px] max-sm:w-[90%] max-sm:mx-auto text-normal xl:loading-[33.1px] text-center">ValuPro's AI traverses property facets, tuned to the latest economic pulse.</p>
        </div>

      {/* evaluation */}
        <div className="xl:w-[27%] md:w-[33%] sm:mr-3 mx-auto  mt-10">
          <h2 className="mx-auto lg:h-[5vh] bg-[#FF8A36] text-[#0E2B84] lg:text-3xl md:text-2xl text-xl font-bold rounded-lg">
            <span className="pr-6  sm:pl-3 pl-2">3</span>EVALUATION</h2>
          <p className="mt-5 sm:text-[25px] max-sm:w-[90%] max-sm:mx-auto text-normal xl::loading-[33.1px] text-center">Witness a rapid, pinpoint property valuation, bolstered by data-oriented insights and market-calibrated appraisals.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
