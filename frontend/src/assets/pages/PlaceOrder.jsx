import React, { useContext, useState } from 'react'
import Title from '../../contents/Title'
import CartTotal from '../../contents/cartTotal'
import { assets, product } from '../assets'
import { ShopContext } from '../../context.jsx/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const method = 'COD';
  const {navigate , backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, product} = useContext(ShopContext);
  const [fromData,setFromData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    phone:''
  })

  const onChangeHandeler = (event)=>{
    const name=event.target.name
    const value=event.target.value

    setFromData(data =>({...data,[name]:value}))
  }

  const onSubmitHandeler =async (event)=>{
    event.preventDefault()
    try {
      
      let orderItems = []
      for(const items in cartItems){
          for(const item in cartItems[items]){
            if (cartItems[items][item] > 0) {
              const itemInfo = structuredClone(product.find(product =>product._id === items))
              if (itemInfo) {
                itemInfo.size = item
                itemInfo.quantity = cartItems[items][item]
                orderItems.push(itemInfo)
              }
            }
          }
      }
      let orderData = {
        address: fromData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        payment_Method: method // <-- Change this to `paymentMethod`
      };
     
     

    const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
    if (response.data.sucess) {
      setCartItems({})
      navigate('/orders')
    }else{
      toast.error(response.data.message)
    }
    } catch (error) {
      
    }
  }
  
  return (
    <form onSubmit={onSubmitHandeler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
     {/*---------------------Left Side----------------- */}
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-5'>
          <Title text1={'DELIVERY'}text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandeler} name ='firstName' value={fromData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='First name'/>
          <input required onChange={onChangeHandeler} name ='lastName' value={fromData.lastName}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='Last name'/>
        </div>
        <input required onChange={onChangeHandeler} name ='email' value={fromData.email}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='email' placeholder='Email address'/>
        <input required onChange={onChangeHandeler} name ='street' value={fromData.street}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='Street'/>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandeler} name ='city' value={fromData.city}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='City'/>
          <input required onChange={onChangeHandeler} name ='state' value={fromData.state}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandeler} name ='pincode' value={fromData.pincode}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='number' placeholder='Pincode'/>
          <input required onChange={onChangeHandeler} name ='country' value={fromData.country}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='text' placeholder='Contury'/>
        </div>
        <input required onChange={onChangeHandeler} name ='phone' value={fromData.phone}className='border border-gray-300 rounded py-1.5 px-3.5 w-full'type='number' placeholder='Phone'/>
      </div>
      {/*------------------------Right Side---------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/*------------------------Payment Method Selection---------------- */}
          <div  className='flex flex-col lg:flex-row gap-3'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= 'min-w-3.5 h-3.5 border rounded-full  bg-green-400' ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= 'min-w-3.5 h-3.5 border rounded-full  ' ></p>
              <p className='text-red-500 text-sm font-medium mx-4'>COMING SOON.....</p>
            </div>
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder