import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-gradient-to-t from-purple-50 to-purple-200 py-16 container mx-auto flex justify-center flex-col items-center'>
        <p className='text-4xl font-semibold text-gray-800'>Get Exclusive Offer on Your Email</p>
        <p className='text-lg mt-6 mb-6 text-gray-600'>Subscribe to our Newsletter and Stay Updated</p>
        <div className='w-[45%] flex border border-gray-400 bg-transparent rounded-full'>
            <input className='outline-none bg-transparent w-full px-6' type="email" placeholder='Enter Your Email' />
            <button className='bg-black text-white py-4 px-10 rounded-full'>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
