import React, { useState, useEffect } from 'react';
import weather from "../assets/MyProjects/weather.jpg";
import QRCode from "../assets/MyProjects/QRCode.jpg";
import ImageGallery from "../assets/MyProjects/image_generator.jpg";
import axios from 'axios'

const Projects = () => {
  // const [sourceCode, setSourceCode] = useState('');
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      src: weather,
      githubUrl: "https://priyanka5555.github.io/Weather_App/",
      githubRepoUrl: "https://github.com/priyanka5555/Weather_App",
    },
    {
      id: 2,
      name:' QR Code Geneator',
      src: QRCode,
      githubUrl: "https://priyanka5555.github.io/QR_Code_Generator/",
      githubRepoUrl: "https://github.com/priyanka5555/QR_Code_Generator",

    },
    {
      id: 3,
      name: 'Image Search Engine',
      src: ImageGallery,
      githubUrl: "https://priyanka5555.github.io/Imagine_search_engine/",
      githubRepoUrl: "https://github.com/priyanka5555/Imagine_search_engine",
    },

  ]


  return (
    <div name="projects"
      className='py-24 sm:py-32 bg-gradient-to-b from-black to-gray-800 w-full h-fit text-white md:h-fit '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 
          border-gray-200'>
            Projects
          </p>
          <p className='py-6'>I have created a few projects using HTML, CSS and javascript. You can also check out Live Preview and Source Code.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center'>
          {projects.map(({ id,name, src, githubUrl,githubRepoUrl}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <p className='text-3xl text-white mb-4'>{name}</p>
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