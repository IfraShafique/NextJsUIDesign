import React from 'react'
import Button from '../Button'

export default function content() {
    const initialValues = [
        {name:"Property Address", type: "text", placeholder: "*Property Address or Reference Number*"},
        {name:"Name", type: "text", placeholder: "Owner/Agent Name"},
        {name:"Contact", type: "text", placeholder: "Contact Information"},
    ]
  return (
    <div className='text-center'>
        <div className='text-white sm:mb-20 mb-12 mx-auto'>
      <h1 className="sm:text-[82.74px] text-3xl  font-bold">
          Property
          <span className="block max-lg:-ml-[1rem] sm:pt-16">
            Identification
          </span>
        </h1>
        </div>

        {/* form */}
        {initialValues.map((fields) => (
            <div> 
            <form className='mx-auto flex justify-center items-center'>
                <input 
                    type={fields.type} name={fields.name} placeholder={fields.placeholder}
                    className='lg:w-[25%] md:w-[40%] w-[70%] mb-2 h-[8vh] px-4 rounded-lg text-white border-2 bg-transparent sm:text-normal text-[10px]    '/>
            </form>
            </div>
        ))}

        <div className='mt-12'>
             <Button buttonText="Proceed to Valuation"/>
        </div>
    </div>
  )
}
