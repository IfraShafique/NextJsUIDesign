import React from 'react'
import Image from 'next/image'
// import Image from './Image'
export default function footer() {
  
  return (
    <div className='md:w-[50%] w-[80%] mx-auto max-sm:text-[10px]'>
      <ul className='flex justify-around items-center mt-20 text-center font-light'>
        <li>Terms & Policy</li>
        <li>Terms & Policy</li>
        <li>Terms & Policy</li>
      </ul>

      <div className='flex items-center justify-center sm:py-10 py-5'>
      <Image
            src="/assets/Images/location.png"
            alt="Location"
            className="max-sm:w-[0.7rem] cursor-pointer"
            width={20}
            height={105.41}
            priority
          />
        <p className='sm:ml-5 ml-3'>London</p>
      </div>

      <div className='md:w-[30%] w-[60%] mx-auto md:mt-10 pb-10'>
        <ul className='flex justify-around'>
          <li> <Image
            src="/assets/Images/facebook.png"
            alt="Mobillity"
            className="max-sm:w-[2rem]  cursor-pointer"
            width={50}
            height={105.41}
            priority
          /></li>

          <li>
          <Image
            src="/assets/Images/insta.png"
            alt="Mobillity"
            className="max-sm:w-[2rem] cursor-pointer"
            width={50}
            height={105.41}
            priority
          />
          </li>

          <li>
          <Image
            src="/assets/Images/linkedin.png"
            alt="Mobillity"
            className="max-sm:w-[2rem] block brightness-110 blur-5"
            width={50}
            height={105.41}
            priority
          />
          </li>
        </ul>
      </div>
      
    </div>
  )
}
