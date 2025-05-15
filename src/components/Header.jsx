import { Link } from "react-router-dom"

const Header=()=>{
    return(<>
<header >

    <div className="container ">
        <h2 className="text-danger  mt-3 brand"> Mart </h2>
    <ul className="nav d-flex justify-content-end">
  <li className="nav-item">
  <Link className="nav-link"to={"/products"}>Products</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link"to={"/cart"}>Cart</Link>
  </li>
 
</ul>
    </div>
</header>
    </>)
}
export default Header