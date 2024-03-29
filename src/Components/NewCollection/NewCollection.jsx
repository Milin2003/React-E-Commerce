import React from 'react';
import New_Collection from '../assets/new_collections'
import Items from '../Items/Items';

const NewCollection = () => {
  return (
    <div className='py-10 px-10'>
      <p className='text-center text-3xl font-bold'>NEW COLLECTION</p>
      <hr className='w-40 mx-auto h-1 border-none bg-black mt-2' />
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 container mx-auto gap-5 my-10'>
        {New_Collection.map((item, index) => {
          return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}

      </div>

    </div>
  )
}

export default NewCollection
