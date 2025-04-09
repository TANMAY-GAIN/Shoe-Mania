import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context.jsx/ShopContext";



  
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);
  const logOut = ()=>{ 
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
   
  }
  return (
    <div className="flex items-center justify-between py-5 font-medium  ">
     <Link to='/'><img src={assets.logo} className="lg:w-[200px] lg:h-[100px] sm:w-[100px] sm:h-[50px] w-[140px] h-[60px]"  alt="Logo" /></Link> 
      
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center">
          <p>HOME</p>
          <hr className="w-[42px] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <p>COLLECTION</p>
          <hr className="w-[85px] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <p>ABOUT</p>
          <hr className="w-[48px] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contect" className="flex flex-col items-center">
          <p>CONTACT</p>
          <hr className="w-[64px] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick ={()=>setShowSearch(true)}src={assets.search} className="w-6 cursor-pointer" alt="Search" />
        
        <div className="group relative">
      
        <img onClick={()=> token ? null : navigate('/login')} src={assets.contact} className="w-6 cursor-pointer" alt="Contact" />
         {/* Dropdown */}
          {token && <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col items-center gap-2 w-36 py-3 bg-slate-100 rounded">
              <p className="cursor-pointer text-gray-500 hover:text-black">My profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer text-gray-500 hover:text-black">Order</p>
              <p onClick={logOut} className="cursor-pointer text-gray-500 hover:text-black">Logout</p>
            </div>
          </div> } 
          
        </div>
        
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
            {
              getCartCount()
            }
          </p>
        </Link>
        
        <img
          onClick={() => setVisible(true )}
          src={assets.menu}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.back} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/collection'>COLLECTION</NavLink>
        <NavLink  onClick={()=>setVisible(false)}className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/contect'>CONTECT</NavLink>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;
