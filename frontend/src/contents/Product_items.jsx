import React, { useContext } from 'react'
import { ShopContext } from '../context.jsx/ShopContext'
import { Link } from 'react-router-dom';


const Product_items = ({_id,image,name,price}) => {

    const {currency} = useContext(ShopContext); 
  
  return (
    <Link className='text-gray-700 cursor-pointer'to={`/product/${_id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-125 transaction ease-in-out p-3 border border-gray-400'src={image[0]} alt="khkhkhk" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Product_items