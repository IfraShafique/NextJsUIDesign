import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    < >
      <div className='absolute md:w-[40%] w-[80%] sm:mt-9'>

      </div>
      {/* Gradient Progress Bar */}
      <div className=" xl:w-[40%] lg:w-[60%] w-[80%] h-[5vh] bg-[#DEE1E2] rounded-full sm:mt-20 ">
        <div className="relative h-full ">
          {/* Gradient Bar with Tailwind CSS */}
          <div
            className="absolute h-full rounded-full bg-gradient-to-r from-[#FF8000] to-[#FFBC48]"
            style={{ width: `${progress}%` }}

          >
            <div className='ml-[90%] sm:w-20 sm:h-20 w-12 h-12 bg-gradient-to-r from-[#FF8418] to-[#FFB946] rounded-full sm:-mt-20 -mt-12 flex justify-center items-center'>
              <p className='sm:w-16 sm:h-16 w-10 h-10 rounded-full border-2 flex justify-center items-center'>
                <span className='sm:text-[20px] text-xs font-semibold'>{progress}%</span>
              </p>
            </div>

          </div>

          {/* Striped Bar with Tailwind CSS */}
          <div
            className="absolute h-full  rounded-full bg-gradient-to-r from-[#FF9E3A] to-[#FFC86D] via-[#FF8000]"
            style={{
              width: `${progress}%`,
              backgroundSize: '18px',
            }}
          ></div>
        </div>

        <div className='flex justify-between items-center px-3 mt-2'>
          <div className='w-[3px] h-[3vh] bg-white '><p className='mt-8 font-semibold sm:text-[24px] text-[16px] -ml-1'>0%</p></div>
          <div className='w-[3px] h-[3vh] bg-white '><p className='mt-8 font-semibold sm:text-[24px] text-[16px] -ml-6'>100%</p></div>
        </div>
      </div>
    </>
  );
}
