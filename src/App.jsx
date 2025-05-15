
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import { useCartContext } from './contexts/CartContext';
function ProductListing() {
const {productsData,addToCart}=useCartContext()

  return (
    <>
    <Header/>
    
    <main  className='container'>
    <hr/>
      <h2 className='text-center'>Products</h2>
      <div className='row text-center'>
      {productsData.map(product=>(<div className=' col-md-4 mb-4'  key={product.id}>
      <div className="card h-100 card-height " style={{width: "18rem"}}>
     <img className="card-img-top" src={product.imageURL}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">$ {product.price}</p>
        <button className='btn btn-danger mt-auto' onClick={()=>addToCart(product.id)}>{product.isInCart?"Remove from Cart": "Add to Cart"}</button>
      </div>
    </div>
      </div>))}
      </div>
    </main>
    </>
  )
}

export default ProductListing;
