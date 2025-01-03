import React from 'react';

const Furniture = () => {
  return (
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
  );
};

export default Furniture;
