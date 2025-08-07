import React from 'react'
import carlist from "./data.json"
import fram1 from '/images/Frame1.png'
import fram2 from '/images/Frame2.png'
import fram3 from '/images/Frame3.png'
import fram4 from '/images/Frame4.png'
import arrow from '/images/arrow-right.png'
import { ArrowRight } from 'lucide-react'



const List = () => {
    return (
        <div className='bg-gray-200 pb-10' >
            <div className='max-w-7xl mx-auto px-0'>
                <div className='text-center items-center py-20'>
                    <h1 className='text-[30px] font-bold'>Our Impressive Collection of Cars</h1>
                    <p className='font-light mt-5'>Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our <br /> customers with the ultimate driving experience.</p>
                </div>
                <ul className='flex items-center justify-center gap-10 mt-4'>
                    <li><button className='py-2 px-6 bg-gray-100 shadow-lg  rounded-full hover:bg-black hover:text-white'>Popular</button></li>
                    <li><button className='py-3 px-6 bg-gray-100 rounded-full  hover:bg-black hover:text-white'>Luxury Car</button></li>
                    <li><button className='py-3 px-6 bg-gray-100 rounded-full  hover:bg-black hover:text-white'>Vintage Car</button></li>
                    <li><button className='py-3 px-6 bg-gray-100 rounded-full  hover:bg-black hover:text-white'>Family Car</button></li>
                    <li><button className='py-3 px-6 bg-gray-100 rounded-full  hover:bg-black hover:text-white'>Off-Road Car</button></li>
                </ul>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {carlist.map((details) => (
                        <div key={details.id} className="max-w-sm bg-white w-[100%] rounded-2xl shadow-md p-4 border hover:border-blue-400 border-gray-200 mx-auto my-6">
                            <div className="rounded-2xl overflow-hidden border-4">
                                <img src={details.image} className="w-full h-48 object-cover" alt="Car" />
                            </div>

                            <div className="mt-6 px-2">
                                <h2 className="text-xl font-medium text-gray-800 mb-2">{details.name}</h2>
                                <div className="flex items-end">
                                    <span className="text-3xl font-extrabold text-gray-900 mr-1">{details.charge}</span>
                                    <span className="text-base text-gray-500 mb-1">/day</span>
                                </div>
                            </div>

                            <div className="mt-6 mb-4 px-2 py-3 bg-gray-50 rounded-xl flex justify-between items-center text-xs font-medium text-gray-700">
                                <div className="flex flex-col items-center">
                                    <img src={fram1} alt="icon1" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={fram2} alt="icon2" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={fram3} alt="icon3" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={fram4} alt="icon4" />
                                </div>
                            </div>

                            <button className="w-full py-2 rounded-xl border border-gray-400 text-gray-900 font-semibold hover:bg-black hover:text-white transition mt-2">
                                Rent Now
                            </button>

                        </div>

                    ))}
                </div>
               

            </div>
             <div className='flex justify-center mx-auto bg-gray-300  py-3 hover:bg-black hover:text-white w-[20%] rounded-full items-center gap-2  px-3'>
                    <button className='flex items-center gap-1' >See all cars    <ArrowRight size={20} /> </button>
                </div>
        </div>
    )
}

export default List
