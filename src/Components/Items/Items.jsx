import React from 'react'
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className=' scale-1 hover:scale-105 transition-all shadow-xl p-7 overflow-hidden sm:my-5'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" className=' w-full' /></Link>
      <p className='my-3'>{props.name}</p>
      <div className='flex gap-2'>
        <p className='font-semibold'>${props.new_price}</p>
        <p className='line-through text-gray-500'>${props.old_price}</p>
      </div>
    </div>
  )
}

export default Items;
