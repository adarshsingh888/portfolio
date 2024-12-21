import React from 'react'
import Cards from './Cards.js';
import Simon from '../../assets/Project/Simon.png'
import Todo from '../../assets/Project/todo.png'
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='m-5 p-4'>
         <div className='font-bold  p-4 text-2xl bg-amber-100'><Link to='/projectpage'>Projects</Link> </div>
         <div className="flex flex-wrap m-5 p-4 justify-start">
         <Link to='/projectpage#simon' className=' flex m-4 p-4 justify-center items-center rounded-md'>  
               <Cards imageSrc={Simon} title="Simon Game Play" />
         </Link>
         <Link to='/projectpage#todo' className='  flex m-4 p-4 justify-center items-center rounded-md'>
             <Cards imageSrc={Todo} title="TODO List"/>
         </Link>
         
         </div>

        

         
    </div>
  )
}

export default Projects;