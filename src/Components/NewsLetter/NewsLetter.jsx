import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-gradient-to-t from-purple-50 to-purple-200 py-16 container mx-auto flex justify-center flex-col items-center px-10'>
        <p className='lg:text-4xl sm:text-3xl font-semibold text-gray-800'>Get Exclusive Offer on Your Email</p>
        <p className='lg:text-lg sm:text-sm mt-6 mb-6 text-gray-600'>Subscribe to our Newsletter and Stay Updated</p>
        <div className='lg:w-[45%] sm:w-full flex border border-dashed border-gray-400 bg-transparent rounded-full'>
            <input className='outline-none bg-transparent w-full px-6' type="email" placeholder='Enter Your Email' />
            <button className='bg-black text-white lg:py-4 sm:py-2 sm:px-4 lg:px-10 rounded-full'>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
