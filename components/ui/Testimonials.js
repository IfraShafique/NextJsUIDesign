'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const remarks = ({src, alt, width, height}) => {

}
export default function Testitionals() {
  return (
    <>
    <div className=' w-[80%] mt-10 mx-auto'>
        {/* heading */}
        <h1 className='sm:text-6xl text-4xl font-semibold loading-[72.61] text-center '>Testimonials</h1>
      
      {/* cards */}
      <div className='flex max-md:flex-col justify-center items-center mt-10 sm:mt-24  max-md:text-[12px] text-[16px] text-black text-center'>
        {/* first card */}
        <div className=' md:w-[30%] w-[80%] xl:h-[37vh]  bg-[#FFFF] rounded-[15px] border-black border-4 sm:mr-2 max-md:mb-16'>
        <Image
            src="/assets/Images/img3.png"
            alt="Mobillity"
            className="max-md:w-[5rem] mx-auto md:-mt-[3rem]  -mt-[2rem] border-black border-4 rounded-full "
            width={110}
            height={105.41}
            priority
          />

        <Image
            src="/assets/Images/ratings.png"
            alt="Ratings"
            className="mx-auto my-5 "
            width={90}
            height={105.41}
            priority
          />

          <h1 className='my-2 font-semibold'>SNL company owner</h1>
          <p className='w-[90%]  mx-auto font-inter'>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut imperdiet massa, 
            et blandit ipsum. Curabitur consectet "</p>

          <h2 className='my-2 font-semibold italic'>Carter B</h2>
        </div>

        {/* second card */}
        <div className=' md:w-[30%] w-[80%] xl:h-[37vh] bg-[#FFFF] rounded-[15px] border-black border-4  sm:mr-2  max-md:mb-16'>
        <Image
            src="/assets/Images/img1.png"
            alt="Mobillity"
            className="max-md:w-[5rem] mx-auto md:-mt-[3rem]  -mt-[2rem] border-black border-4 rounded-full "
            width={110}
            height={105.41}
            priority
          />

        <Image
            src="/assets/Images/ratings.png"
            alt="Ratings"
            className="mx-auto my-5 "
            width={90}
            height={105.41}
            priority
          />

          <h1 className='my-2 font-semibold'>Manager of JJJKL</h1>
          <p className='w-[90%]  mx-auto font-inter '>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut imperdiet massa, et blandit ipsum. Curabitur consectetur ”</p>

          <h2 className='my-2 font-semibold italic'>Avery M.</h2>
        </div>

        {/* third card */}
        <div className=' md:w-[30%] w-[80%] xl:h-[37vh] bg-[#FFFF] rounded-[15px] border-black border-4  sm:mr-2  max-md:mb-16'>
        <Image
            src="/assets/Images/img2.png"
            alt="Mobillity"
            className="max-md:w-[5rem] mx-auto md:-mt-[3rem] -mt-[2rem] border-black border-4 rounded-full "
            width={110}
            height={105.41}
            priority
          />

        <Image
            src="/assets/Images/ratings.png"
            alt="Ratings"
            className="mx-auto my-5 "
            width={90}
            height={105.41}
            priority
          />

          <h1 className='my-2 font-semibold'>Head of LJGJO</h1>
          <p className='w-[90%]  mx-auto font-inter '>" Donec arcu tortor, iaculis non porta sed, porttitor et enim. Aenean sit amet mi 
          et neque vehicula tempor vel id libero. Donec quam tortor "</p>

          <h2 className='my-2 font-semibold italic'>Harper Z.</h2>
        </div>
      </div>


    </div>

      <div className='lg:mt-24'>
        <Button buttonText="Get Started"/>
      </div>
    </>
  )
}
