import React from "react";
import { FaStar } from "react-icons/fa6";
export default function About() {
  return (
    <React.Fragment>
    <section className="w-full min-h-screen bg-[#1ABC9C] text-white flex flex-col justify-center items-center text-center px-6 py-16">
    
      <h2 className="text-4xl font-bold mb-4">ABOUT COMPONENT</h2>

 
      <div className="flex items-center justify-center my-4">
        <div className="w-16 h-[2px] bg-white"></div>
         <FaStar className="mx-3 text-white text-xl" />
        <div className="w-16 h-[2px] bg-white"></div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-8">
      
        <p className="text-lg leading-relaxed text-left">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>

        <p className="text-lg leading-relaxed text-left">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </section>
    </React.Fragment>
  );
}
