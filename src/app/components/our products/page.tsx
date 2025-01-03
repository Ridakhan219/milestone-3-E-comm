import Link from 'next/link'
import React from 'react'

const OurProducts = () => {
  return (
    <div className='my-10 mx-24 '> 

      <h1 className='font-extrabold text-2xl text-center'>Our Products</h1>

 {/* pictures */}

 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href='/shop' target="main"><img
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
                <Link href='/shop' target="main">
                <img
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
                <Link href='/shop' target="main">
                <img
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
                <Link href='/shop' target="main">
                    <img src='https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCWXrM8C-1rNBEBbI~3nyvkVEWDahKrBkzgtVb7UoOuXsBkxQhKWAXTZB6BS-8JEfJL1dVu35yvaSEApNdWWP~K2lQ-H6cNyD11pBnJ9VTzGSmrhJi9IxoA45tEFoGdPkFkNGTAlALZ8E7oL-tcqarbXvGlCsgZyY-MYCLRwtLq2Te8rHe~iBPD3KqPIji7y1YChhoRZVyY9Cu-cqfSjb2vH1u1Hs88UBthg1H3M0V9AU2UHjiJfQDeale8NEqUZ1F0tfWRhZ2KJ0P6XV~Jogo9OlLDSMzRJF8Z5T3XIju4sbQlRd9uV6M10~UkM3MA2rrTTE96AFDJ1IAOMjW4DxQ__'
                    alt='room'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Respira</h3>
                    <p className='ml-6'>Outdoor bar table and stool</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 500.000</span>
                </div>
            </div>

            {/* picture 2 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>

            <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
            <Link href='/shop' target="main">
                    <img src='https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3AnGFGDCr3o7m8Kbc69hVjsANyRF1GEE8tkViJzop3dfpTskOKhl7avxpdZIN8gG28XTdmzy8uY9VShyQJfrhloYhCS6RadqDkWca6ReOY77XWLJP7Qf-yEUh8n5K3AzhZPrZo8CPG7NnmNcXXWCbUy5y0oFy~WWH0F8OtHuJ8sRxStV6~h6c04HtZ4LpD2-vsXcrxOWmV~AiyJ76LOTOeKY0sMdLit~dUl951r8Otcdu-Np-BQhq-dLDp8y5nmqTWYOgzEKOewG1xcnwBo8Azxm~0G9ogO6pt2fsar9NjBeQCIhQlL7GJynYVICaQMAhgfioDm4~UHOwGhdzbykw__'alt='table'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Grifo</h3>
                    <p className='ml-6'>night lamp</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 1.500.000</span>
                </div>




                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href='/shop' target="main">
                    <img src='https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fSZYFMYm7BB4lq15TYlN57Z1uB~UI43GJQCAnZgUPUKWWD~t9sUuK39ekMPwU8a8qpybbUEnaMokY8FpHi4gaMsc45yh-KfM34YybYKqv7~uP1EfKFNq7fpxetJ3bIpCd6QP68mZxV-uqqQXYs9moe-9gemjvPomhJZw~HJD8bDq1AIFzQlDWB7YE2tRD4pDhrZV~ZMKhjDU~0XUMzvhafvqWSgdfk~B0braWe9uR5emp1CM4FQKAVatgOStSCKj1xJv6i-UosC3vvjJ3g294a2c-wpNNSYtOUZyO9FczeTyw1DTu5yWNuUO7k~yrzdq94-V-ApVzsz99EQaPIacuA__'
                    alt='sofa'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Muggo</h3>
                    <p className='ml-6'>small mug</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 150.000</span>
                </div>




                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href='/shop' target="main">
                    <img src='https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXNapqxyLn89kj~A2qWIYZb8N8HxcPYCK8UdqOCsQ47wL-p~LhFIn4wjrNDbx41kR8F1gxReNxzSBU8~waeCuEo2YDVnGtYC-4yTpt~ZznYt2D9vhG1~FtX8pGVvIi2f5erkUgWE4hVCKJ0tBWs3n9283NmF1pZ4RtPiyl959LF4GVwIq2pWI4hotJ3urZ3YnD1FZ9f~vKl2i1WiSVisqQxhzpRHRASWBpit20-hMrbjxOjIO~cLGLNPvmc8A0s6sHJ373l62pjQ6dBrA~fOxNnDSgi1DpHj7br45PVrP7-guQk7cKh8q96RmJuyvhXhu94Kd8E2c9b~hykgK1tnsQ__'
                    alt='sofa'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>Pingky</h3>
                    <p className='ml-6'>cute bed set</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 7.000.000 </span>
                    <span className='line-through'>Rp 14.000.000</span>
                </div>





                <div className='w-[285px] h-[446px] bg-[#F4F5F7] mx-auto'>
                <Link href='/shop' target="main">
                    <img src='https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nu56CyC~kAdGfAgdhgzgj0dLvfJdCjvyuFOEf3-CBjIWhjnpg3pytCR~K5wBGX~1ErjlHz3jhG7qhSMd6cb1GJSrjuEqmGSezzgaIfcaPebe4N--G30KhD8kX7~yzHgyeZKwl3ywdLl2TQyS-XPLASwfZdhaQINTB5VQD5k82CVtJPDhh8U0oIQ3lu5zpmZcBkdJZX01ESYJ3zH8iA1-ApikUu5HAUMxRXoyxIJv-z7l0CAkonSau5RHFZPQ164icbtK5Y3F5xwAEC5xf3fN2OqfWRdvyx7zJXDyDiQJq90IKBvkVvKtFPfJhpnuE5vnezi9NMWb~5QZljkvhpEslw__'
                    alt='sofa'
                    className='w-[285] h-[301]'
                    ></img></Link>

                    <h3 className='text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4'>potty</h3>
                    <p className='ml-6'>Minimalist flower pot</p>
                    <span className='text-[20px] font-semibold mr-6 ml-6'>Rp 500.000</span>
                </div>
                </div>
    </div>
  )
}

export default OurProducts





