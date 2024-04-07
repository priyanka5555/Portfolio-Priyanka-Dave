import React, { useState, useEffect } from 'react';
import weather from "../assets/MyProjects/weather.jpg";
import QRCode from "../assets/MyProjects/QRCode.jpg";
import ImageGallery from "../assets/MyProjects/Nature.jpg";
import axios from 'axios'

const Projects = () => {
  // const [sourceCode, setSourceCode] = useState('');
  const projects = [
    {
      id: 1,
      src: weather,
      githubUrl: "https://priyanka5555.github.io/Weather_App/",
      githubRepoUrl: "https://github.com/priyanka5555/Weather_App",
    },
    {
      id: 2,
      src: QRCode,
      githubUrl: "https://priyanka5555.github.io/QR_Code_Generator/",
      githubRepoUrl: "https://github.com/priyanka5555/QR_Code_Generator",

    },
    {
      id: 3,
      src: ImageGallery,
      githubUrl: "https://priyanka5555.github.io/Imagine_search_engine/",
      githubRepoUrl: "https://github.com/priyanka5555/Imagine_search_engine",
    },

  ]


  return (
    <div name="projects"
      className='py-24 sm:py-32 bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 
          border-gray-200'>
            Projects
          </p>
          <p className='py-6'>Check out some of my work here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, src, githubUrl,githubRepoUrl}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=""
                className='rounded-md duration-200 hover:scale-105' />


              <div className='flex items-center justify-center'>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200'>Live Preview</a>
                <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200'>
                Source Code</a>
  
              </div>
            </div>
          ))}



        </div>

      </div>
    </div>
  );
};

export default Projects