import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context.jsx/ShopContext';
import Title from './Title';
import Product_items from './Product_items';


const LatestCollection = () => {
  const { product } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    if (product) {
      setLatestProduct(product.slice(0, 10));
    }
  }, [product]);
  useEffect(() => {
    console.log("Product data:", product);
  }, [product]);
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illo pariatur maiores cumque odio, blanditiis ab saepe excepturi fuga ea exercitationem laudantium praesentium, voluptatem, reprehenderit sapiente qui adipisci facilis. Maxime.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProduct?.length > 0 ? ( latestProduct.map((item, index) => (
            <Product_items key={index} _id={item._id} image={item.image} name={item.name} price={item.price} />
        )) 
        ) : (
          <p>No products available</p>
        ) }
      </div>
    </div> 
    
  );
};

export default LatestCollection;
