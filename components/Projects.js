import React from 'react'
import Cards from './Cards.js';
import Simon from '../assets/Project/Simon.png'
import Todo from '../assets/Project/todo.png'
const Projects = () => {
  return (
    <div className='container-fluid text-center'>
         <div className='heading'>Projects </div>
         <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center">
          <a href='#' className=' text-center row justify-content-center'> <Cards imageSrc={Simon} title="Simon Game Play" /></a>
          <a href='#' className=' text-center row justify-content-center'><Cards imageSrc={Todo} title="TODO List"/></a>
         </div>

        

         
    </div>
  )
}

export default Projects;