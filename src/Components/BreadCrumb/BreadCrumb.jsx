import React from 'react'
import Arrow_Icon from '../assets/breadcrum_arrow.png'

const BreadCrumb = (props) => {
    const {product} = props;
  return (
    <div className='flex container mx-auto py-10 gap-2'>
      HOME <img src={Arrow_Icon} alt="" /> SHOP <img src={Arrow_Icon} alt="" /> {product.category} <img src={Arrow_Icon} alt="" /> {product.name} 
    </div>
  )
}

export default BreadCrumb
