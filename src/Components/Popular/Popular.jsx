import React from 'react';
import Data_Product from '../assets/data'
import Items from '../Items/Items';

const Popular = () => {
  return (
    <div className='my-10 container mx-auto px-10 xl:px-0 sm:px-0'>
      <p className='text-center text-3xl md:text-2xl font-bold'>POPULAR IN WOMEN</p>
      <hr className='w-40 mx-auto h-1 border-none bg-black mt-2' />
      <div className='xl:flex xl:gap-6 mt-12  md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-10'>
        {Data_Product.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular;
