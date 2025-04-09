import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';


const List = ({token}) => {

  const [list , setList] = useState([]);

  const fetchList =async()=>{
    try {
      const response = await axios.get(backendUrl + '/api/product/list',{headers:{token}});
      if (setList(response.data.products)) {
        setList(response.data.products);
        

      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async(id)=>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
      
      console.log(id)
      if (response.data.sucess) {
        toast.success(response.data.message)
        await fetchList();
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/*-----------------List Table Title------------------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-geay-100 text-sm'>
          <b >Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
         {/*-----------------List Table Title------------------- */}
         {
          list.map((item,index)=>(
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12'src={item.image[0]} alt="" />
              <p>{item.name}</p> 
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <img className='w-4 ml-10 h-auto sm:w-4 md:w-5 lg:w-4 ' onClick={()=>removeProduct(item._id)} src={assets.dusbin} alt="" />
              </div>
          ))
         }
      </div>
    </>
  )
}

export default List