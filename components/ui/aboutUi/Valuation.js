import React from 'react'
import Button from '../Button'

export default function Valuation() {
    return (
        <div className='text-center sm:mt-[12rem] mt-[8rem] w-[100%]'>
            <div className='text-white mx-auto'>
                <h1 className="sm:text-[75.74px] sm:text-3xl text-[35px]  font-bold">
                    Valuation Result
                </h1>

                {/* Property Value */}
                <div className=' flex flex-col'>


                    <div className='flex flex-col xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] xl:h-[20vh] h-[26vh]  mt-16 rounded-lg border-2 mx-auto md:text-4xl sm:text-3xl text-xl font-bold '>
                        <h1 className='absolute text-[#1A2E77] text-center ml-[15%] sm:ml-[10%] sm:pt-2'>Property Value</h1>
                        <div className='h-[8vh] rounded bg-white'></div>
                        <span className=' mt-7'>£1,250,000</span>
                    </div>

                <div className='my-5 max-sm:mt-16'>
                    <Button buttonText="Download Summary Report" />
                    <p className='sm:mt-10 mt-5 sm:text-2xl xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] text-center mx-auto text-xs'>For a detailed analysis of how we arrived at this valuation, see below</p>
                </div>
                </div>
            </div>
        </div>
    )
}
