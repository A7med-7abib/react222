import React from 'react';
import { FaStar } from "react-icons/fa6";

export default function Contact() {
  return (
    <React.Fragment>
  <div className="container w-full pt-20"> 
  <div className="text-center text-gray-800 mt-10">
    <h2 className="text-3xl font-bold">CONTACT SECTION</h2>
  </div>

  <div className="flex items-center justify-center my-4">
    <div className="w-16 h-[5px] bg-gray-800"></div>
    <FaStar className="mx-3 text-gray-800 text-xl" />
    <div className="w-16 h-[5px] bg-gray-800"></div>
  </div>

  <div className="flex justify-center items-center mt-10"> 
    <div className="w-1/3">
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent peer" required />
        <label htmlFor="username" className="absolute text-sm text-[#1ABC9C] top-3 left-0 -z-10 transition-transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input type="text" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent peer" required />
        <label htmlFor="age" className="absolute text-sm text-[#1ABC9C] top-3 left-0 -z-10 transition-transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent peer" required />
        <label htmlFor="email" className="absolute text-sm text-[#1ABC9C] top-3 left-0 -z-10 transition-transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input type="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent peer" required />
        <label htmlFor="password" className="absolute text-sm text-[#1ABC9C] top-3 left-0 -z-10 transition-transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
      </div>

      <button type="submit" className="bg-[#1ABC9C] text-white px-5 py-2 rounded-lg mr-56">send Message</button>
    </div>
  </div>
</div>

      
    </React.Fragment>
  );
}
