//   features
import React from 'react'

const Features = () => {
  return (
    <div>
      
   

            <div className="h-auto lg:h-[270px] bg-[#F9F1E7] mt-8 lg:mt-16 flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-0 px-4 py-8">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-[350px] md:max-w-[450px] lg:max-w-[600px] text-center lg:text-left">
    
    {/* High Quality Section */}
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
        High Quality
      </h3>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
        Crafted from top materials
      </p>
    </div>

    {/* Warranty Protection Section */}
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
        Warranty Protection
      </h3>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
        Over 2 years
      </p>
    </div>

    {/* Free Shipping Section */}
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
        Free Shipping
      </h3>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
        Order over $150
      </p>
    </div>

    {/* 24/7 Support Section */}
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
        24/7 Support
      </h3>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
        Dedicated support
      </p>
    </div>
    
  </div>
</div> 
</div>
  )
}

export default Features