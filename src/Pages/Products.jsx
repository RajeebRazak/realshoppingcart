import React,{useState} from 'react';
import Data from '../../Data.json';
import Product from '../Components/Product'
 
function Products() {
 const [product , setProduct] = useState(Data.products)

  return (
    <div className='container mt-5'>
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {product.map((ele,index)=> {
          return(
            <div key={index}>
            <Product 
            product={ele}
            />
            </div>

          );
        })}
      </div>
    </div>
  )
}

export default Products;