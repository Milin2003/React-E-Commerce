import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState('shop');
  return (
    <div>
        <nav className='flex items-center justify-around py-6 shadow-lg'>
            <div className='flex items-center'>
                <img src={Logo} alt="" />
                <p className='text-3xl font-semibold ml-2'>SHOPPERS</p>
            </div>
            <div className='flex gap-10' >
                <a href="#" onClick={() => setMenu('shop')} className='text-lg font-semibold text-gray-700'><Link to="/">Shop</Link> {menu === 'shop' ? <hr className=' h-[3px] text-center bg-red-400'></hr> : <></>}</a>
                <a href="#" onClick={() => setMenu('mens')} className='text-lg font-semibold text-gray-700'><Link to="/mens">Men </Link>{menu === 'mens' ? <hr className=' h-[3px] text-center bg-red-400'></hr> : <></>}</a>
                <a href="#" onClick={() => setMenu('womens')} className='text-lg font-semibold text-gray-700'><Link to="/womens">Women</Link> {menu === 'womens' ? <hr className=' h-[3px] text-center bg-red-400'></hr> : <></>}</a>
                <a href="#" onClick={() => setMenu('kids')} className='text-lg font-semibold text-gray-700'><Link to="/kids">Kids</Link> {menu === 'kids' ? <hr className=' h-[3px] text-center bg-red-400'></hr>: <></>}</a>
            </div>
            <div className='flex relative'>
                <Link to="/login"><button className='py-2 px-8  border-2 border-gray-500 rounded-full mr-4 f'>Login</button></Link>
                <Link to="/cart"><img src={Cart_icon} alt="" className='z-50'/></Link>
                <div className='absolute w-[24px] h-[24px] bg-red-500 text-white -right-3 -z-1 rounded-full flex justify-center items-center -top-2 font-semibold'>1</div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar;
