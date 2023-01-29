import './App.css';
import Navbar from './cruid-app/Navbar/Navbar';
import Sidebar from './cruid-app/Sidebar/Sidebar'
import {Routes,Route, Outlet} from 'react-router-dom';
import Home from './cruid-app/Home';
import Addproduct from './cruid-app/AddProduct';
import Product from './cruid-app/Product';
import Productdetails from './cruid-app/Productdetails';
import Edit from './cruid-app/Edit';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/products'       //using nested routing  نكتب outlet بنفس الصيغة لتشير الى العنصر الاساسى وهو الاب وبداخلة العنصر الاب ويكون اللنك فاضى او اى طفل بداخلة بدون كتابة اسم الاب فى بداية كل لنك 
            element={
              <>
                <Outlet/>
              </>
            }>
              <Route path='' element={<Product/>}/>
              <Route path='add' element={<Addproduct/>}/>
            <Route path=":productID" element={<Productdetails/>}/> 
              <Route path='edit/:productID' element={<Edit/>}/>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



//ecommerce website
// import AppNavbar from './basic_cart_app/Navbar'
// import { Route,Routes } from 'react-router-dom';
// import Products from './basic_cart_app/Products';
// import Cart from './basic_cart_app/Cart'

// function App() {
//   return (
//     <div className="App">
//       <AppNavbar/>
//       <Routes>
//         <Route path="/products" element={<Products/>}/>
//         <Route path="/cart" element={<Cart/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;



// import Navbar from './e_commerce_website/Navbar'
// import Slider from './e_commerce_website/Slider'
// import Productslist from './e_commerce_website/Productslist'
// import { Route,Routes } from 'react-router-dom';
// import About from './e_commerce_website/About';
// import ProductDetails from './e_commerce_website/ProductDetails';
// function App() {
  
//   return (
//     <div className="App">
//       <Navbar/>
//       <Routes>

//         <Route path='/' 
//         element={
//           <>
//           <Slider/>
//           <Productslist/>
//           </>}
//           ></Route>
          
//         <Route path='about' element={<About/>}></Route>
//         <Route path='product/:productid' element={<ProductDetails/>}></Route>

//       </Routes>
//     </div>
//   );
// }

// export default App;