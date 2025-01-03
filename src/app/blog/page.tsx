import React from 'react';

import Link from 'next/link';


const BlogPage = () => {
  return (
    <div>
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
      {/* Banner Section */}
      
      <div>
        <img src='https://plus.unsplash.com/premium_photo-1670274229211-a46356f9d196?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='picture' className='w-[1440] h-[316]'></img>
      
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <img
            src='https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gthWU4rLj5Zv2UpB0INcwYGO8gsNFTDwnIxKTKhJvjaDJh6mNaSUZIOst~vQ0dhoQOveTrKcjUs3mc7ueaQBlGPZ3nHyecPvQGGzFo-AAovtFBoucNEGkHZsJStt9B1-cfqP2es89xLoy3M0LddwwLY5uVPYxJCwShcZ3PWFagUHssaMnxKG9GcFKO6RgcYoY9C6SLV8EuSPn-fZ8iKI4pznq84y2~LU86CJIi3~txM8svxtq-abKPsmbBf36llQbt1wkLMcvGqX02zyakSEDqG8g36CES~ms67q5-9VBgCFr9PPzcied-DTrNAEH0~bJOqbwK4mcsj7BgdF1Py~fw__'
            alt="laptop-img"
            className='
            w-[817]
            h-[500] mt-8 lg:mt-28 '>
          </img>

          <div className="flex items-center gap-2 lg:gap-4 mt-2">
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>

          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <img
            src='https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oieo0Oafoc1n9sd9HJCgfGZMsAhsJAcngGAsfCcGonlkSf9fBoiRKl~6VUkchx178CSsHU3xvRxNh-qrGFxvXEOx1lGEb~irMuDK4RSiLfiB8QmDmMAtvjl234U24Gi1mQF-B8uquaiJjLCV4-A707ebfYIpDjAa1xzzHpuiEvj8EOIiZ7g8dGjg2P7ffL85Uj7~MNgYpIO4qSkwfFW~2P1DKtc~X3J9-9Uaz9dOiIh7H9yhLrFofpIgO0~GgE9X4-fsU9MZWrYmk5T5-QFTfArtNVay2tuQ-lFb~qlUtDa0c7Ol7AF-jcP0mFnoDDQpooVatPHEFiID3HgJ-pPSqQ__'
            alt="drawing-img" 
            className="mt-14 w-[817]
            h-[500]"
            ></img>
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <img
            src='https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfmXPpQo5hzE5hBo0PSlK2U4Q4QTJmMoIARMOX2NRKjCWqFw~HoaqKOz8tswshSXnFcjHOR~infYMOPBbdKKLKFULuAKMYLkOYrklOsSmsH1SJdihNFlm9a4drIOJrIma-O-MMU6XzMOgeG0QioDpspjRA-CRIn3lYvjiejvDoq7nM6UdgxSiJMZerzU7w42VVIRMlkgbSNEmdyJWu5wQUkvSbWNkMYXKXsfPBXQoHeHzMeFYerR558H~21-3RkjBfZsTSJGtO3fyh20~nkcCzClu28i2J832JquvvgdiQSJY0JkOrYDMDX9I3XPdN7LmyzIhFFd0BxC1B2AwKxh5w__'
            alt="books-img" className="mt-14  w-[817]
            h-[500]">
            </img>
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
           
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate <br/>ex reprehenderit saepe 
        voluptatem numquam aut labore officia tenetur quo modi provident  <br/>impedit magni voluptatum
        cum, perspiciatis assumenda, nihil aperiam! Totam!
          </p>
          <span className="border-b border-black text-sm"><u>Read More</u></span>
        </div>

         {/* Right Section */}
         <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
           <input type='text' placeholder='search here'></input>
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8">Recent Posts</h1>
         <div className='gap-24'>
         <div className='flex '>
        <img src='https://s3-alpha-sig.figma.com/img/2e2c/01ab/8b94b8e3a17bbb18c564006d557e73b1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQqHuf--EA-SBq2V5hAPgfPR4ieFJrOGJAriJr86OipZH1R7PR~tp7VQkaXPH2ejK~BWEwd4Tp9uUSpPWj4etiJ~nOQOAb59nTTJRzgBZsBjiR0TaLJm8Lb-CHyYSp~FHBjMJgNWW6dbgqVA96M8TI1Pe~Pq~EHh4Qh6gs2Dq9yXwIg9jPDLTnT8DiXlNjfAt~XSS5U8hdBZylk~TKRP6~GS8nAqTfJAQlm8dG7QJ08hXTSOsASFeWdljtMrkoaiRUvFvt60Ypzk6SkRu80MjbkLjn2RzzlkarHjdF0zTPQFcDi-BLdR7RvnhCib9IhKH-dB2UABZ1zC3KkI~3CkIA__' alt='picture' className='w-80 h-80 rounded-3xl '></img>
        <h2 className='font-semibold'>Going all-in with millennial design</h2>
        <p>03 Aug 2022</p>
         </div>

         <div className='flex'>
        <img src='https://s3-alpha-sig.figma.com/img/3752/8005/309ac985861a262b8622e7528e08049f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flJOBJHVJGXYE95PDrkca9z7YDONaoytOWlN-QgffLzaGryTc3peBaPrHscfsDtMk2vZ7toD29g9NGhdehPBYZqofSM1noXkSPA7vqXTmUuywd6vYrlCdyBJ2~GSCsgH8E0xp3mZ1JcJ8RXp8VURTQagqP4ykgS82nRVVGIgeD4zLNfDMySsVIVDs5hXc62DkN2wg~ipS7UybtDd0hVFAe92vyCfMnQIt~gk5bmfvvJGFelXEJACgqKjAsvx1cRUAc7GOIgveWCNFPyLtYDkSI9L6tuiMoMtTfnCT4vHdglGZwZy8xk2QTy0QmnrYz~5I58Se0wOU85qaX7u54VpGw__' alt='picture' className='w-80 h-80  rounded-3xl'></img>
        <h2 className='font-semibold'>Going all-in with millennial design</h2>
        <p>03 Aug 2022</p>
         </div>


         <div className='flex'>
        <img src='https://s3-alpha-sig.figma.com/img/0b5e/8500/6615f4968338e0a7004a86529ecf85c9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crK6DfIcXzXFtDvwYBQ~cedEM54qCV5moCHYntjqrEt6bduy4~I7RN3O1vBAcVHBaWM0RqK~444nBxAykh8FM5aU7YucuBmBnbT0xRsY6-5l10TsbtemwW9m~gjIKbXnfCZlhpoUO-d22TYDhVMOLxHzl7LMcALL2mJVDOJrisBoBG03OngbyqEgyVAbodeSAaTSo~2swJSMJByXd3oE-jUqYU2eeI0jg0ZjrB3TxElFaYe1TOqyULEa~ccAW8XNShH2L560HwXR6MQ-RFydsibOvBWrpIRgt96Ka6-yEfGlv4GnaTqgDZGSI9GmGIEpg2nIwmPrgRa7h25iOaXhsw__' alt='picture' className='w-80 h-80  rounded-3xl'></img>
        <h2 className='font-semibold'>Going all-in with millennial design</h2>
        <p>03 Aug 2022</p>
         </div>


         <div className='flex'>
        <img src='https://s3-alpha-sig.figma.com/img/9056/4e0f/cfbc72a9932875eeb20db551bb01abb3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~yU-WEYypwUTCL1wchC5aWkOxfbLZzc-E8rjB8FZxzcz9tDxw1hhioZJvNvXV5zDIEPAnUIk9xky0NuYryqgfQApx8HgNnUTHxrxJAcuo1-KI2EUG4eOS~BkswyFrw-eA16mm91x2OGaWx3iZpMnx1Kwyc3cooDudZrwsuPJQYVoPI66BVzT-z5c6CAJdSjWv3aqSB4CQ4A8Eb7Y7Ya3bZ3wax3GXBGgr8toxYoYLPmD8FIA5WwWqYYvHf3tlyT2VL6hGSDl7TYmZPeZ4NXd8Tcgfn632eOXdXSDakgjEQ47Q05oDivNFYlNTqB9ndS90Kay1feleKRBoofHOG~rQ__' alt='picture' className='w-80 h-80  rounded-3xl'></img>
        <h2 className='font-semibold'>Going all-in with millennial design</h2>
        <p>03 Aug 2022</p>
         </div>


         <div className='flex'>
        <img src='https://s3-alpha-sig.figma.com/img/455f/f3a5/7de5c930d1538360f43cbfa1d7f00337?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X4aNCvDGnmY0d90gt4sRh~cGR1MXooolgUB1w6O6GNfuddGw~m-8JAr66GZD-oQPrPCn8zEPHt4CfcoL~PCUcWINdosCd-IozUVK-JfS9jHeaz~uygJmOO7af8oxKwNihxa-RWvFc7QQu6BcWkVd0knbmSRg3NIMIQMIXLrbojZpF0jXTJdt417SlUtYQWTKLPyN-hiY-lBXZsfaJvTHUiSU3dDxI6ijjTZMkLWLzLMZ9jE0LnqXffYCxk3WzxBxqDmx7biQ2ar-~xFwtaFNiE5AIPzhJrPDAilQcMaxbbAHS~TYuPZJXh3vAhXcF6b17a4vGEUupO9mlTfBK~vcqQ__' alt='picture' className='w-80 h-80  rounded-3xl'></img>
        <h2 className='font-semibold'>Going all-in with millennial design</h2>
        <p>03 Aug 2022</p>
         </div>
         </div>

         <div className='flex items-center justify-center gap-8 mt-14'>
                <div className='w-[60px] h-[60px] bg-[#B88E2F] text-white flex items-center justify-center'>1</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>2</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>3</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>Next</div>
            </div>
            </div>

     </div>
          
    

    </div>
     <div className="bg-[#FFFFFF] py-16 px-6 sm:px-12 md:px-16 lg:px-32 mt-44">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <div>
         <h1 className="text-[20px] sm:text-[24px] font-bold">Funiro.</h1>
         <p className="mt-4 text-[#9F9F9F] max-w-sm text-sm sm:text-base">
           400 University Drive Suite 200 Coral Gables, FL 33134 USA
         </p>
       </div>

       <div className="flex flex-col gap-3">
         <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Links</h1>
         <Link href="/" className="text-[#333] text-sm sm:text-base">
           Home
         </Link>
         <Link href="/shop" className="text-[#333] text-sm sm:text-base">
           Shop
         </Link>
         <Link href="/blog" className="text-[#333] text-sm sm:text-base">
           Blog
         </Link>
         <Link href="/contact" className="text-[#333] text-sm sm:text-base">
           Contact
         </Link>
       </div>

       <div className="flex flex-col gap-3">
         <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Help</h1>
         <Link href="/payment-options" className="text-[#333] text-sm sm:text-base">
           Payment Options
         </Link>
         <Link href="/returns" className="text-[#333] text-sm sm:text-base">
           Returns
         </Link>
         <Link href="/privacy-policy" className="text-[#333] text-sm sm:text-base">
           Privacy Policies
         </Link>
       </div>

       <div className="flex flex-col items-center gap-4">
         <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Newsletter</h1>
   
         <input
           type="email"
           className="border-b border-black text-sm text-center p-2 mt-2 w-full max-w-xs sm:max-w-sm"
           placeholder="  Enter Your Email Address"
         />
         <button className=" text-black p-2 mt-4 text-sm sm:text-base">
           Subscribe
         </button>
       </div>
     </div>
   </div>

   <div className="border-t border-[#D9D9D9] pb-10 sm:pb-14 w-full ">
     <br />
     <span className="text-xs sm:text-sm">2023 Funiro. All rights reserved</span>
   </div>
   </div>
    
  );
};

export default BlogPage;