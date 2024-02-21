import React from 'react'
import Footer_Logo from '../assets/logo_big.png'
import Instagram from '../assets/instagram_icon.png'
import Pintrest from '../assets/pintester_icon.png'
import Whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='pt-10 flex flex-col justify-center items-center'>
        <div className='flex items-center font-bold text-3xl mb-8'>
            <img src={Footer_Logo} alt="" />
            <p className='ml-3 text-gray-700'>SHOPPER</p>
        </div>
        <div className='flex gap-8 sm:gap-5 mb-10 '>
            <a href="#">Company</a>
            <a href="#">Product</a>
            <a href="#">Office</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className='flex gap-6 mb-10'>
            <img src={Instagram} alt="" />
            <img src={Pintrest} alt="" />
            <img src={Whatsapp} alt="" />
        </div>
        <div className='w-full'>
            <hr className='w-full bg-gray-400' />
            <p className='text-center py-6'>CopyRight @2023 - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
