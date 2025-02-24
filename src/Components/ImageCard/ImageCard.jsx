import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImageCard({ image }) {
  return (
    <React.Fragment>
    <div className="relative group cursor-pointer">
  
      <img src={image.src}  className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105" />

      
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
        <FaPlus className="text-white text-4xl" />
      </div>
    </div></React.Fragment>
  );
}
