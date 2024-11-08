import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.8a9f498b.webp";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center bg-gray-900 p-8 overflow-hidden text-white">
      <div className="relative w-full h-screen" >
        <div className="relative overflow-hidden">
          <img 
            className="w-full h-screen object-cover opacity-40 animate-fadeInImage " 
            src={banner} 
            alt="banner" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        </div>
        
        <div className="text-center transform -translate-y-1/2 text-black">
          <h1 style={{fontSize: "9rem"}} className=" animate-fadeIn text-4xl -mt-96 md:text-5xl lg:text-6xl font-bold mb-4 text-orange-200 animate-slideInText mx-auto">
            Start your
            <span className="text-green-400 font-semibold"> programming</span>
            <br />
            <span className="text-green-400 font-semibold">Journey </span>
            with our <br />
            Dedicated community!
          </h1>
          {/* <h1 className="text-5xl text-white" > Start Your Programming Journey With Our Dedicated Community !</h1> */}
          
          <p className="text-lg md:text-xl text-white mx-auto lg:text-2xl mt-2 animate-pulse text">
            Begin your coding adventure in our community, where learning is always
            appreciated and valued.
          </p>
          
          <Link 
            to="/Courses"
            className="inline-block text-5xl animate-bounce mt-12 px-10 py-10 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 hover:text-black transition-transform transform hover:scale-105 animate-fadeInButton"
          >
            Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
