import { BadgeCheck, HandCoins, Sparkles } from 'lucide-react'
import React from 'react'

const About = () => {
    let about = [
        {
            icon: <Sparkles color='black' />,
            title: "Quality Choice",
            description: "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more."
        },
        {
            icon:  <HandCoins color='black' />,
            title: "Affordable Prices",
            description: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank."
        },
        {
            icon:  <BadgeCheck color='black' />,
            title: "Convenient Online Booking",
            description: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime."
        }
    ]
  return (
    <div className='bg-black text-white pb-10'>
        <section className=' max-w-7xl mx-auto px-0'>
            <div className='py-10 items-center'>
                <h1 className='flex justify-center text-[40px] font-bold pb-5'>Our Services & Benefits</h1>
                <p className='flex justify-center text-center'>To make renting easy and hassle-free, we provide a variety of services and advantages. We <br /> have you covered with a variety of vehicles and flexible rental terms.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p'>
                    {about.map((item,index) => (
                        <div className='items-center text-center py-8' key={index}>
                            <div>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='flex justify-center pb-4 bg-white rounded-full p-4'>{item.icon}</span>
                                </div>
                            <h2 className='pb-2 font-bold text-[20px]'>{item.title}</h2>
                            <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default About
