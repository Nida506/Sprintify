import React from "react";
import LandingImage from "../../assets/LandingImage.png";
import ProductivitiyPowerHouse from "../../components/ProductivitiyPowerHouse/ProductivitiyPowerHouse";

function LandingPage() {
  return (
    <>
    <div className="md:h-screen bg-custom-gradient  flex flex-col-reverse max-[843px]:items-center  min-[843px]:justify-center min-[843px]:items-center min-[843px]:flex-row   mix-[780px]:p-11 pt-[100px]">
      <div className="flex flex-col justify-center 2xl:h-[900px] mx-auto px-6 mb-10 lg:text-left w-[100%]  min-[843px]:w-[50%] min-[843px]:h-[450px] ">
        {/* Text Content */}
        <h1  data-aos="zoom-out" className="text-2xl min-[500px]:text-4xl mt-3 lg:text-4xl  text-white font-semibold mb-6 2xl:mt-[100px]  2xl:text-8xl ">
          Sprintify makes it easier for teams to manage projects and tasks
        </h1>
        <p  data-aos="zoom-out" className="text-lg lg:text-xl mb-8 2xl:text-4xl">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who's doing what and what needs to get
          done.
        </p>


        {/* Email Sign-Up */}
         <div className="flex gap-3 justify-center lg:justify-start">
          <input
            type="email"
            placeholder="Email"
            className="hidden min-[843px]:flex px-4 py-3 rounded-lg border border-black text-gray-900 lg:w-[350px] 2xl:w-[700px] 2xl:h-[70px] 2xl:text-4xl"
          />
          <button className="bg-blue-600 hover:bg-blue-700 bg-blue text-white font-bold  px-6 py-3 rounded-lg 2xl:text-2xl">
            Sign up Now
          </button>
        </div>
      </div>

      {/* Board Mockup */}
    <div className="">
        <img src={LandingImage}  data-aos="zoom-out" className="w-[auto] h-[auto] min-[900px]:w-[500px] min-[900px]:w-[500px] min-[1500px]:w-[800px]  min-[1500px]:h-[800px] min-[2000px]:w-[900px]  min-[2000px]:h-[900px]" alt="LandingImage" />
     </div>
      </div>
      <ProductivitiyPowerHouse/>
      </>
  );
}

export default LandingPage;
