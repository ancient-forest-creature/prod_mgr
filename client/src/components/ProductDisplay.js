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

  const deleteProduct= (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then((res) => {
      console.log(res.data);
      const filterProd = products.filter((product, index) => {
        return product._id !== id;
      });
      console.log(filterProd);
      setProducts(filterProd);
    })
    .catch((err) => console.error(err));
};

  return (
    <div class="container">
      <h1>All Products:</h1>
      <div >
        {products.map((product, index) => {
          return (
            <div class="row d-flex mx-auto justify-content-center mt-3" key={product._id}>
              <div class="col-1">
                <Link to={`/product/${product._id}`}> {product.title}</Link>
              </div>
              <div class="col-1">
                <button type="button" class="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
              </div>
              {/* <hr /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;