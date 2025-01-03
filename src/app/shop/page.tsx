import Link from 'next/link';
import React from 'react'

export default function ShopPage(){
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
               <img src='https://plus.unsplash.com/premium_photo-1670274229211-a46356f9d196?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='picture' className='w-[1440] h-[316]'></img>
      </div>
            <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-evenly space-x-4 sm:space-x-8 w-full">
                   
                    <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3>
                  
                </div>


                <div className="flex flex-wrap items-center justify-between sm:space-x-4 mt-2 sm:mt-0 w-full">
                    <span className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</span>
                    <span className="text-xs sm:text-sm md:text-base">Show</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                    </div>

                    <span className="text-xs sm:text-sm md:text-base">Short by</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">Default</h3>
                    </div>
                </div>
            </div>

         {/* pictures */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href = "/buyNow"><img
                        src='https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pg~9lHdYlJrag24x9CbF85fX4VOHtC4H0XvXTwItbdecOWynGQOXzPUtn2-jtTwE9KDJA4QTd4PueXTvIgsXclsQnsw4Rnd4C37n8dRfBxI-mQFy3IZzYn24E~o54cb4Cn--EufiGYJPmlFL1rDStO7khxgMhIWjtXft~QWldt8t-RcnAPp9qCPAj~e3F3sNmvDcgee3kHZP-iqfZqkAMmXx9r6QNw7IhX~eZCO~uV-EMpJUpkQliQJhqYhFucqry~zP9oyr1zQsGON9RFhVbnIL7kzsBCimAlYJb3gD6c3kV6NZ6zlTKVcgfApKBMi-uAFiFgsxyj0Rsbc1HPddyQ__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Syltherine</h3>
                    <p className='ml-6'>Stylish cafe chair</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 2.500.000</span>
                    <span className='text-[16px] line-through'>Rp 3.500.000</span>
                </div>
                <div className='relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href = "/buyNow"><img
                        src='https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYvfPWbH4CRYqgbyYfY95gjTBIWCBPJhD7RWX6eKqZOsxIxiuoQ3LT~~Z-39ATt7jV7T9W6WPvzSog~HWgL8TsqzNzrnyKMvKytZF0vnWtWo32PpxoUiV0PqcJ~w2UeVWGrmQD-8nYcyhH7-LM5n1HP15tSIJ0xdBH9hm24PzKZnC88ByU7CCyU7QNCwMbaeUZVeWx~UAWZAGAqjxjui1si8fOYm1r5cuGCQmmujxstkvnmkYlrCYp0DqRo7Xa0WbSCybtvnAaVQGeZlbOXL-EVwNpjlsJUKCB2e12vUdXRhWiCbjRp2kBs1eqJFZbUUS0aS40XUOm1uSp2LLqryqA__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>
                        Leviosa
                    </h3>
                    <p className='ml-6'>Stylish cafe chair</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>
                        Rp 2.500.000
                    </span>

                    <div className='absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex items-center justify-center flex-col'>
                        <button className='text-[#B88E2F] text-[16px] font-semibold bg-[#FFFFFF] w-[202px] h-[48px]'>Add to cart</button>
                        <div className='flex items-center justify-around gap-4 mt-6 text-[#FFFFFF]'>
                      
                            <span>Share</span>
                            
                            <span>Compare</span>
                            
                            <span>Like</span>
                        </div>
                    </div>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href = "/buyNow"> <img
                        src='https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbkNfl56ULv8jmkpLJrLyQ8NEDy5KNu7ikUGsVjgq6ebP7Z~UEll4ff~SpSYpEZs34gMbAm8MNGmtlDb2zs9hUtI35lZIlsAU95fqgfnbyv4mUfRaEZj2vpQiiubXjaSNVKSPwHpHZbLisP1y~uMw0hDKVQUMi5lFvyqfmScXSD0zDjxpoOMJbtMSB6GdiNsdjlmljYei64M5EFrQGMokDt80qpyqlrwbUzVdpAikpbSQAVYyY0YIAIm17fWfxxWGmmjZJfsYlyEWlsHy5bZl~QNlCPSMMNr5FLuure3Q1m0DaUOCDNYxOZBkrvLr9eSJ74y~Jm9LxEi2o6xrc4nvA__'
                        alt='sofa'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Lolito</h3>
                    <p className='ml-6'>Luxury big sofa</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 7.000.000</span>
                    <span className='text-[16px] line-through'>Rp 3.500.000</span>
                </div>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href = "/buyNow"> <img src='https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCWXrM8C-1rNBEBbI~3nyvkVEWDahKrBkzgtVb7UoOuXsBkxQhKWAXTZB6BS-8JEfJL1dVu35yvaSEApNdWWP~K2lQ-H6cNyD11pBnJ9VTzGSmrhJi9IxoA45tEFoGdPkFkNGTAlALZ8E7oL-tcqarbXvGlCsgZyY-MYCLRwtLq2Te8rHe~iBPD3KqPIji7y1YChhoRZVyY9Cu-cqfSjb2vH1u1Hs88UBthg1H3M0V9AU2UHjiJfQDeale8NEqUZ1F0tfWRhZ2KJ0P6XV~Jogo9OlLDSMzRJF8Z5T3XIju4sbQlRd9uV6M10~UkM3MA2rrTTE96AFDJ1IAOMjW4DxQ__'
                    alt='room'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Respira</h3>
                    <p className='ml-6'>Outdoor bar table and stool</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 500.000</span>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img
                        src='https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pg~9lHdYlJrag24x9CbF85fX4VOHtC4H0XvXTwItbdecOWynGQOXzPUtn2-jtTwE9KDJA4QTd4PueXTvIgsXclsQnsw4Rnd4C37n8dRfBxI-mQFy3IZzYn24E~o54cb4Cn--EufiGYJPmlFL1rDStO7khxgMhIWjtXft~QWldt8t-RcnAPp9qCPAj~e3F3sNmvDcgee3kHZP-iqfZqkAMmXx9r6QNw7IhX~eZCO~uV-EMpJUpkQliQJhqYhFucqry~zP9oyr1zQsGON9RFhVbnIL7kzsBCimAlYJb3gD6c3kV6NZ6zlTKVcgfApKBMi-uAFiFgsxyj0Rsbc1HPddyQ__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Syltherine</h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='relative w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img src='https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYvfPWbH4CRYqgbyYfY95gjTBIWCBPJhD7RWX6eKqZOsxIxiuoQ3LT~~Z-39ATt7jV7T9W6WPvzSog~HWgL8TsqzNzrnyKMvKytZF0vnWtWo32PpxoUiV0PqcJ~w2UeVWGrmQD-8nYcyhH7-LM5n1HP15tSIJ0xdBH9hm24PzKZnC88ByU7CCyU7QNCwMbaeUZVeWx~UAWZAGAqjxjui1si8fOYm1r5cuGCQmmujxstkvnmkYlrCYp0DqRo7Xa0WbSCybtvnAaVQGeZlbOXL-EVwNpjlsJUKCB2e12vUdXRhWiCbjRp2kBs1eqJFZbUUS0aS40XUOm1uSp2LLqryqA__'
                    alt='chair'
                    className='w-[285] h-[301]'>
                    </img></Link>
                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>
                        Leviosa
                    </h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow">  <img
                        src='https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbkNfl56ULv8jmkpLJrLyQ8NEDy5KNu7ikUGsVjgq6ebP7Z~UEll4ff~SpSYpEZs34gMbAm8MNGmtlDb2zs9hUtI35lZIlsAU95fqgfnbyv4mUfRaEZj2vpQiiubXjaSNVKSPwHpHZbLisP1y~uMw0hDKVQUMi5lFvyqfmScXSD0zDjxpoOMJbtMSB6GdiNsdjlmljYei64M5EFrQGMokDt80qpyqlrwbUzVdpAikpbSQAVYyY0YIAIm17fWfxxWGmmjZJfsYlyEWlsHy5bZl~QNlCPSMMNr5FLuure3Q1m0DaUOCDNYxOZBkrvLr9eSJ74y~Jm9LxEi2o6xrc4nvA__'
                        alt='sofa'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Lolito</h3>
                    <p className='text-center'>Luxury big sofa</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 7.000.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"><img src='https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCWXrM8C-1rNBEBbI~3nyvkVEWDahKrBkzgtVb7UoOuXsBkxQhKWAXTZB6BS-8JEfJL1dVu35yvaSEApNdWWP~K2lQ-H6cNyD11pBnJ9VTzGSmrhJi9IxoA45tEFoGdPkFkNGTAlALZ8E7oL-tcqarbXvGlCsgZyY-MYCLRwtLq2Te8rHe~iBPD3KqPIji7y1YChhoRZVyY9Cu-cqfSjb2vH1u1Hs88UBthg1H3M0V9AU2UHjiJfQDeale8NEqUZ1F0tfWRhZ2KJ0P6XV~Jogo9OlLDSMzRJF8Z5T3XIju4sbQlRd9uV6M10~UkM3MA2rrTTE96AFDJ1IAOMjW4DxQ__'
                    alt='room'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Respira</h3>
                    <p className='text-center'>Outdoor bar table and stool</p>
                    <span className='text-[20px] font-semibold'>Rp 500.000</span>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow">   <img
                        src='https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pg~9lHdYlJrag24x9CbF85fX4VOHtC4H0XvXTwItbdecOWynGQOXzPUtn2-jtTwE9KDJA4QTd4PueXTvIgsXclsQnsw4Rnd4C37n8dRfBxI-mQFy3IZzYn24E~o54cb4Cn--EufiGYJPmlFL1rDStO7khxgMhIWjtXft~QWldt8t-RcnAPp9qCPAj~e3F3sNmvDcgee3kHZP-iqfZqkAMmXx9r6QNw7IhX~eZCO~uV-EMpJUpkQliQJhqYhFucqry~zP9oyr1zQsGON9RFhVbnIL7kzsBCimAlYJb3gD6c3kV6NZ6zlTKVcgfApKBMi-uAFiFgsxyj0Rsbc1HPddyQ__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Syltherine</h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='relative w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img
                        src='https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYvfPWbH4CRYqgbyYfY95gjTBIWCBPJhD7RWX6eKqZOsxIxiuoQ3LT~~Z-39ATt7jV7T9W6WPvzSog~HWgL8TsqzNzrnyKMvKytZF0vnWtWo32PpxoUiV0PqcJ~w2UeVWGrmQD-8nYcyhH7-LM5n1HP15tSIJ0xdBH9hm24PzKZnC88ByU7CCyU7QNCwMbaeUZVeWx~UAWZAGAqjxjui1si8fOYm1r5cuGCQmmujxstkvnmkYlrCYp0DqRo7Xa0WbSCybtvnAaVQGeZlbOXL-EVwNpjlsJUKCB2e12vUdXRhWiCbjRp2kBs1eqJFZbUUS0aS40XUOm1uSp2LLqryqA__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>
                        Leviosa
                    </h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow">  <img
                        src='https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbkNfl56ULv8jmkpLJrLyQ8NEDy5KNu7ikUGsVjgq6ebP7Z~UEll4ff~SpSYpEZs34gMbAm8MNGmtlDb2zs9hUtI35lZIlsAU95fqgfnbyv4mUfRaEZj2vpQiiubXjaSNVKSPwHpHZbLisP1y~uMw0hDKVQUMi5lFvyqfmScXSD0zDjxpoOMJbtMSB6GdiNsdjlmljYei64M5EFrQGMokDt80qpyqlrwbUzVdpAikpbSQAVYyY0YIAIm17fWfxxWGmmjZJfsYlyEWlsHy5bZl~QNlCPSMMNr5FLuure3Q1m0DaUOCDNYxOZBkrvLr9eSJ74y~Jm9LxEi2o6xrc4nvA__'
                        alt='sofa'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Lolito</h3>
                    <p className='text-center'>Luxury big sofa</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 7.000.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img src='https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCWXrM8C-1rNBEBbI~3nyvkVEWDahKrBkzgtVb7UoOuXsBkxQhKWAXTZB6BS-8JEfJL1dVu35yvaSEApNdWWP~K2lQ-H6cNyD11pBnJ9VTzGSmrhJi9IxoA45tEFoGdPkFkNGTAlALZ8E7oL-tcqarbXvGlCsgZyY-MYCLRwtLq2Te8rHe~iBPD3KqPIji7y1YChhoRZVyY9Cu-cqfSjb2vH1u1Hs88UBthg1H3M0V9AU2UHjiJfQDeale8NEqUZ1F0tfWRhZ2KJ0P6XV~Jogo9OlLDSMzRJF8Z5T3XIju4sbQlRd9uV6M10~UkM3MA2rrTTE96AFDJ1IAOMjW4DxQ__'
                    alt='room'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Respira</h3>
                    <p className='text-center'>Outdoor bar table and stool</p>
                    <span className='text-[20px] font-semibold'>Rp 500.000</span>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img
                        src='https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pg~9lHdYlJrag24x9CbF85fX4VOHtC4H0XvXTwItbdecOWynGQOXzPUtn2-jtTwE9KDJA4QTd4PueXTvIgsXclsQnsw4Rnd4C37n8dRfBxI-mQFy3IZzYn24E~o54cb4Cn--EufiGYJPmlFL1rDStO7khxgMhIWjtXft~QWldt8t-RcnAPp9qCPAj~e3F3sNmvDcgee3kHZP-iqfZqkAMmXx9r6QNw7IhX~eZCO~uV-EMpJUpkQliQJhqYhFucqry~zP9oyr1zQsGON9RFhVbnIL7kzsBCimAlYJb3gD6c3kV6NZ6zlTKVcgfApKBMi-uAFiFgsxyj0Rsbc1HPddyQ__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Syltherine</h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='relative w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow">   <img
                        src='https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYvfPWbH4CRYqgbyYfY95gjTBIWCBPJhD7RWX6eKqZOsxIxiuoQ3LT~~Z-39ATt7jV7T9W6WPvzSog~HWgL8TsqzNzrnyKMvKytZF0vnWtWo32PpxoUiV0PqcJ~w2UeVWGrmQD-8nYcyhH7-LM5n1HP15tSIJ0xdBH9hm24PzKZnC88ByU7CCyU7QNCwMbaeUZVeWx~UAWZAGAqjxjui1si8fOYm1r5cuGCQmmujxstkvnmkYlrCYp0DqRo7Xa0WbSCybtvnAaVQGeZlbOXL-EVwNpjlsJUKCB2e12vUdXRhWiCbjRp2kBs1eqJFZbUUS0aS40XUOm1uSp2LLqryqA__'
                        alt='table'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>
                        Leviosa
                    </h3>
                    <p className='text-center'>Stylish cafe chair</p>
                    <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow">   <img
                        src='https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbkNfl56ULv8jmkpLJrLyQ8NEDy5KNu7ikUGsVjgq6ebP7Z~UEll4ff~SpSYpEZs34gMbAm8MNGmtlDb2zs9hUtI35lZIlsAU95fqgfnbyv4mUfRaEZj2vpQiiubXjaSNVKSPwHpHZbLisP1y~uMw0hDKVQUMi5lFvyqfmScXSD0zDjxpoOMJbtMSB6GdiNsdjlmljYei64M5EFrQGMokDt80qpyqlrwbUzVdpAikpbSQAVYyY0YIAIm17fWfxxWGmmjZJfsYlyEWlsHy5bZl~QNlCPSMMNr5FLuure3Q1m0DaUOCDNYxOZBkrvLr9eSJ74y~Jm9LxEi2o6xrc4nvA__'
                        alt='sofa'
                        className=' w-[285] h-[301]'
                        ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Lolito</h3>
                    <p className='text-center'>Luxury big sofa</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[20px] font-semibold'>Rp 7.000.000</span>
                        <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
                    </div>
                </div>

                <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
                <Link href = "/buyNow"> <img src='https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCWXrM8C-1rNBEBbI~3nyvkVEWDahKrBkzgtVb7UoOuXsBkxQhKWAXTZB6BS-8JEfJL1dVu35yvaSEApNdWWP~K2lQ-H6cNyD11pBnJ9VTzGSmrhJi9IxoA45tEFoGdPkFkNGTAlALZ8E7oL-tcqarbXvGlCsgZyY-MYCLRwtLq2Te8rHe~iBPD3KqPIji7y1YChhoRZVyY9Cu-cqfSjb2vH1u1Hs88UBthg1H3M0V9AU2UHjiJfQDeale8NEqUZ1F0tfWRhZ2KJ0P6XV~Jogo9OlLDSMzRJF8Z5T3XIju4sbQlRd9uV6M10~UkM3MA2rrTTE96AFDJ1IAOMjW4DxQ__'
                    alt='room'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Respira</h3>
                    <p className='text-center'>Outdoor bar table and stool</p>
                    <span className='text-[20px] font-semibold'>Rp 500.000</span>
                </div>
            </div>

            <div className='flex items-center justify-center gap-8 mt-14'>
                <div className='w-[60px] h-[60px] bg-[#B88E2F] text-white flex items-center justify-center'>1</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>2</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>3</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>Next</div>
            </div>

            <div className="mt-16 px-4 md:px-24 py-16 bg-[#F9F9F9]">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h3 className="text-xl text-[#333333]">Share Your Setup With</h3>
        <h2 className="font-bold text-3xl md:text-4xl text-[#222222]">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Gallery Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Furniture Setup"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Furniture Setup"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1527694224012-be005121c774?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Furniture Setup"
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-lg text-[#666666]">Want to be featured?</h3>
        <p className="text-xl text-[#333333] font-semibold mb-4">
          Share your furniture setup on Instagram using <span className="font-bold">#FuniroFurniture</span>
        </p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#B88E2F] text-white text-lg rounded-md hover:bg-[#a5771b] transition"
        >
          Follow Us on Instagram
        </a>
      </div>
    </div>
           
{/* footer */}

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
 
      
  

</>
   );
   }