import React, { useEffect, useState } from 'react';

function ProjectCard({ data }) {
  console.log("--------------------------------------------------------------------");
  console.log(data);
  const { 
    projectDetails,
    FrontendTech, 
    BackendTech, 
    DatabaseTech, 
    ToolsAndUtilities,
    DeploymentTech, 
    DevelopmentAndBuildTools, 
    OptionalEnhancements 
  } = data;
  console.log(FrontendTech);
  console.log("--------------------------------------------------------------------"); 

  // Function to render tech stack dynamically
  const renderTechStack = (techArray, title) => {
    return (
      <div className='m-2 p-2 bg-green-100'>
        <h4 className='font-bold text-xl'>{title}</h4>
        <ul className='flex m-2 bg-gray-100 px-6 list-disc flex-wrap'>
          {techArray.map((item, index) => (
            <li key={index} className='mx-6'>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='bg-yellow-300 p-2'>
        
      <div id='title' className='m-2 flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <div className='bg-white flex m-2 p-2 w-12 h-12'>
          <img src={projectDetails.ImgLink} className='bg-transparent' alt="Project Thumbnail"/>
        </div>
        <h3 className='font-bold text-2xl'>{projectDetails.title}</h3>
      </div>
      
      <div id='Links' className='flex bg-slate-300 m-2'>
        <a className='m-2 p-2 bg-green-100' href={projectDetails.LiveLink}>
          <i className="fa-solid fa-link mr-1"></i>Live project Link
        </a>
        <a className='m-2 p-2 bg-green-100' href={projectDetails.GitHubLink}>
          <i className="fa-brands fa-github mr-1"></i> Github Repo link
        </a>
      </div>

      <div id='tech-used' className='bg-slate-300 m-2 p-2'>
        
        {FrontendTech && renderTechStack(FrontendTech, 'Frontend Tech')}
        {BackendTech && renderTechStack(BackendTech, 'Backend Tech')}
        {DatabaseTech && renderTechStack(DatabaseTech, 'Database Tech')}
        {ToolsAndUtilities && renderTechStack(ToolsAndUtilities, 'Tools and Utilities')}
        {DeploymentTech && renderTechStack(DeploymentTech, 'Deployment Tech')}
        {DevelopmentAndBuildTools && renderTechStack(DevelopmentAndBuildTools, 'Development and Build Tools')}
        {OptionalEnhancements && renderTechStack(OptionalEnhancements, 'Optional Enhancements')}
        
      </div>
      
      <div id='Description' className='bg-slate-300 m-2 p-2'>
        {projectDetails.description}
      </div>
    </div>
  );
}

export default ProjectCard;
