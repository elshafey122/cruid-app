import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails=()=>{
    let {productID}=useParams();
    let [product,setproduct]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${productID}`).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setproduct(data)
        })
    },[])
    return(
    <>
     <h1>product_name</h1>
     <p className="a mb-5 p-1 " > {product.title}</p>

     <h1>product_description</h1>
       <p className="a mt-90 p-1">{product.description}</p>

     <h1>product_price</h1>
     <p className="a mt-90 p-1">{product.price}</p>

    </>
    )
}
export default Productdetails;