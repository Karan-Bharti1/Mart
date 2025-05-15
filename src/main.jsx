import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductListing from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CartContextProvider from './contexts/CartContext.jsx'
import Cart from './pages/Cart.jsx'
const Router=createBrowserRouter([{
  path:"/",
  element:<ProductListing/>
},{
  path:"/cart",
  element:<Cart/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartContextProvider>
    <RouterProvider router={Router}/>
    </CartContextProvider>
  </StrictMode>,
)
