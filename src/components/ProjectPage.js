import React from 'react';
import ProjectCard from './ProjectCard';
import { Todo ,SimonGame } from '../utils/data';
const ProjectPage = () => {
   // console.log("this Project page")
   // console.log(Todo)
  return (
    <div className="p-5">
      <h1 className=" text-5xl font-extrabold ... bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">My Projects</h1>
      
      {/* Section for TODO List */}
      <div id="todo" className="mt-10">
        <ProjectCard data={Todo} />
      </div>

      {/* Section for Simon Game */}
      <div id="simon" className="mt-10">
        <ProjectCard data={SimonGame} />
      </div>
    </div>
  );
};

export default ProjectPage;
