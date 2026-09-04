import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState, useContext } from 'react';
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Tittle text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto teext-xs sm:text-sm md:text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sint nam debitis necessitatibus animi soluta. Qui adipisci inventore expedita reiciendis esse dicta? Numquam, dolores aut?</p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((items, idx)=>(
                    <ProductItem key={idx} id={items._id} image={items.image} name={items.name} price={items.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
