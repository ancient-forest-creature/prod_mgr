import React, { useState } from 'react'
import ProductForm from "../components/ProductForm";
import ProductDisplay from '../components/ProductDisplay';

const Home = (props) => {
    
    const [products, setProducts] = useState([]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
          .then((res) => {
            console.log(res);
            const filterProducts = products.filter((product, index) => {
              return product._id !== id;
            });
            console.log(filterProducts);
            setProducts(filterProducts);
          })
          .catch((err) => console.error(err));
      };
    
    return (
        <div>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductDisplay products={products} setProducts={setProducts} />
        </div>
    )
}
export default Home;