import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ProductDisplay = (props) => {
  const {products, setProducts} = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <h1>All Products:</h1>
      {products.map((product, index) => {
        return (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}> {product.title}</Link>
            {/* <hr /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ProductDisplay;