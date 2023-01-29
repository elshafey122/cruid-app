import {useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Edit=()=>{

  let {productID}=useParams();
  let navigate=useNavigate();
  const [title,settitle]=useState('');
  const [price,setprice]=useState('');
  const [description , setdescription]=useState('');

  const [product,setproduct]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:9000/products/${productID}`).then((res)=>res.json()).then((data)=>{
        setproduct(data)
    })
},[])
    const handleprevent=(e)=>{
        e.preventDefault();

        axios({
          method: 'put',
          url: `http://localhost:9000/products/${productID}`,
          data: {
            title: title,
            price: price,
            description:description
          }
        }).then((data)=>{
          navigate('/products')
        });
    }

    const back=()=>
    {
        navigate('/products');
    }
    return(
    <>
    <h1>Edit</h1>
    <form onSubmit={handleprevent}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">title</label>
        <input type="text" class="form-control" id="exampleInputEmail1" 
        aria-describedby="title" placeholder={product.title}  onChange={(e)=>{
            settitle(e.target.value); 
            }}/>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" 
        aria-describedby="price" placeholder={product.price} onChange={(e)=>setprice(e.target.value)}/>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">description</label>
        <input type="text" class="form-control" id="exampleInputEmail1" 
        aria-describedby="description" placeholder={product.description} onChange={(e)=>setdescription(e.target.value)}/>
      </div>

      <button type="submit" class="btn btn-primary ">edit product </button>
      <button type="submit" class="btn btn-primary " onClick={()=>back()}>cancel </button>
  </form>
    </>
    )
}
export default Edit;