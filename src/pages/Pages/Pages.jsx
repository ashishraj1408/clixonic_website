import React from 'react'
import OurTeam from '../../components/OurTeam/OurTeam'
import { ArrowRight } from 'lucide-react';
import BackgroundImg from "../../assets/hero/main-background.png";
function Pages() {
    return (
        <div className='w-full bg-[#0b0b0b] '>
            <div
                className="w-full max-w-7xl py-4 flex items-center justify-center 
                     bg-center bg-cover rounded-xl mx-auto mt-10 overflow-hidden"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                }}
            >
                <div className=" backdrop-blur-xl px-20 py-10 rounded-xl text-center">
                    <h1 className="text-4xl font-bold">Page </h1>
                    <p className="mt-2 flex gap-4 items-center justify-center text-gray-200">Home <ArrowRight size={16} />  Page </p>
                </div>
            </div>
            <OurTeam />
        </div>
    )
}

export default Pages