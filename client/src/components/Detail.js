import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => {
            console.log(res.data.toString());
            setProduct(res.data);
        })
        .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
        </div>
    )
}
export default Detail;