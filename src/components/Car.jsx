import React from 'react'
import rightarrow from '/images/arrow-right.png'
import brand from './brand.json'
import parts from './body.json'

const Car = () => {
  return (
    <>
    <section className='max-w-7xl mx-auto px-0 py-10'>
        <div className=' flex justify-between pt-10 py-3'>
            <h3 className='font-bold text-[20px]'>Rent By Brands</h3>
            <div className='flex gap-1'>
                <p>View all </p>
                <img src={rightarrow} className='w-[20px] mb-1' alt="" />
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2  mt-5'>
            {brand.map((branditem) => (
                <div key={branditem.id} className='flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 pt-10'>
                    <img className='w-[30%]' src={branditem.image} alt="" />
                    <h4>{branditem.brand}</h4>
                </div>
            ))}
        </div>
       <div className='py-20'>
         <div className=' flex justify-between'>
            <h3 className='font-semibold text-[20px]'>Rent By Bodytype</h3>
            <div className='flex gap-1'>
                <p>View all </p>
                <img src={rightarrow} className='w-[20px] mb-1' alt="" />
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2  mt-5'>
            {parts.map((partsitems) => (
                <div key={partsitems.id} className='flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-lg p-3 hover:bg-gray-200'>
                    <img className='w-[30%]' src={partsitems.image} alt="" />
                    <h4>{partsitems.brand}</h4>
                </div>
            ))}
        </div>
       </div>
    </section>
      
    </>
  )
}

export default Car
