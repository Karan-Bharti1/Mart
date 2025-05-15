import { Children, createContext, useContext, useState } from "react";
import { products } from "../data/Products";

const CartContext=createContext()
export const useCartContext=()=>useContext(CartContext)
export const CartContextProvider=({children})=>{
    const [productsData,setProductsData]=useState(products)
   
    return(<CartContext.Provider value={{productsData}}>
        {children}
    </CartContext.Provider>)
}
export default CartContextProvider;