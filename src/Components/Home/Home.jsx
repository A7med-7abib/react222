import React from "react";
import img_Home from "../../image/avataaars.svg";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    
      <React.Fragment>
      <div className="bg-[#1ABC9C] w-full min-h-screen flex flex-col justify-center items-center text-white text-center">
      
      <img src={img_Home} className="w-40 rounded-full mb-5" alt="Avatar" />

      <h1 className="text-4xl font-bold mb-3">START FRAMEWORK</h1>

   
      <div className="flex items-center justify-center my-3">
        <div className="w-16 h-[2px] bg-white"></div>
        <FaStar className="mx-3 text-white text-xl" />
        <div className="w-16 h-[2px] bg-white"></div>
      </div>

      
      <p className="text-lg font-light">Graphic Artist - Web Designer -Illustrator</p>
    </div>
  </React.Fragment>
  );
}
