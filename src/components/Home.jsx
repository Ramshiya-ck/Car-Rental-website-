import React from 'react'
import heroImg from "/images/img1.png"
import lineimg from "/images/Line 6.png"
import arrow from "/images/arrrow.png"
import location from "/images/Location (1).png"
import { ArrowRight } from 'lucide-react'
import Car from './Car'
import List from './List'
import Details from './Details'
import About from './About'
import Review from './Review'


const Home = () => {
    return (
        <>
        <div className=' bg-black'>
            <div className=' mx-auto pl-10 h-screen w-[100%] flex items-center justify-start'>
                <div className=" flex flex-col items-center justify-between gap-6 py-12">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-[90%] md:max-w-[600px]">
                        Discover the world on wheels with our car rental service
                    </h1>
                    <p className="text-white max-w-[90%] md:max-w-[600px]">
                        Choose from a wide range of cars that fit your style and budget.
                        Experience the freedom of the open road with our reliable and efficient rental service.
                    </p>
                    <div className='w-[100%]  border-b-[1px]'></div>
                    <div className='flex items-center gap-3 -ml-80'>
                        <img src={arrow} className='w-[20%]' alt="" />
                        <a href="#"><p className='border-b-[1px] text-white'>Contact Us</p></a>
                    </div>



                </div>

                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='bg-[#ffffffe0] text-black w-[80%] rounded-xl  shadow-lg  h-[130px] -mb-10 px-4 py-6'>
                    <div className='flex bg-white  justify-center  items-center pt-5 pb-5'>
                        <div className='ml-6 mr-6'>
                            <h1>Pick-up Location</h1>
                            <div className='flex bg-white rounded-md py-2 gap-4 px-3 border border-gray-300'>
                                <img src={location} alt="" />
                                <div>
                                    <h1>Search a location</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mr-6'>
                            <h1>Pick-up Location</h1>
                            <div className='flex bg-white rounded-md py-2 gap-4 px-3 border border-gray-300'>
                                <div>
                                    <h1>Search a location</h1>
                                </div>
                                <img src={location} alt="" />

                            </div>
                        </div>
                        <div className='mr-6'>
                            <h1>Pick-up Location</h1>
                            <div className='flex bg-white rounded-md py-2 gap-4 px-3 border border-gray-300'>
                                <img src={location} alt="" />
                                <div>
                                    <h1>Search a location</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mr-6'>
                            <h1>Pick-up Location</h1>
                            <div className='flex bg-white rounded-md py-2 gap-4 px-3 border border-gray-300'>
                                <div className=''>
                                    <h1>Search a location</h1>
                                </div>
                                <img src={location} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-center mx-auto bg-[#ffffff9b] mt-4 py-3 hover:bg-black hover:text-white w-[20%] rounded-full items-center gap-2  px-3'>
                            <button className='flex items-center gap-1' >See all cars    <ArrowRight size={20} /> </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Car />
      <List/>
      <Details />
      {/* <Signup /> */}
      < About />
      <Review />
      
        </>
    )
}

export default Home
