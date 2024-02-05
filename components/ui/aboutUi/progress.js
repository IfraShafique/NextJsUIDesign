import React from 'react'
import Image from 'next/image'
import ProgressBar from './ProgressBar';

export default function progress() {
    // const noOfLines = 20;
    const progress = 90

    // create an array 
    // const lineArray = new Array(noOfLines).fill(null)
    return (
        <div className='text-center mt-12 sm:mt-20 '>
            <div className='text-white sm:pb-20 pb-12 mx-auto'>
                <h1 className=" sm:text-[82.74px] text-3xl  font-bold">
                    Prcessing:
                    <p className=" max-lg:-ml-[1rem] sm:pt-16">
                        AI is at Work
                    </p>
                </h1>
            </div>

            {/* progress bar */}
            <div className="flex items-center justify-center">
      {/* Progress Bar */}
      <ProgressBar progress={progress} />
    </div>
          
                    </div>

    )
}
