import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const nav = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => {
            console.log(res.data.toString());
            setProduct(res.data);
        })
        .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
          .then((res) => {
            console.log(res.data);
            nav("/product");
          })
          .catch((err) => console.error(err));
      };
    
    return (
        <div>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
            <button type="button" class="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}
export default Detail;