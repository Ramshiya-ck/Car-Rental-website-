import React from 'react'
import { Apple, AppleIcon, CloudLightning, Play } from 'lucide-react'
import insagram from '/images/instagram.png'
import youtube from '/images/youtube.png'
import path from '/images/Path.png'
import twitter from '/images/twitter.png'
import logo from "/images/Heading.png";

const Footer = () => {

    return (
        <div className="bg-[#101010]  flex flex-col justify-between">
            <div className='max-w-7xl mx-auto px-0'>
                <section className=" flex-col items-center justify-center py-16 px-4 md:px-0">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 flex items-center gap-3">
                            Download our mobile app <CloudLightning className="text-yellow-400 w-10 h-10 inline" strokeWidth={2.5} />
                        </h1>
                        <p className="text-gray-300 text-lg  md:text-xl max-w-2xl mb-10">
                            Get exclusive access to car rentals with our mobile app. Download now and experience convenience on the go.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a href="#" className="flex items-center px-5 py-3 md:px-10 md:py-5 bg-white rounded-full shadow hover:scale-105 transition font-medium">
                            <AppleIcon className="w-9 h-9 mr-4" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-500 font-semibold">DOWNLOAD ON THE</span>
                                <span className="text-2xl text-black font-bold -mt-1">App Store</span>
                            </div>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 md:px-10 md:py-5 bg-white rounded-full shadow hover:scale-105 transition font-medium">
                            <Play className="w-9 h-9 mr-4" />
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-gray-500 font-semibold">GET IT ON</span>
                                <span className="text-2xl text-black font-bold -mt-1">Google Play</span>
                            </div>
                        </a>
                    </div>
                </section>

                <footer className="bg-[#101010] border-t border-[#222] px-4 md:px-0 py-10 flex flex-col  md:flex-row justify-between items-center gap-8">

                    <div className="flex mb-4 md:mb-0">
                        <img src={logo} className="text-3xl font-bold tracking-widest text-white font-sans"></img>
                    </div>
                    <nav className="flex gap-10 text-lg text-gray-300 font-medium">
                        <a href="#" className="hover:text-white transition">Rent</a>
                        <a href="#" className="hover:text-white transition">Share</a>
                        <a href="#" className="hover:text-white transition">About us</a>
                        <a href="#" className="hover:text-white transition">Contact</a>
                    </nav>
                    <div className="flex  gap-6">
                        <a href="#" className="bg-[#181818] rounded-full p-5 hover:bg-gray-800 transition">
                            <img src={insagram} alt="" />
                        </a>
                        <a href="#" className="bg-[#181818] rounded-full p-5 hover:bg-gray-800 transition">
                            <img src={youtube} alt="" />
                        </a>
                        <a href="#" className="bg-[#181818] rounded-full p-6 hover:bg-gray-800 transition">
                            <img className='w-[15px]' src={path} alt="" />
                        </a>
                        <a href="#" className="bg-[#181818] rounded-full p-5 hover:bg-gray-800 transition">
                            <img src={twitter} alt="" />
                        </a>
                    </div>

                </footer>
            </div>
        </div>
    );
}



export default Footer
