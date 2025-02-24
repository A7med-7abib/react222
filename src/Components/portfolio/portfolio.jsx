import React from 'react';
import { FaStar } from "react-icons/fa6";
import img_1 from "../../image/poert1.png";
import img_2 from "../../image/port2.png";
import img_3 from "../../image/port3.png";
import ImageCard from '../ImageCard/ImageCard';

export default function Portfolio() {
  const images = [
    { id: 1, src: img_1, alt: '' },
    { id: 2, src: img_2, alt: '' },
    { id: 3, src: img_3, alt: '' },
    { id: 4, src: img_1, alt: '' },
    { id: 5, src: img_2, alt: '' },
    { id: 6, src: img_3, alt: '' },

  ];

  return (
    <React.Fragment>
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
    
        <h2 className="text-center text-gray-800 text-3xl font-bold">PORTFOLIO COMPONENT</h2>

      
        <div className="flex items-center justify-center my-4">
          <div className="w-16 h-[5px] bg-gray-800"></div>
          <FaStar className="mx-3 text-gray-800 text-xl" />
          <div className="w-16 h-[5px] bg-gray-800"></div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}
