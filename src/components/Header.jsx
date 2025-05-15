const Header=()=>{
    return(<>
<header >

    <div className="container ">
        <h2 className="text-danger mt-3 brand"> Mart </h2>
    <ul className="nav d-flex justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
    </div>
</header>
    </>)
}
export default Header