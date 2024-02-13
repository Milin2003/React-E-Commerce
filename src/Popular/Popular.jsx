import React from 'react';
import Data_Product from '../Components/assets/data';
import Items from '../Components/Items/Items';

const Popular = () => {
  return (
    <div>
      <p>Popular In Women</p>
      <hr />
      <div>
        {Data_Product.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
