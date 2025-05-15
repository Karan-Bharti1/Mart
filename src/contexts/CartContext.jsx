import { Children, createContext, useState } from "react";
import { products } from "../data/Products";

const CartContext=createContext()

export const CartContextProvider=({children})=>{
    const [productsData,setProductsData]=useState(products)
    return(<CartContext.Provider value={{productsData}}>
        {children}
    </CartContext.Provider>)
}
export default CartContextProvider;