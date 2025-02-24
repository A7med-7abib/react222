import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";

export default function Footer() {
  return (
    
   
    <React.Fragment>
<footer className="bg-[#2C3E50] w-full text-white py-12 relative left-0 right-0">
<div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
       
        <div>
          <h3 className="text-xl font-bold">LOCATION</h3>
          <p className="mt-2">2215 John Daniel Drive</p> 
          <p>Clark, MO 65243</p>
        </div>

       
        <div>
          <h3 className="text-xl font-bold">AROUND THE WEB</h3>
          <div className="flex justify-center gap-4 mt-3">
            <a href="#" className="p-3 border border-white rounded-full  ">
              <CiFacebook size={24} />
            </a>
            <a href="#" className="p-3 border border-white rounded-full  ">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="p-3 border border-white rounded-full  ">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="p-3 border border-white rounded-full  ">
              <TiWorld size={24} />
            </a>
          </div>
        </div>

     
        <div>
          <h3 className="text-xl  font-bold">ABOUT FREELANCER</h3>
          <p className="mt-2 ">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>

      </div>

     
      <div className="bg-[#1A252F] text-center py-4 mt-11 absolute bottom-0 left-0 right-0 ">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
     </React.Fragment>
  );
}
