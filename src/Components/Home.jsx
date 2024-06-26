import React from 'react';
import HeroImage1 from '../assets/heroImage1.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { GoDownload } from "react-icons/go";


const Home = () => {
  const pdfData= "data:application/pdf;base64,YourBase64EncodedPDFData";
  const fileName= "resume.pdf";

  return (
    <div 
    name = "home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
      <div 
      className='max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hello, I'm Priyanka Dave</h2>
          <p className='text-gray-500 py-4 max-w-md'>Passionate to work as a FrontEnd developer. I have build some amazing projects. Scroll down to know more about me!
            
          </p>

          <div>
            <a href="/Resume.pdf" download={fileName} style={{ textDecoration: 'none' }}>
          <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
          bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            Download Resume 
           
           
                <GoDownload size={25} className='ml-1' />
                
            
             
         </button> 
         </a>
          </div>
        </div>
          <div >
            <img src={HeroImage1} 
            alt="my profile" 
            className=' rounded-2xl mx-auto w-2/3 md:w-full '
            />
          </div>

       
      </div>
    </div>
    
  );
}

export default Home