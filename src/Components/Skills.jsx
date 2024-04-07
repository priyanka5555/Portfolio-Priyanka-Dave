import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import 'bootstrap-icons/font/bootstrap-icons.css';
import  'font-awesome/css/font-awesome.min.css';
import bootstrap from '../assets/bootstrap.png';
import nodejs from '../assets/nodejs.png';

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
   
    {
      id: 4,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-cyan-500'
    },
   
    {
      id: 5,
      src:  nodejs,
      title: 'NODEJS',
      style: 'shadow-green-500'
    },
   
    {
      id: 6,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-teal-500',
    },
   
    {
      id: 7,
      src:bootstrap,
      title: 'BOOTSTRAP',
      style: 'shadow-purple-500'
    },
    {
      id: 8,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400'
    },
   
 
   
   
  ]
  return (
    <div name="skills"
    className='bg-gradient-to-b from-gray-800 to-black py-24 sm:py-32'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 gray-500 p-2 inline'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
         text-center py-8 px-12 sm:px-0'>
          {skills.map(({id,src,title,style}) => (
            <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Skills