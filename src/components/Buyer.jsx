import React from 'react'

import BuyerItem from './BuyerItem.jsx'

const Buyer = () => {

  return (
    <>
    <div className='Buyer layout '> 
      {/* <div className='search-bar flex justify-center mb-6'>
        <div className='w-96 bg-gray-300 rounded-3xl'>
          <input 
            className="p-3 m-4 w-72 rounded-xl"
            type="text" 
            placeholder='search here 🌝'
            // onChange={onType}
          />
        </div>
      </div> */}


      
      <h1 className='mb-4 font-YoungSerif text-orange-600 text-5xl text-center'>Products</h1>  
      <div className='buyer-right layout Buyer px-5 flex gap-5 flex-wrap'>
        <BuyerItem />
        <BuyerItem />
        <BuyerItem />
        <BuyerItem />

        <BuyerItem />
        <BuyerItem />
        <BuyerItem />
        <BuyerItem />

        <BuyerItem />
        <BuyerItem />
        <BuyerItem />
        <BuyerItem />

      </div>

    </div>
    </>
  )
}

export default Buyer