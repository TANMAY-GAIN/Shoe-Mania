import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context.jsx/ShopContext';
import { assets, product } from '../assets';
import RelatedProduct from '../../contents/RelatedProduct';

const Product = () => {
  const{productId} = useParams();
  const {product , currency , addToCart} = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] =useState('');
  const [size , setSize] = useState('');
  const fetchProductData = async()=>{
    product.map((item)=>{
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId , product])

  return productData ?(
    <div className='border-t -2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product Data*/}
      <div className='flex  flex-col dm:flex-row'>


      {/* product Images*/}
        <div className='flex-1 flex  flex-col-reverse gap-3  sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto  overflow-y-scroll justift-between sm:justify-normal sm:w-[18.7%] w-full' style={{gap : "10px"}}>
            {
              productData.image.map((item , index)=>(
                <img onClick={()=>setImage(item)}src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 p-4 bg-gray-300 flex-shrink-0 cursor-pointer'alt="" />
              ))
            }
          </div>
          <div className='lg:w-[400px]'>
            <img className='p-10 ml-3'  src={image} alt="" />
          </div>

        {/* ------------product Info--------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2x1 mt-20'>{productData.name}</h1>
          <div className='flex items-center mt-3 gap-1'>
            <img className='w-3.5'src={assets.star} alt="" />
            <img className='w-3.5' src={assets.star} alt="" />
            <img className='w-3.5' src={assets.star} alt="" />
            <img className='w-3.5' src={assets.star} alt="" />
            <img className='w-3.5' src={assets.halfStar} alt="" />
            <p className='ppl-2'>(145)</p>
          </div>
          <p className='mt-5 text-[x-large] font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 '>
              {
                productData.sizes.map((item , index)=>(
                  <button onClick={()=>setSize(item)}className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}key={index}>{item}</button>
                ))
              }
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white p-8 py-3  text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p className='text'>100% Original Product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy retuen and exchange policy within 7 day's</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  {/*------------------- Description And Review Section-------------- */}
    <div className='mt-20'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
      </div>
      <div className='flex flex-col ga--4 border px-4 py-6 text-sm text-gray-500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ipsum a sapiente harum, blanditiis, nisi, architecto fugit animi officia dignissimos assumenda consequatur odio odit sed cum. Eius, delectus neque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis exercitationem nulla sit, ad, sed sapiente ea magni optio voluptatibus velit cumque possimus itaque architecto dicta! Vitae recusandae maiores repellat.</p>
      </div>
    </div>
     {/*------------------- Display Related Product-------------- */}  
     <RelatedProduct catagory={productData.catagory} subcatagory={productData.subcatagory}/>
  </div>
  ) : <div className='opacity-0'></div>
}

export default Product