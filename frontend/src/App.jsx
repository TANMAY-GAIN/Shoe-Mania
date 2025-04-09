
import React, { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import Collection from './assets/pages/Collection'
import About from './assets/pages/About'
import Contect from './assets/pages/Contect'
import Cart from './assets/pages/Cart'
import Orders from './assets/pages/Orders'
import Navbar from './contents/Navbar'
import Footer from './contents/Footer'
import Searchbar from './contents/Searchbar'
import Product from './assets/pages/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from './assets/pages/PlaceOrder'
import Login from './assets/pages/Login' 
const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]'>
      <ToastContainer />
     <Navbar/>
     <Searchbar/>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/contect" element={<Contect/>}/>
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart/>}/> 
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App




