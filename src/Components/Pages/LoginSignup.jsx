import React from 'react'

const LoginSignup = () => {
  return (
    <div className='bg-pink-200 py-10'>
      <div className='w-1/3 mx-auto  p-10 bg-white'>
        <p className='text-2xl font-semibold mb-4'>Sign Up</p>
        <div className='flex flex-col'>
          <input type="text" className='outline-none border border-gray-400 border-dashed p-3 mb-4' placeholder='Your Name' />
          <input type="text" className='outline-none border border-gray-400 border-dashed p-3 mb-4' placeholder='Email Address' />
          <input type="text" className='outline-none border border-gray-400 border-dashed p-3 mb-4' placeholder='Password' />
        </div>
        <button className='w-full bg-red-400 py-3 text-white font-semibold text-lg mb-4'>Countinue</button>
        <div className='flex'>
          <p className='ml-2 text-gray-700'>Already Have an Account? <span className='text-red-400 font-semibold'>Login Here</span></p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup
