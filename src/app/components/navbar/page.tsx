import Link from "next/link";


import React from 'react'

const Navbar = () => {
  return (
    <div>
      


    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      <h1 className="font-extrabold text-3xl">Furniro</h1>

      <div className=" md:flex space-x-6 text-gray-800 font-semibold gap-7">

      <Link href="/buyNow" className="cart-icon text-2xl text-gray-800 no-underline relative">
  &#x1F6D2; {/* Unicode for shopping cart */}
  <span className="cart-badge absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full py-1 px-2">3</span>
</Link>


        <Link href={"/"} className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link href={"/shop"} className="hover:text-gray-500 transition">
          Shop
        </Link>
        <Link href={"/blog"} className="hover:text-gray-500 transition">
          Blog
        </Link>
        <Link href={"/contact"} className="hover:text-gray-500 transition">
          Contact
        </Link>
      </div>
    </nav>
 
</div>
  )
}

export default Navbar