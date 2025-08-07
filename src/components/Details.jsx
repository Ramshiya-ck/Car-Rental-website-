import { CalendarSearch, Search, Smile } from 'lucide-react'
import React from 'react'
import jeep from '/images/jeep.png'

const Details = () => {
    let cardetails = [
        {
            icon: <Search />,
            name: "Browse and select",
            para: "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best."
        },
        {
            icon: <CalendarSearch />,
            name: "Book and confirm",
            para: "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS."

        },
        {
            icon: <Smile />,
            name: "Enjoy your ride",
            para: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service."
        }
    ]
    console.log(cardetails)
    return (
        <div>
            <section className='max-w-7xl mx-auto pb-10 '>
                <div className='flex flex-col text-center justify-center py-10'>
                    <h1 className='text-[40px] font-bold pt-10 py-5'>How it woks</h1>
                    <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you <br /> to book and confirm your vehicle of choice online</p>
                </div>
                <div className='flex flex-row'>
                    <div className="py-1 w-[45%] mt-[6%] relative z-20">
                        {cardetails.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-6 shadow-sm mb-4">
                                <div className="bg-gray-100 rounded-xl w-16 h-16 flex items-center justify-center mr-4">{item.icon}
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h1>
                                    <p className="text-gray-700 text-base">{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-slate-100 rounded-lg w-[50%] h-[60%] mt-10 ml-[35%] absolute z-0'>
                        <img className='ml-[20%] mt-[10%]' src={jeep} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details
