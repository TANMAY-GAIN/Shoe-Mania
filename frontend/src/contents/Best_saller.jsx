import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context.jsx/ShopContext';
import Product_items from './Product_items';
import Title from './Title';
const Best_saller = () => {
    const {product} = useContext(ShopContext);
    const [bestSaller , setBestSaller] = useState([]);

    useEffect(()=>{
        const bestproduct = product.filter((item)=>(item.bestsaller));
        setBestSaller(bestproduct.slice(0,5))
    },[product])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={`BEST`} text2={`SELLER`}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum veniam amet enim, similique nemo voluptate repellat dolor laborum nostrum quibusdam unde, cumque debitis consectetur quas cupiditate atque mollitia temporibus facilis!</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
                bestSaller.map((item,index)=>(
                    <Product_items  key={index} _id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Best_saller