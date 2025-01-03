import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
    return (
        <>
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
       
            <div>
              
            <img
                    src="https://plus.unsplash.com/premium_photo-1670274229211-a46356f9d196?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="contact"
                    className="
                    w-[1440]
                    h-[316]"
                ></img>
                  </div>
            <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
                <div className="flex flex-col gap-8 lg:w-1/2">
                    {[
                        {
                            img: "/images/location.svg",
                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                            img: "/images/call.svg",
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            img: "/images/clock.svg",
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            
                            <div>
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{info.title}</h2>
                                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[
                        { label: "Your Name", placeholder: "Enter your name" },
                        { label: "Email Address", placeholder: "Enter your email" },
                        { label: "Subject", placeholder: "Enter subject (optional)" },
                        { label: "Message", placeholder: "Enter your message" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                            />
                        </div>
                    ))}
                    <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
                        Submit
                    </button>
                </div>
                </div>
            
         

  

           
               
            </>
    );
};

export default ContactPage;