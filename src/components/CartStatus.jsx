import { useCartContext } from "../contexts/CartContext"

const cartStatus=()=>{
    const {productsData}=useCartContext()
   const itemsInCart= productsData.filter(product=>product.isInCart)
   console.log(itemsInCart.length)
    return itemsInCart.length
}
export default cartStatus