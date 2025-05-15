import { Children, createContext } from "react";

const CartContext=createContext()

const CartContextProvider=({children})=>{
    return(<CartContext.Provider>
        {Children}
    </CartContext.Provider>)
}