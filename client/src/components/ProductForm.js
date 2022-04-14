import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ProductForm= () => {
    const [ title, setTitle ] = useState("");
    const [price, setPrice ] = useState("");
    const [description, setDescription ] = useState("");

    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,   
            price,
            description
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;