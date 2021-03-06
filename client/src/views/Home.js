import React, { useState } from 'react'
import ProductForm from "../components/ProductForm";
import ProductDisplay from '../components/ProductDisplay';

const Home = (props) => {
    
    const [products, setProducts] = useState([]);

    return (
        <div>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductDisplay products={products} setProducts={setProducts} />
        </div>
    )
}
export default Home;