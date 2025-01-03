// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div>
//         <img src='https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KS27m4cGVOvmDNFjcF63R5t30rRnaZAAdkNxHNDCRQD62LHVh6enGusI~aAkpzVxCc6fhbRQ1w-oi~3Q9xb6f4vTNSwylKRtAD9~vnTVfhNKOfsTsbbbhtHCxdhkir5h0LXPHQAoVFypwXxeP0kq0DwV2LDuoZti1Xo3HspABgXIFSlkjfGIbcrJA89Amh4HvTe33hRL~q9y30Nz9wuOMQBNXeyxmchpEziOizQBnqJ5Fc~NGbv3mmVexKz96A6tl1f7mUNBoiD1u8-MoknvxA1ZPaEP0TDh7dWg-ne48KQnsZzI04-01crhkx9Nb8tcV15M-tsEKPOuOiYKDg5CFQ__' alt='background image'></img>
//       </div>
//     </div>
//   )
// }

// export default Hero



import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Image */}
      <img
    src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KS27m4cGVOvmDNFjcF63R5t30rRnaZAAdkNxHNDCRQD62LHVh6enGusI~aAkpzVxCc6fhbRQ1w-oi~3Q9xb6f4vTNSwylKRtAD9~vnTVfhNKOfsTsbbbhtHCxdhkir5h0LXPHQAoVFypwXxeP0kq0DwV2LDuoZti1Xo3HspABgXIFSlkjfGIbcrJA89Amh4HvTe33hRL~q9y30Nz9wuOMQBNXeyxmchpEziOizQBnqJ5Fc~NGbv3mmVexKz96A6tl1f7mUNBoiD1u8-MoknvxA1ZPaEP0TDh7dWg-ne48KQnsZzI04-01crhkx9Nb8tcV15M-tsEKPOuOiYKDg5CFQ__"
    alt="background image"
    
    
  />
      
      {/* Text Over the Image */}
      <div className="absolute top-1/3 left-0 right-0 text-center text-black px-8">
        <h1 className="text-4xl font-bold">Welcome to Our Collection</h1>
        <p className="mt-4 text-lg">Explore beautiful rooms that inspire and elevate your space.</p>
      </div>
    </div>
  );
};

export default Hero;
