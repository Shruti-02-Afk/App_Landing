import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return (
    <div className="container mx-0 mt-12 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5 relative">
          {/* Circular red color patch with scratching effect */}
          <div className="hii absolute w-40 h-40 bg-gradient-to-br from-red-500 via-red-600 to-transparent rounded-full left-64 -top-5"></div>
          <p className="text-6xl font-bold relative z-10">
            Make <span className="">The Best</span> Financial Decisions
          </p>
          <p className="text-sm">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot <br />
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer ">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">Watch Video</p>
            </div>
          </div>
        </div>
        {/* Shifted image slice */}
        <img className="h-[400px] mt-0 ml-0 mr-24" src="/assets/slice.svg" alt="" />
      </div>
      <div className="mt-0 relative">
          <img className="h-[300px]" src='/assets/uifry.svg' alt=''></img>
      </div>
    </div>
  );
};

export default Hero;
