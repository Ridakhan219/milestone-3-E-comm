import Link from 'next/link';
import React from 'react';

const Rooms = () => {
  return (
    <div className='bg-[#FCF8F3] p-52 flex items-center justify-between'>
      {/* Left Side - Text Content */}
      <div className='w-1/2'>
        <h2 className='font-extrabold text-2xl'>
          50+ Beautiful rooms inspiration
        </h2>
        <h6>
          Our designer already made a lot of beautiful
          <br />
          prototypes of rooms that inspire you
        </h6>
        <br />
        <Link href="/buyNow" ><button className='bg-[#B88E2F] text-white px-8 py-3'>
          Explore More
        </button></Link>
      </div>

      {/* Right Side - Image */}
      <div className='w-1/2'>
        <img 
           src='https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          
          alt='Room Inspiration' 
          className='w-full h-auto object-cover rounded-lg' 
        />
      </div>
    </div>
  );
};

export default Rooms;


