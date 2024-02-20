import React from 'react';
import Hand_Icon from '../assets/hand_icon.png';
import Arrow_Icon from '../assets/arrow.png'
import Hero_Image from '../assets/Hero.png';

const Hero = () => {
    return (
        <div className='bg-gradient-to-t from-purple-50 to-purple-200 py-10'>
            <div className='container mx-auto flex px-20 '>
                <div className='flex-1 flex flex-col justify-center'>
                    <p className='lg:text-4xl md:text-2xl font-semibold mb-5'>NEW ARRAIVALS ONLY</p>
                    <div>
                        <div className='flex'>
                            <p className='lg:text-7xl md:text-4xl font-bold lg:leading-tight md:leading-tight'>New</p>
                            <img className='ml-3 lg:h-[80px] md:h-[40px]' src={Hand_Icon} alt="" srcset="" />
                        </div>
                        <p className='lg:text-7xl md:text-4xl font-bold leading-tight md:leading-tight'>Collections</p>
                        <p className='lg:text-7xl md:text-4xl font-bold leading-tight md:leading-tight mb-8'>For Everyone</p>
                        <div className='inline-block lg:px-8 lg:py-4 md:px-4 md:py-2 bg-red-500 rounded-full'>
                            <button className='flex items-center lg:text-xl text-white'>Latest Collection <img className='ml-4' src={Arrow_Icon} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex justify-end items-end lg:px-10'>
                    <img src={Hero_Image} alt="" className=' md:w-56' />
                </div>
            </div>
        </div>
    )
}

export default Hero
