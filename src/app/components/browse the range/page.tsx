import Link from "next/link";

const BrowseTheRange = () => {
  return (
    <div className="my-10 mx-4 md:mx-24 text-center">
      <div className="font-bold text-2xl text-black">
        Browse The Range
      </div>
      <div className="text-[#666666]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div><br/>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Link href='/buyNow' target="main"> <img
            src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dining"
            className="w-full h-[300px] object-cover rounded-lg"
          /></Link>
          <h2 className="font-semibold text-xl mt-4">Dining</h2>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Link href='/buyNow' target="main">
        <img 
        src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="living"
        className="w-full h-[300px] object-cover rounded-lg"></img>
        </Link>
      
          <h2 className="font-semibold text-xl mt-4">Living</h2>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Link href='/buyNow' target="main"><img
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bedroom"
            className="w-full h-[300px] object-cover rounded-lg"
          /></Link>
          <h2 className="font-semibold text-xl mt-4">Bedroom</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;

