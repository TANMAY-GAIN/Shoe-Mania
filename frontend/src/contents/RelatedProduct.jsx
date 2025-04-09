import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context.jsx/ShopContext'
import Title from './Title';
import Product_items from './Product_items';

const RelatedProduct = ({catagory , subcatagory}) => {
    const{product} = useContext(ShopContext);
    const [related , setRelated] = useState([]);
    useEffect(()=>{
        if(product.length > 0){
            let productCopy = product.slice();
            productCopy = productCopy.filter((item)=>catagory ===item.catagory);
            productCopy = productCopy.filter((item)=>subcatagory === item.subcatagory);

            setRelated(productCopy.slice(0,5));
        }
    },[product])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCT'}/>
        </div>
        <div className='grid grd-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
            {
                related.map((item , index)=>(
                    <Product_items key={index} _id={item._id} name={item.name} price={item.price} image={item.image}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProduct