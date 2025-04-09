import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context.jsx/ShopContext'
import { assets } from '../assets';
import Title from '../../contents/Title'
import Product_items from '../../contents/Product_items'


const Collection = () => {
  const { product, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]); // Renamed from 'catagory'
  const [subCategory, setSubCategory] = useState([]); // Renamed from 'subCatagory'
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value));
    } else {
      setSubCategory(prev => [...prev, value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = product.slice();

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category)); // Fixed 'catagory' to 'category'
    }

    // Subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory)); // Fixed 'subCatagory' to 'subCategory'
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, product]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.back} className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`} alt="" />

        {/* Category Option */}
        <div className={`border border-gray-600 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Subcategory Option */}
        <div className={`border border-gray-600 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Causal-Shoe'} onChange={toggleSubCategory} /> Causal-Shoe
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Sneakers-Shoe'} onChange={toggleSubCategory} /> Sneakers-Shoe
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Sports-Shoe'} onChange={toggleSubCategory} /> Sports-Shoe
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* No products available message */}
        {filterProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No products available based on your filters.</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <Product_items key={index} _id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Collection;
