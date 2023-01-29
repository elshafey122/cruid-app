import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import './Product.css'
import Swal from 'sweetalert2'
const Product=()=>{
    
   const [products,setproduct]=useState([]);
   useEffect(()=>{
    getproducts();
   },[]);



   const getproducts=()=>{
    fetch("http://localhost:9000/products").then((res)=>res.json()).then((data)=>{
        setproduct(data);
      });
   }

   const deleteproduct=(product)=>
   {
    Swal.fire({       //used to make alart for action 
        title: `are you sure you want to delete ${product.title} ?`,  //title of message
        showCancelButton: true                //show cansel button
          }).then((data)=>{     //has isconfirmed if ok then true else false
            if(data.isConfirmed===true)
            {
               fetch(`http://localhost:9000/products/${product.id}`,{   //
               method:"DELETE"
            }).then((res)=>res.json().then((data)=>{
                getproducts();
            }))
            }
        })
   }


    return(   
    <>
    <h1>products page</h1>
    <Link to='/products/add' class="btn btn-success mt-3">add new product</Link>
    <table class="table table-striped product-table mt-5">
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <td>description</td>
                <th>price</th>
                <th>operations</th>
            </tr>
        </thead>

        <tbody>
            {products.map((product)=>{
                return(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description.slice(0,40)}...</td>
                    <td>{product.price}</td>
                    <td>
                        <button class="btn btn-danger btn-small" onClick={()=>{deleteproduct(product)}}>Delete</button>
                        <Link to={`/products/${product.id}`} class="btn btn-info btn-small ">view</Link>
                        <Link to={`/products/edit/${product.id}`} class="btn btn-primary btn-small">Edit</Link>
                    </td>
                    </tr>
            )})}
            
        </tbody>
      </table>
    </>
    )
}
export default Product;