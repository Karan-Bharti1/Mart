import { Children, createContext, useContext, useState } from "react";
import { products } from "../data/Products";

const CartContext=createContext()
export const useCartContext=()=>useContext(CartContext)
export const CartContextProvider=({children})=>{
    const [productsData,setProductsData]=useState(products)
   const addToCart=(id)=>{
    setProductsData(prev=>prev.map(product=>product.id===id?{...product,isInCart:!product.isInCart}:product))
   }
    return(<CartContext.Provider value={{productsData,addToCart}}>
        {children}
    </CartContext.Provider>)
}
export default CartContextProvider;