import React from 'react';

const Processordashboard = () => {
  return (
    <>
    <div className='bg-blue-200'>

    <div className='heading'>
      <h1 className='pt-10 font-YoungSerif text-5xl text-center'>Welcome back NAME, 👋 </h1>
    </div>
    <div className='details flex justify-around mt-10 bg-white mx-32 py-20 rounded shadow-2xl'>
      <div className='details-text mx-10 text-2xl'>
        <p>Biswa Baibhab Subudhi</p>
        <p>Location</p>
        <p>contact no.</p>
        <p>address</p>
      </div>
      <div className='image border-2 border-black rounded-full'>
        <img width='200rem' className=" rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1696635039~exp=1696635639~hmac=012ab5bfd29ab9e3ddbf1b9958dbd8f245c7a91d9690eb6fae3ead7ef0c637c0" alt="" />
      </div>
    </div>

    {/* orders */}
    <div className='bg-white  mt-10  mx-32 py-20 rounded shadow-2xl'>
      
    </div>

    </div>

    </>
  );
}

export default Processordashboard;
