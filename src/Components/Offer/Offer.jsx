import React from 'react'
import Exclusive from '../assets/exclusive_image.png'

const Offer = () => {
    return (
        <div className='flex container mx-auto justify-around items-center bg-gradient-to-t from-purple-50 to-purple-200 py-10'>
            <div className=''>
                <p className='text-6xl leading-tight font-semibold'>Exclusive</p>
                <p className='text-6xl leading-tight font-semibold'>Offer For You</p>
                <p className='text-xl font-semibold my-6'>ONLY ON BEST SALLERS PRODUCT</p>
                <button className='px-12 py-4 bg-red-500 rounded-full text-white'>Check Now</button>
            </div>
            <div>
                <img src={Exclusive} className='w-[75%]' alt="" />
            </div>

        </div>
    )
}

export default Offer
