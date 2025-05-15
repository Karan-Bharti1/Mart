import { Link } from "react-router-dom"
import cartStatus from "./CartStatus"

const Header=()=>{
    return(<>
<header >

    <div className="container ">
        <h2 className="text-danger  mt-3 brand"> Mart </h2>
    <ul className="nav justify-content-end">
  <li className="nav-item">
  <Link className="nav-link" to={"/"}>Products</Link>
  </li>
  <li className="nav-item">
 
    <Link className="nav-link" to={"/cart"}>Cart ({cartStatus()})</Link>
  </li>
 
</ul>
    </div>
</header>
    </>)
}
export default Header