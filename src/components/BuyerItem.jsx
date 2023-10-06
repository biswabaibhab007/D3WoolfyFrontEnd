import React from 'react'

import {AiOutlineHeart} from "react-icons/ai"

const BuyerItem = () => {
  return (
    <div className='BuyerItem mt-5 w-60 p-1 shadow-lg text-center rounded-xl border-2'>
        
        <div className='bg-gray-100 py-4 rounded-lg'>
          <div className='product-card-top flex justify-between'>
            <div className='product-card-top-left'>
              <p className='font-Raleway text-red-900 text-xs py-1 bg-red-400 w-16 ml-3 rounded-xl '>10% Off</p>
            </div>
            <div className='product-card-top-right mr-4'>
              <AiOutlineHeart size={25} color='red' background="red" className='hover:fill-red-600'/>
            </div>
          </div>
          <div className='product-card-bottom'>
            <img src="/demo_img2.png" alt="" />
          </div>
        </div>

        <h3 className='text-xl font-Raleway font-semibold m-2'>Cashmere wool</h3>
          <span className='font-Croissant font-bold text-xl text-red-600 '>$34.45</span>
        <p className='text-xs text-slate-600 m-1 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Easy party asa aska dolor</p>
        <div className='my-6'>
          <a href="#" className='font-YoungSerif bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 duration-300'>Buy now</a>
        </div>
    </div>
  )
}

export default BuyerItem