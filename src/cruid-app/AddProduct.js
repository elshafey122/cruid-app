import {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addproduct=()=>{

  let navigate=useNavigate();
  const [title,settitle]=useState('');
  const [price,setprice]=useState('');
  const [description , setdescription]=useState('');

    const handleprevent=(e)=>{
        e.preventDefault();

        // axios({     //يستخدم فى عمل تعديل على api سواء delete item او get item او put item او post item
        //   method: 'post',  // اضافة بيانات الى api
        //   url: "http://localhost:9000/products",
        //   data: {   //البيانات الى هضيف عليها
        //     title: title,
        //     price: price,
        //     description:description
        //   }
        // }).then((data)=>{
        //   navigate('/products')
        //   console.log(data);
        // });

        fetch("http://localhost:9000/products",{  //طريقة اخرى باستخدام ال fetch لعمل اضافة لبيانات
          method:"Post",
          headers:{
           'Content-Type': "Application/json",
          },
          body:JSON.stringify({
            title:title,
            price:price,
            description:description
          }),
        }).then((res)=>{
          res.json()}).then((data)=>{
          navigate('/products')
          console.log(data);
        })
    }
    return(
    <>
    <h1>add</h1>
    <form onSubmit={handleprevent}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">title</label>
        <input type="text" class="form-control" id="exampleInputEmail1" 
        aria-describedby="product title" placeholder="product title" onChange={(e)=>settitle(e.target.value)}/>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Price</label>
        <input type="number" class="form-control" id="exampleInputEmail1" 
        aria-describedby="price" placeholder="product price" onChange={(e)=>setprice(e.target.value)}/>
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">description</label>
        <input type="text" class="form-control" id="exampleInputEmail1" 
        aria-describedby="price" placeholder="description" onChange={(e)=>setdescription(e.target.value)}/>
      </div>

      <button type="submit" class="btn btn-primary">Add product </button>
  </form>
    </>
    )
}
export default Addproduct;


//npm install -g json-server من اى terminal
//npx json-server --watch db.json --port 9000       من عند ال terminal الخاص بملف db.json 