import React from 'react';
import Hand_Icon from '../assets/hand_icon.png';
import Arrow_Icon from '../assets/arrow.png'
import Hero_Image from '../assets/hero_image.png';

const Hero = () => {
    return (
        <div className='bg-gradient-to-t from-purple-50 to-purple-200'>
            <div className='container mx-auto flex  '>
                <div className='flex-1 flex flex-col justify-center'>
                    <p className='text-4xl font-semibold mb-5'>NEW ARRAIVALS ONLY</p>
                    <div>
                        <div className='flex'>
                            <p className='text-7xl font-bold leading-tight'>New</p>
                            <img className='ml-3 h-[80px]' src={Hand_Icon} alt="" srcset="" />
                        </div>
                        <p className='text-7xl font-bold leading-tight'>Collections</p>
                        <p className='text-7xl font-bold leading-tight mb-8'>For Everyone</p>
                        <div className='inline-block px-8 py-4 bg-red-500 rounded-full'>
                            <button className='flex items-center text-xl text-white'>Latest Collection <img className='ml-4' src={Arrow_Icon} alt="" /></button>
                            
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={Hero_Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
