
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '@fontsource/bebas-neue';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex justify-between mx-auto sm:my-8 m-5">
      <div className="flex ">
        <Image
          src="/assets/Images/ValuePro.png"
          alt="Vercel Logo"
          className="sm:ml-10 ml-3 max-sm:w-[2rem] "
          width={60}
          height={60}
          priority
        />
        <h1 className="sm:ml-10 ml-5 font-bold sm:text-[41.71px] text-3xl font-bebas tracking-widest sm:leading-[50.01px]">
          VALUEPRO
        </h1>
      </div>

      <div className="sm:mx-10 mx-5">
        <Image
          src="/assets/Images/menubar.png"
          alt="Menubar"
          className="ml-auto cursor-pointer max-sm:w-[2rem]"
          width={60}
          height={60}
          onClick={toggleMenu}
        />



        {menuOpen && (
          <div  className="absolute xl:w-[20%] lg:w-[30%] sm:w-[50%] w-[60%]  h-[100vh] bg-[#132D94] top-0 pt-8 right-0 ">
            <Image
          src="/assets/Images/menubar.png"
          alt="Menubar"
          className="sm:ml-auto ml-auto cursor-pointer sm:mx-10 max-sm:mr-5 max-sm:-mt-3 max-sm:w-[2rem]"
          width={60}
          height={60}
          onClick={toggleMenu}
        />
            
            <ul className='sm:text-3xl text-normal font-bold bg-[#132D94] flex flex-col sm:mt-24 mt-12 items-center text-center'>
              <li className=' hover:bg-[#FF8A36] cursor-pointer px-30 py-5 border-b-2 w-full'><Link href="/">Home</Link></li>
              <li className='hover:bg-[#FF8A36] cursor-pointer px-30 py-5 border-b-2 w-full' ><Link href="/about">About</Link></li>
              <li className='hover:bg-[#FF8A36] cursor-pointer px-30 py-5 border-b-2 w-full'>How It Works</li>
              <li className='hover:bg-[#FF8A36] cursor-pointer px-30 py-5 border-b-2 w-full'>Services</li>
              <li className='hover:bg-[#FF8A36] cursor-pointer px-30 py-5 w-full'>Contact</li>
            </ul>
          </div>
        )}




      </div>
    </div>
  );
}
