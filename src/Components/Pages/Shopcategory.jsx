import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import Items from '../Items/Items'

const Shopcategory = (props) => {
  const {All_Product} = useContext(ShopContext)
  return (
    <div className='container mx-auto px-10 xl:px-0'>
      <img src={props.banner} alt="" />
     
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10'>
        {All_Product.map((item,index)=>{
            if (props.category === item.category) {
             return <Items  key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price} /> 
            }
            else{
              return null;
            }
        })}
      </div>
    </div>
  )
}

export default Shopcategory
