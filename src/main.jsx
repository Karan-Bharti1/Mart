import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductListing from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
const Router=createBrowserRouter([{
  path:"/",
  element:<ProductListing/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
