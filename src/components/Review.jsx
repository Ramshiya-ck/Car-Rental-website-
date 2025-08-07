import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import ellipse from '/images/Ellipse.png'


const Review = () => {
  return (
    <div>
      <section className='max-w-7xl mx-auto px-0'> 
        <div className=''>
            <div className='py-10 flex justify-between'>
                <h1 className='font-bold text-[25px] pt-5'>What Our Customers Say</h1>
                <div className='flex items-center gap-3'>
                    <div className='p-4 rounded-full border border-gray  hover:bg-black hover:text-white'> <ArrowLeft color='gray' /></div>
                    <div className='p-4 rounded-full border border-gray hover:bg-black hover:text-white'><ArrowRight color='gray' /></div>
                </div>
            </div>
            <p className='text-[30px] w-[80%] text-gray-800 pt-5'>“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”</p>
        </div>
        <div className='flex gap-2 items-center py-20'>
            <img  src={ellipse} alt="" />
            <div className=''>
                <h1 className='font-bold'>Lokman Hossain</h1>
                <h3 className='text-gray-600'>From <span className='text-gray-600 font-bold'>Texas</span></h3>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Review
