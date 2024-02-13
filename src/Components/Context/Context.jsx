import React from 'react';
import { createContext } from 'react';
import All_Product from '../assets/all_product';


export const ShopContext = createContext(null);

const Context = (props) => {

    const contextValue = {All_Product}
  return (
    <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default Context;
