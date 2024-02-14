import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Product = () => {

  const {All_Product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = All_Product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
