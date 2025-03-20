import React from 'react'
import FoodNavbar from './FoodNavbar'

export default function FoodAboutPage() {
  return (
    <div className='h-[700px] w-full absolute z-40  '>
        <FoodNavbar/>
      <div className=' h-[400px] flex gap-8 mx-10 '>
        <div className='flex-1'>
            <img src="restaurant.png" alt="restaurant pic" 
               className='h-full'/>
        </div>
        <div className='flex-1 flex-col gap-5 justify-center items-center text-center'>
            <h1 className='text-green-900 text-[50px] font-bold font-serif'>
                A Dinning Experience in a Family Setting
            </h1>
            <p className='text-[#624D16] text-[20px] font-medium font-serif  '>
                We are so happy to announce the opening of our 
                new Mediterranean restaurant.At Gardenia, we strive 
                to provide our customers with happiness 
                and satisfaction by continuously 
                serving them authentic and yummy dishes to eat.<br/>
            </p> 
            <span className='text-[#624D16] text-[20px] font-medium font-serif  '>
                Come join us and be part of our family!</span>   
        </div>
      </div>
      <div className='mt-8 flex items-center justify-center'>
        <img src="chef.png" alt="chef image" className='w-[800px] h-[400px] mb-[20px]'/>
      </div>
    </div>
    
  )
}
